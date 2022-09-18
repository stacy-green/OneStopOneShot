from django.shortcuts import render, redirect
from django.http import request, HttpResponse, JsonResponse
import json
from django.contrib import auth
from app_OSOS.models import Portfolio
from .models import Map
# Create your views here.

def index(request, portfolio_id):
    portfolio = Portfolio.objects.get(id=portfolio_id)
    context = {"portfolio": portfolio}
    return render(request, "app_map_generator/index.html", context)

def get_maps(request, portfolio_id):
    selected_size = request.GET.get("size")
    if selected_size == "0":
        map_size = "Small"
    else:
        map_size = selected_size
    maps = Map.objects.filter(size=map_size)
    data = list(maps.values())
    return JsonResponse({"data": data}, safe=False)

def save_map(request):

    return HttpResponse("OK")

def update_map(request):

    return HttpResponse("OK")