from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    # path("login/", views.login, name="login"),
    # path("api/encounters/<int:user_id>/", views.get_saved_encounters, name="get_saved_encounters"),
    path("build/", views.build_encounter, name="build_encounter"),
    path("stats/", views.display_statblock, name="display_statblock"),
]
