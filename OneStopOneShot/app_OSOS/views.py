from django.shortcuts import render, redirect
from django.http import request, HttpResponse, JsonResponse
import json
from django.contrib import auth


######################################################################################################

def index(request):

    return render(request, "app_OSOS/index.html")

def get_portfolios(request):

    pass

def login(request):

    pass

def logout(request):

    pass

def signup(request):

    pass


    