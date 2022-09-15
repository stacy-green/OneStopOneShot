from django.shortcuts import render, redirect
from django.http import request, HttpResponse, JsonResponse
import json
from django.contrib import auth

from app_setting_generator.forms import NewVillainForm
from .models import Villain

#########################################################################################################

def index(request):
    villains = Villain.objects.filter(user=request.user)
    data = list(villains.values())
    # data is a list of dictionaries with model fields as keys
    print(data)
    context = {

    }
    return render(request, "app_setting_generator/index-setting.html", context)

def create_villain(request):

    return render(request, "app_setting_generator/create-villain.html")

def save_villain(request):
    if request.method == "POST":
        form = NewVillainForm(request.POST)
        if form.is_valid():
            villain = Villain()
            villain.race = form.cleaned_data['race']
            villain.gender = form.cleaned_data['gender']
            villain.first_name = form.cleaned_data['first_name']
            villain.clan_name = form.cleaned_data['clan_name']
            villain.villain_type = form.cleaned_data['villain_type']
            villain.organization = form.cleaned_data['organization']
            villain.motivation = form.cleaned_data['motivation']
            villain.secret = form.cleaned_data['secret']
            villain.fear = form.cleaned_data['fear']
            villain.life_event = form.cleaned_data['life_event']
            villain.user = request.user
            villain.save()

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