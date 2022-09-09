from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("get/", views.get_maps, name="get_maps"),
    path("save/", views.save_map, name="save_map"), 
    path("update/", views.update_map, name="update_map")

]
