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

def save_map(request, portfolio_id):
    portfolio = Portfolio.objects.get(id=portfolio_id)
    map_name = request.GET.get("name")
    new_map = Map.objects.get(img=map_name)
    portfolio.maps.add(new_map)
    new_map.save()
    return HttpResponse("Map saved")

def remove_map(request, portfolio_id):
    battlemaps = list(Map.objects.filter(portfolio=portfolio_id))
    print(battlemaps)
    portfolio = Portfolio.objects.get(id=portfolio_id)
    print(portfolio)
    context = {
        "portfolio": portfolio,
        "battlemaps": battlemaps
        }
    return render(request, "app_map_generator/remove-map.html", context)

def delete_map(request, portfolio_id):
    if request.method == "GET":
        map_id = request.GET.get("map")
        print(map_id)
        battlemap = Map.objects.get(id=map_id)
        portfolio = Portfolio.objects.get(id=portfolio_id)
        battlemap.portfolio.remove(portfolio)
    return redirect("portfolio:update_portfolio", portfolio_id)