from django import forms
from .models import Villain


class NewVillainForm(forms.Form):
    first_name = forms.CharField(max_length=255)
    clan_name = forms.CharField(max_length=255, required=False)
    race = forms.CharField(max_length=255)
    gender = forms.CharField(max_length=255)
    villain_type = forms.CharField(max_length=255, required=False)
    organization = forms.CharField(max_length=255, required=False)
    motivation = forms.CharField(required=False)
    secret = forms.CharField(required=False)
    fear = forms.CharField(required=False)
    life_event = forms.CharField(required=False)