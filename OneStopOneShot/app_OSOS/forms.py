from django import forms

class NewPortfolioForm(forms.Form):
    name = forms.CharField(max_length=255)
