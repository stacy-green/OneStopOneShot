# Generated by Django 4.1 on 2022-09-09 03:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_OSOS', '0002_remove_portfolio_encounters'),
        ('app_map_generator', '0002_remove_map_portfolio_map_portfolio'),
    ]

    operations = [
        migrations.AlterField(
            model_name='map',
            name='portfolio',
            field=models.ManyToManyField(blank=True, related_name='maps', to='app_OSOS.portfolio'),
        ),
    ]
