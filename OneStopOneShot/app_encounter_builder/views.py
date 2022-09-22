from django.shortcuts import render, redirect
from django.http import request, HttpResponse, JsonResponse
import json
from django.contrib import auth
from .models import Monster, Encounter
from app_OSOS.models import Portfolio

########################################################################################################

def index(request, portfolio_id):
    portfolio = Portfolio.objects.get(id=portfolio_id)
    if portfolio.user == request.user:
        context = {"portfolio": portfolio}
        return render(request, "app_encounter_builder/index.html", context)
    else:
        return redirect("portfolio:user_profile")

def build_encounter(request, portfolio_id):
    portfolio = Portfolio.objects.get(id=portfolio_id)
    if portfolio.user == request.user:
        context = {"portfolio": portfolio}
        return render(request, "app_encounter_builder/encounter-builder.html", context)
    else:
        return redirect("portfolio:user_profile")

def display_statblock(request):
     if request.method == "GET":
        selected_monster = request.GET.get("selectedmonster")
        monster_to_return = Monster.objects.filter(name=selected_monster)
        # print(monster_to_return)
        data = list(monster_to_return.values())
        # print(data)
        return JsonResponse({"data": data}, safe=False)

def save_encounter(request, portfolio_id):
    if request.method == "GET":
        portfolio = Portfolio.objects.get(id=portfolio_id)
        if portfolio.user == request.user:
            encounter = Encounter()
            encounter.monsters = request.GET.get("mon")
            encounter.party = request.GET.get("par")
            encounter.exp = request.GET.get("exp")
            encounter.adjusted_exp = request.GET.get("adj")
            encounter.difficulty = request.GET.get("dif")
            encounter.user = request.user
            encounter.save()
            encounter.portfolio = portfolio
            portfolio.save()
            encounter.save()
            return redirect('encounter:index', portfolio_id)
        else:
            return redirect("portfolio:user_profile")

def load_encounter(request, portfolio_id):
    user = request.user
    encounters = Encounter.objects.filter(portfolio=portfolio_id)
    data = list(encounters.values("monsters", "party", "exp", "adjusted_exp", "difficulty", "id"))
    return JsonResponse({"data": data}, safe=False)

def delete_encounter(request, portfolio_id, encounter_id):
    encounter = Encounter.objects.get(id=encounter_id)
    if encounter.user == request.user:
        encounter.delete()
        print("Deleted encounter with id: " + str(encounter_id))
    return HttpResponse("Encounter deleted")
