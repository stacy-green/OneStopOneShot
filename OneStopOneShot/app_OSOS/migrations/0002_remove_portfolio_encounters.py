# Generated by Django 4.1 on 2022-09-08 03:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_OSOS', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='portfolio',
            name='encounters',
        ),
    ]