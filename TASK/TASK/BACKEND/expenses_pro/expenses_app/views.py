from django.shortcuts import render

# Create your views here.
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Sum
import requests

from .models import Expense
from .serializers import ExpenseSerializer

class ExpenseViewSet(ModelViewSet):
    queryset = Expense.objects.all().order_by('-date')
    serializer_class = ExpenseSerializer


@api_view(['GET'])
def dashboard_summary(request):
    total = Expense.objects.aggregate(total=Sum('amount'))['total'] or 0

    category_data = (
        Expense.objects
        .values('category')
        .annotate(total=Sum('amount'))
    )

    return Response({
        "total_expense": total,
        "category_breakdown": category_data
    })


@api_view(['GET'])
def currency_convert(request):
    amount = float(request.GET.get('amount'))
    to = request.GET.get('to')

    url = "https://api.exchangerate-api.com/v4/latest/INR"
    data = requests.get(url).json()

    converted = amount * data['rates'][to]
    return Response({"converted_amount": round(converted, 2)})
