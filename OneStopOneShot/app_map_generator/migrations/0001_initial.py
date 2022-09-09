# Generated by Django 4.1 on 2022-09-09 02:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('app_OSOS', '0002_remove_portfolio_encounters'),
    ]

    operations = [
        migrations.CreateModel(
            name='Map',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.ImageField(default=None, upload_to='images/')),
                ('size', models.CharField(blank=True, max_length=16, null=True)),
                ('portfolio', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='maps', to='app_OSOS.portfolio')),
            ],
        ),
    ]
