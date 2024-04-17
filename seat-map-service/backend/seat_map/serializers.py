from rest_framework import serializers

from .models import Seat

class SeatSerializer(serializers.Serializer):
    class Meta:
        model = Seat
        fields = "__all__"