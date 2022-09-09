from django.shortcuts import render, redirect
from django.http import request, HttpResponse, JsonResponse
import json
from django.contrib import auth
from app_OSOS.models import Portfolio
# Create your views here.

def index(request):

    return render(request, "app_map_generator/index.html")

