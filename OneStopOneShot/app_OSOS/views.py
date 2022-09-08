from django.shortcuts import render, redirect
from django.http import request, HttpResponse, JsonResponse
import json
from django.contrib import auth


######################################################################################################

def index(request):

    return render(request, "app_OSOS/index.html")


    