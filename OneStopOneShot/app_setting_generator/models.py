from django.db import models
from app_OSOS.models import User
# Create your models here.

class Villain(models.Model):

    first_name = models.CharField(max_length=255, blank=True, null=True)
    clan_name = models.CharField(max_length=255, blank=True, null=True)
    race = models.CharField(max_length=255, blank=True, null=True)
    gender = models.CharField(max_length=255)
    villain_type = models.CharField(max_length=255, blank=True, null=True)
    organization = models.CharField(max_length=255, blank=True, null=True)
    motivation = models.TextField(blank=True, null=True)
    secret = models.TextField(blank=True, null=True)
    fear = models.TextField(blank=True, null=True)
    life_event = models.TextField(blank=True, null=True)
    user = models.ForeignKey(User, related_name="villains", on_delete=models.CASCADE, null=True)
    
    def __str__(self):
        return f"Name: {self.first_name}, Race: {self.race}, Gender: {self.gender}"

# class NPC(models.Model):
#     first_name = models.CharField(max_length=255, blank=True, null=True)
#     clan_name = models.CharField(max_length=255, blank=True, null=True)
#     race = models.CharField(max_length=255, blank=True, null=True)
#     character_class = models.CharField(max_length=255, blank=True, null=True)
#     background = models.CharField(max_length=255, blank=True, null=True)
#     personality_1 = models.CharField(max_length=255, blank=True, null=True)
#     personality_2 = models.CharField(max_length=255, blank=True, null=True)
#     ideal = models.CharField(max_length=255, blank=True, null=True)
#     bond = models.CharField(max_length=255, blank=True, null=True)
#     flaw = models.CharField(max_length=255, blank=True, null=True)

#     def __str__(self):

#         return f"{self.last_name}, {self.first_name}"

