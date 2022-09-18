from django.urls import path
from . import views

app_name = "setting"

urlpatterns = [
    path("", views.index, name="index-setting"),
    path("createvillain/<int:portfolio_id>", views.create_villain, name="create_villain"),
    path("savevillain/<int:portfolio_id>", views.save_villain, name="save_villain"),
    path("detailvillain/<int:villain_id>/", views.detail_villain, name="detail_villain"),
    path("deletevillain/<int:villain_id>/", views.delete_villain, name="delete_villain"),

]
