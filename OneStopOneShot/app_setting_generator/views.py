from django.shortcuts import render, redirect
from django.http import request, HttpResponse, JsonResponse
import json
from django.contrib import auth
from app_OSOS.models import Portfolio

from app_setting_generator.forms import NewVillainForm
from .models import Villain

#########################################################################################################

def index(request):
    villains = Villain.objects.filter(user=request.user)
    data = list(villains.values())
    # print(data)
    context = {"data": data}
    return render(request, "app_setting_generator/index-setting.html", context)

def create_villain(request, portfolio_id):
    portfolio = Portfolio.objects.get(id=portfolio_id)
    if portfolio.user == request.user:
        context = {"portfolio": portfolio}
        return render(request, "app_setting_generator/create-villain.html", context)
    else:
        return redirect("portfolio:user_profile")

def save_villain(request, portfolio_id):
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
            new_portfolio = Portfolio.objects.get(id=portfolio_id)
            villain.portfolio = new_portfolio
            new_portfolio.save()
            villain.save()
    return redirect("portfolio:update_portfolio", portfolio_id)

def detail_villain(request, villain_id):
    villain = Villain.objects.filter(id=villain_id)
    villain = list(villain.values())
    if villain[0]["user_id"] == request.user.id:
        context = {
            "villain": villain[0]
        }
        return render(request, "app_setting_generator/detail-villain.html", context)
    else:
        return redirect("setting:index-setting") 

def delete_villain(request, villain_id):
    villain = Villain.objects.get(id=villain_id)
    portfolio = villain.portfolio.id
    if villain.user == request.user:
        villain.delete()
    return redirect("portfolio:update_portfolio", portfolio)

###########################################################################################################
""" Currently unused. I may create an NPC generator sometime in the future """
# def create_NPC(request):

#     return
