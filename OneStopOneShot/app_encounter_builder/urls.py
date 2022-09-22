from django.urls import path
from . import views

app_name = "encounter"

urlpatterns = [
    path("<int:portfolio_id>/", views.index, name="index"),
    path("build/<int:portfolio_id>/", views.build_encounter, name="build_encounter"),
    path("stats/", views.display_statblock, name="display_statblock"),
    path("save/<int:portfolio_id>/", views.save_encounter, name="save_encounter"),
    path("<int:portfolio_id>/load/", views.load_encounter, name="load_encounter"),
    path("<int:portfolio_id>/delete/<int:encounter_id>/", views.delete_encounter, name="delete_encounter"),
]
