from django.urls import path

from .views import SeatView

urlpatterns = [
    path("seat/", SeatView.as_view(actions={"get": "list_all", "patch": "update_seats"}))
]