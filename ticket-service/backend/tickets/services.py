import datetime as dt

import requests
from django.conf import settings


class BaseService:
    def _get_response(self, url, headers=None, params=None):
        response = requests.get(url, headers=headers, params=params)

        return response.json()

    def _post_response(self, url, data, headers=None):
        response = requests.post(url, json=data, headers=headers)

        return response.json()

    def _patch_response(self, url, data=None, files=None, headers=None):
        response = requests.patch(url, data=data, files=files, headers=headers)

        return response.json()

    def _delete_response(self, url, data=None, headers=None):
        response = requests.delete(url, json=data, headers=headers)

        return response.json()
    

class SeatMapService(BaseService):
    def _import_settings(self):
        self.url = settings.SEAT_MAP_SERVICE_URL

    def __init__(self):
        self._import_settings()
        self.seat_url = self.url + "/seat/"

    def list_seats(self, request, params=None):
        response = self._get_response(self.seat_url, params=params,)

        return response
    
    def book_seats(self, request, data):
        response = self._patch_response(self.seat_url, data)

        return response