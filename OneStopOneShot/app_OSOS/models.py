from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):

    def __str__(self):
        return self.username

class Portfolio(models.Model):
    name = models.CharField(max_length=255)
    user = models.ForeignKey(User, related_name="portfolios", on_delete=models.CASCADE, blank=True)
    
    def __str__(self):
        return self.name