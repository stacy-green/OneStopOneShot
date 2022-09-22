from django.shortcuts import render, redirect
from django.http import request, HttpResponse, JsonResponse
import json
from django.contrib import auth
from app_OSOS.models import Portfolio
from .models import Map
# Create your views here.

def index(request, portfolio_id):
    portfolio = Portfolio.objects.get(id=portfolio_id)
    if portfolio.user == request.user:
        context = {"portfolio": portfolio}
        return render(request, "app_map_generator/index.html", context)
    else:
        return redirect("portfolio:user_profile")

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
    if portfolio.user == request.user:
        map_name = request.GET.get("name")
        new_map = Map.objects.get(img=map_name)
        portfolio.maps.add(new_map)
        new_map.save()
        return HttpResponse("Map saved")
    else: 
        return redirect("portfolio:user_profile")

def remove_map(request, portfolio_id):
    battlemaps = list(Map.objects.filter(portfolio=portfolio_id))
    # print(battlemaps)
    portfolio = Portfolio.objects.get(id=portfolio_id)
    if portfolio.user == request.user:
    # print(portfolio)
        context = {
            "portfolio": portfolio,
            "battlemaps": battlemaps
            }
        return render(request, "app_map_generator/remove-map.html", context)
    else:
        return redirect("portfolio:user_profile")

def delete_map(request, portfolio_id):
    if request.method == "GET":
        portfolio = Portfolio.objects.get(id=portfolio_id)
        if portfolio.user == request.user:
            map_id = request.GET.get("map")
            print(map_id)
            battlemap = Map.objects.get(id=map_id)
            battlemap.portfolio.remove(portfolio)
            return redirect("portfolio:update_portfolio", portfolio_id)
        else:
            return redirect("portfolio:user_profile")

def detail_map(request, map_id):
    battlemap = Map.objects.get(id=map_id)
    context = {"battlemap": battlemap}
    return render(request, "app_map_generator/detail-map.html", context)