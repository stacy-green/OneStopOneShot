from django.shortcuts import render, redirect
from django.http import request, HttpResponse, JsonResponse
import json
from django.contrib import auth
from app_encounter_builder.models import Encounter
from app_map_generator.models import Map
from app_setting_generator.models import Villain
from .models import Portfolio
from .forms import NewPortfolioForm

######################################################################################################

def index(request):
    # display project overview
    return render(request, "app_OSOS/index-OSOS.html")

def user_profile(request):
    portfolios = Portfolio.objects.filter(user=request.user).values()
    data = list(portfolios)
    context = {
        "data": data
    }
    return render(request, "app_OSOS/user-profile.html", context)

def create_portfolio(request):
    portfolio = Portfolio()
    form = NewPortfolioForm(request.POST)
    if form.is_valid():
        portfolio.name = form.cleaned_data['name']
        portfolio.user = request.user
        portfolio.save()
    return redirect("portfolio:user_profile")

def update_portfolio(request, portfolio_id):
    portfolio = Portfolio.objects.get(id=portfolio_id)
    if portfolio.user == request.user:
        encounters = Encounter.objects.filter(portfolio=portfolio_id)
        battlemaps = list(Map.objects.filter(portfolio=portfolio_id))
        villain = Villain.objects.filter(portfolio=portfolio_id).values()
        print(battlemaps)
        context = {
            "portfolio": portfolio,
            "villain": villain[0],
            "battlemaps": battlemaps
        }
        return render(request, "app_OSOS/update-portfolio.html", context)
    else:
        return redirect("portfolio:user_profile")

def display_portfolio(request, portfolio_id):
    portfolio = Portfolio.objects.get(id=portfolio_id)
    stuff = ''
    if portfolio.user == request.user:
        context = {
            "portfolio": stuff
        }
    # get all things associated with portfolio
    # delete portfolio
    context = {

    }
    return render(request, "app_OSOS/portfolio.html", context)

def delete_portfolio(request, portfolio_id):
    portfolio = Portfolio.objects.get(id=portfolio_id)
    if portfolio.user == request.user:
        portfolio.delete()
    return redirect("portfolio:user_profile")

def login(request):
    # login
    pass

def logout(request):
    # logout
    pass

def signup(request):
    # signup
    pass


    