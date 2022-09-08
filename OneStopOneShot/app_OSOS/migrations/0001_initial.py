# Generated by Django 4.1 on 2022-09-08 03:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('app_encounter_builder', '0003_encounter_difficulty'),
    ]

    operations = [
        migrations.CreateModel(
            name='Portfolio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('encounters', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='encounters', to='app_encounter_builder.encounter')),
            ],
        ),
    ]
