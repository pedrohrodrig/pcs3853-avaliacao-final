from rest_framework import status
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from .models import Seat
from .serializers import SeatSerializer

# Create your views here.

class SeatView(ModelViewSet):
    def list_all(self, request):
        seats = Seat.objects.all()

        if not seats:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer = SeatSerializer(seats, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def update_seats(self, request):
        serializer = SeatSerializer(data=request.data, many=True)
        if not serializer.is_valid():
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        for seat in serializer.validated_data:
            Seat.objects.filter(name=seat.name).update(status=seat.status)

        return Response(status=status.HTTP_202_ACCEPTED)
