from django.db import models
from django.contrib.auth.models import AbstractUser

class Monster(models.Model):
    name = models.CharField(max_length=32)
    challenge_rating = models.CharField(max_length=4)

    def __str__(self):
        return f"{self.name}, CR: {self.challenge_rating}"

class User(AbstractUser):

    def __str__(self):
        return self.username

class Encounter(models.Model):
    monsters = models.TextField()
    user = models.ForeignKey(User, on_delete=models.PROTECT, blank=True, null=True)
    
    def __str__(self):
        return f"{self.user}: {self.monsters}"
