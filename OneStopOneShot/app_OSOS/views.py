from django.shortcuts import render, redirect
from django.http import request, HttpResponse, JsonResponse
import json
from django.contrib import auth
from app_encounter_builder.models import Encounter
from .models import Portfolio

######################################################################################################

def index(request):
    
    return render(request, "app_OSOS/index-OSOS.html")

def user_profile(request):

    pass

def login(request):

    pass

def logout(request):

    pass

def signup(request):

    pass


    