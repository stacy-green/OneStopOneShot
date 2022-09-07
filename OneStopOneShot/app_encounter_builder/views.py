from django.shortcuts import render, redirect
from django.http import request, HttpResponse, JsonResponse
import json
from django.contrib import auth
from .models import Monster, Encounter

########################################################################################################

def index(request):

    return render(request, "app_encounter_builder/index.html")

def build_encounter(request):

    return render(request, "app_encounter_builder/encounter-builder.html")

def display_statblock(request):
     if request.method == "GET":
        selected_monster = request.GET.get("selectedmonster")
        monster_to_return = Monster.objects.filter(name=selected_monster)
        # print(monster_to_return)
        data = list(monster_to_return.values("name", "cr"))
        print(data)
        return JsonResponse({"data": data}, safe=False)

def save_encounter(request):
    if request.method == "GET":
        encounter = Encounter()
        encounter.monsters = request.GET.get("mon")
        encounter.party = request.GET.get("par")
        encounter.exp = request.GET.get("exp")
        encounter.adjusted_exp = request.GET.get("adj")
        encounter.difficulty = request.GET.get("dif")
        encounter.user = request.user
        encounter.save()
    return redirect('index')

def load_encounter(request):


    return


########################################################################################################

# def login(request):
#     if request.method == "GET":
#         return render(request, "app_encounter_builder/login.html")
#     elif request.method == "POST":
#         data = json.loads(request.body)
#         username = data.get("username", "")
#         password = data.get("password", "")

#         user = auth.authenticate(request, username=username, password=password)
#         if user == None:
#             return JsonResponse({"message": "Invalid username or password"})
#         else:
#             auth.login(request, user)
#             return JsonResponse({"message": "Ok"})