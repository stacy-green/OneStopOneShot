from django.shortcuts import render, redirect
from django.http import request, HttpResponse, JsonResponse
import json
from django.contrib import auth

#########################################################################################################

def index(request):

    return render(request, "app_setting_generator/index-setting.html")


# Villain
#     first_name = models.CharField(max_length=255)
#     last_name = models.CharField(max_length=255)
#     race = models.CharField(max_length=255)
#     villain_type = models.CharField(max_length=255)
#     motivations = models.CharField(max_length=255)
#     secret = models.CharField(max_length=255)
#     fear = models.CharField(max_length=255)
#     life_event = models.CharField(max_length=255)

# NPC
    # first_name = models.CharField(max_length=255)
    # last_name = models.CharField(max_length=255)
    # race = models.CharField(max_length=255)
    # character_class = models.CharField(max_length=255)
    # background = models.CharField(max_length=255)
    # personality_1 = models.CharField(max_length=255)
    # personality_2 = models.CharField(max_length=255)
    # ideal = models.CharField(max_length=255)
    # bond = models.CharField(max_length=255)
    # flaw = models.CharField(max_length=255)