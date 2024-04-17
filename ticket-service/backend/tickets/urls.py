from django.urls import path

from .views import SeatView

urlpatterns = [
    path("list_seats/", SeatView.as_view(actions={"get": "list_seats"})),
    path("book_seats/", SeatView.as_view(actions={"get": "list_seats"}))
]