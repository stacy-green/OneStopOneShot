from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.Monster)
admin.site.register(models.Encounter)
admin.site.register(models.User)