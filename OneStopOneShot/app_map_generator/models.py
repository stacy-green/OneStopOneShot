from django.db import models
from app_OSOS.models import Portfolio
# Create your models here.

class Map(models.Model):
    img = models.ImageField(upload_to='images/', default=None)
    size = models.CharField(max_length=16, blank=True, null=True)
    portfolio = models.ManyToManyField(Portfolio, related_name="maps", blank=True)
    
    def __str__(self):
        return self.size