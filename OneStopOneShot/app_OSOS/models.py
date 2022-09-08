from django.db import models

# Create your models here.
class Portfolio(models.Model):
    name = models.CharField(max_length=255)
    # map = models.ForeignKey()
    # setting = models.ForeignKey()
    def __str__(self):
        return self.name