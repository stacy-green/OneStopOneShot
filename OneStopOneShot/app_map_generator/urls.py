from django.urls import path
from . import views

app_name = "map"

urlpatterns = [
    path("<int:portfolio_id>/", views.index, name="index"),
    path("<int:portfolio_id>/get/", views.get_maps, name="get_maps"),
    path("<int:portfolio_id>/save/", views.save_map, name="save_map"), 
    path("<int:portfolio_id>/remove/", views.remove_map, name="remove_map"),
    path("<int:portfolio_id>/delete/", views.delete_map, name="delete_map")

]
