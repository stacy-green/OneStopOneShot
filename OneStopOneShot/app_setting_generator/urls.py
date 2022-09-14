from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("createvillain/", views.create_villain, name="create_villain"),

]
