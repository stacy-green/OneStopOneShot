from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index-setting"),
    path("createvillain/", views.create_villain, name="create_villain"),
    path("save/", views.save_villain, name="save_villain"),

]
