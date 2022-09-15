from django.shortcuts import render, redirect
from django.http import request, HttpResponse, JsonResponse
import json
from django.contrib import auth

from app_setting_generator.forms import NewVillainForm
from .models import Villain

#########################################################################################################

def index(request):

    return render(request, "app_setting_generator/index-setting.html")

def create_villain(request):

    return render(request, "app_setting_generator/create-villain.html")

def save_villain(request):
    if request.method == "POST":
        form = NewVillainForm(request.POST)
        if form.is_valid():
            villain = Villain()
            villain.race = form.cleaned_data['race']
            print(villain.race)
            # todo_item = TodoItem()
            # todo_item.text = form.cleaned_data['text']
        #  grocery_item = GroceryItem()
        # grocery_item.description = form.get("description")
            pass
    # race
    # gender
    # first_name
    # clan_name
    # villain_type
    # organization
    # motivation
    # secret
    # fear
    # life_event
    return redirect("index-setting")

def create_NPC(request):

    return


# Villain
#     first_name = models.CharField(max_length=255)
#     last_name = models.CharField(max_length=255)
#     race = models.CharField(max_length=255)
#     villain_type = models.CharField(max_length=255)
#     organization
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