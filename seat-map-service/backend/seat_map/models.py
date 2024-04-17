from django.db import models

# Create your models here.

class Seat(models.Model):
    STATUS_CHOICES = (
        ("F", "Free"),
        ("B", "Booked"),
        ("U", "Unavailable")
    )

    name = models.CharField(max_length=2, blank=False, null=False)
    status = models.CharField(max_length=1, choices=STATUS_CHOICES, blank=False, null=False)