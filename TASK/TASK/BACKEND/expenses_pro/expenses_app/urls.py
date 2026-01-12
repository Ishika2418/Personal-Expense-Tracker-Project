from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ExpenseViewSet, dashboard_summary, currency_convert

router = DefaultRouter()
router.register('expenses', ExpenseViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('dashboard/', dashboard_summary),
    path('convert/', currency_convert),
]
