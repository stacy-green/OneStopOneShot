from django.core.management.base import BaseCommand
from app_map_generator.models import Map
from app_map_generator.static.app_map_generator.maps import Small, Medium, Large

class Command(BaseCommand):
    def handle(self, *args, **kwargs):

        # for x in range(len(mapsize) // 2))
        # map = Map()
        # map.img = location
        # map.size = Filename

        pass

