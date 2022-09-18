from django.urls import path
from . import views

app_name = "portfolio"

urlpatterns = [
    path("", views.index, name="index"),
    path("profile/", views.user_profile, name="user_profile"),
    path("createportfolio/", views.create_portfolio, name="create_portfolio"),
    path("portfolio/<int:portfolio_id>/", views.display_portfolio, name="display_portfolio"),
    path("deleteportfolio/<int:portfolio_id>/", views.delete_portfolio, name="delete_portfolio"),
    path("updateportfolio/<int:portfolio_id>/", views.update_portfolio, name="update_portfolio")

]
