from django.shortcuts import render, redirect
from django.http import request, HttpResponse, JsonResponse
import json
from django.contrib import auth
from app_encounter_builder.models import Encounter
from app_map_generator.models import Map
from app_setting_generator.models import Villain
from .models import Portfolio, User
from .forms import NewPortfolioForm, AuthForm

######################################################################################################

def index(request):
    # display project overview
    return render(request, "app_OSOS/index-OSOS.html")

def user_profile(request):
    portfolios = Portfolio.objects.filter(user=request.user).values()
    data = list(portfolios)
    context = {
        "data": data,
        "user": request.user
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
        context = {
            "portfolio": portfolio
        }
        try:
            villains = Villain.objects.filter(portfolio=portfolio_id)
        except Villain.DoesNotExist:
            villains = "No villain"
        context["villains"] = villains
        
        try:
            battlemaps = Map.objects.filter(portfolio=portfolio_id)
        except Map.DoesNotExist:
            battlemaps = "No battlemaps"
        battlemaps = list(battlemaps)
        context["battlemaps"] = battlemaps
        try:
            encounters = Encounter.objects.filter(portfolio=portfolio_id)
        except Encounter.DoesNotExist:
            encounters = "No encounters"
        context["encounters"] = encounters
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

def signup(request):
    if not request.user.is_anonymous:
        return redirect("portfolio:index")
    if request.method == "POST":
        form = AuthForm(request.POST)
        if form.is_valid():
            user = User.objects.create_user(username=form.cleaned_data['username'], password=form.cleaned_data['password']
            )
            auth.login(request, user)
            return render(request, 'app_OSOS/signup.html')
        else:
            context = {
                'form': form
            }
            return render(request, 'app_OSOS/signup.html', context)
    context = {
        'form': AuthForm()
    }
    return render(request, 'app_OSOS/signup.html', context)

def login(request):
    if request.method == "POST":
        form = AuthForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = auth.authenticate(username=username, password=password)
            if user != None:
                auth.login(request, user)
                next = request.GET.get('next')
                if next:
                    redirect('next')
                return redirect('portfolio:user_profile')
        form.add_error(error="Invalid username and/or password", field="username")
        context = {
            "form": form
        }
        return render(request, 'app_OSOS/login.html', context)
    context = {
        'form': AuthForm()
    }
    return render(request, 'app_OSOS/login.html', context)

def logout(request):
    auth.logout(request)
    return redirect('portfolio:index')