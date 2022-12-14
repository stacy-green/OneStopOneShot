from django.shortcuts import render
from django.http import request, HttpResponse, JsonResponse
import json
from django.contrib import auth


def index(request):

    return render(request, "encounter_builder/index.html")

def build_encounter(request):

    return render(request, "encounter_builder/buildEncounter.html")

def get_saved_encounters(request, user_id):

    return

def get_encounter(request, encounter_id):

    return

def login(request):
    if request.method == "GET":
        return render(request, "encounter_builder/login.html")
    elif request.method == "POST":
        data = json.loads(request.body)
        username = data.get("username", "")
        password = data.get("password", "")

        user = auth.authenticate(request, username=username, password=password)
        if user == None:
            return JsonResponse({"message": "Invalid username or password"})
        else:
            auth.login(request, user)
            return JsonResponse({"message": "Ok"})