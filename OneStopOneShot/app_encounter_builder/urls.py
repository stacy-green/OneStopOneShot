from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    # path("login/", views.login, name="login"),
    path("build/", views.build_encounter, name="build_encounter"),
    path("stats/", views.display_statblock, name="display_statblock"),
    path("save/", views.save_encounter, name="save_encounter"),
    path("load/", views.load_encounter, name="load_encounter"),
    path("delete/<int:encounter_id>", views.delete_encounter, name="delete_encounter")
]
