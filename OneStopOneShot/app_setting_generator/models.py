from django.db import models

# Create your models here.

class Villain(models.Model):

    first_name = models.CharField(max_length=255, blank=True, null=True)
    last_name = models.CharField(max_length=255, blank=True, null=True)
    race = models.CharField(max_length=255, blank=True, null=True)
    villain = models.CharField(max_length=255, blank=True, null=True)
    motivations = models.CharField(max_length=255, blank=True, null=True)
    secret = models.CharField(max_length=255, blank=True, null=True)
    fear = models.CharField(max_length=255, blank=True, null=True)
    life_event = models.CharField(max_length=255, blank=True, null=True)
    
    def __str__(self):
        return f"{self.last_name}, {self.first_name}"

class NPC(models.Model):
    first_name = models.CharField(max_length=255, blank=True, null=True)
    last_name = models.CharField(max_length=255, blank=True, null=True)
    race = models.CharField(max_length=255, blank=True, null=True)
    character_class = models.CharField(max_length=255, blank=True, null=True)
    background = models.CharField(max_length=255, blank=True, null=True)
    personality_1 = models.CharField(max_length=255, blank=True, null=True)
    personality_2 = models.CharField(max_length=255, blank=True, null=True)
    ideal = models.CharField(max_length=255, blank=True, null=True)
    bond = models.CharField(max_length=255, blank=True, null=True)
    flaw = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):

        return f"{self.last_name}, {self.first_name}"