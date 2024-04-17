from rest_framework import status
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from .services import SeatMapService


# Create your views here.

class SeatView(ModelViewSet):
    seat_map_service: SeatMapService = None

    def list_seats(self, request):
        response = self.seat_map_service.list_seats(request)

        return Response(response, status=status.HTTP_200_OK)

    def book_seats(self, request):
        response = self.seat_map_service.book_seats(request)

        return Response(response, status=status.HTTP_202_ACCEPTED)
