from django.db import models

# Create your models here.
class Expense(models.Model):
    CATEGORY_CHOICES = [
        ('Food', 'Food'),
        ('Travel', 'Travel'),
        ('Shopping', 'Shopping'),
        ('Bills', 'Bills'),
        ('Other', 'Other'),
    ]

    title = models.CharField(max_length=100)
    amount = models.FloatField()
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    date = models.DateField()
    notes = models.TextField(blank=True)

    def __str__(self):
        return self.title
