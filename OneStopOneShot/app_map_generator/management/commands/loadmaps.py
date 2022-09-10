from django.core.management.base import BaseCommand
from app_map_generator.models import Map
from app_map_generator.static.app_map_generator.maps import Small, Medium, Large

class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        Map.objects.all().delete()

        for x in range(5):
            x = str(x)
            map = Map()
            map.img = "/images/Small_" + x + ".png"
            map.size = "Small"
            map.save()

        for x in range(5):
            x = str(x)
            map = Map()
            map.img = "/images/Medium_" + x + ".png"
            map.size = "Medium"
            map.save()

        for x in range(5):
            x = str(x)
            map = Map()
            map.img = "/images/Large_" + x + ".png"
            map.size = "Large"
            map.save()
