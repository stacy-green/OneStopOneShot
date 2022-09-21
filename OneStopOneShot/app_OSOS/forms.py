from django import forms

class NewPortfolioForm(forms.Form):
    name = forms.CharField(max_length=255)

class AuthForm(forms.Form):
    username = forms.CharField(max_length=12, label="Username")
    password = forms.CharField(max_length=12, label="Password", widget=forms.PasswordInput)