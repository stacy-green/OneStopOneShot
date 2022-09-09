from django.core.management.base import BaseCommand
import random
from app_encounter_builder.models import Monster
import csv
from app_encounter_builder.static.app_encounter_builder import Bestiaries

class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        Monster.objects.all().delete()
        with open('app_encounter_builder/static/app_encounter_builder/Bestiaries/FullBestiary.csv') as csv_file:
            data = csv.reader(csv_file, delimiter=",")
            next(data)
            for row in data:
                monster = Monster()
                monster.name = row[0]
                monster.source = row[1]
                monster.size = row[2]
                monster.type = row[3]
                monster.alignment = row[4]
                monster.ac = row[5]
                monster.hp = row[6]
                monster.speed = row[7]
                monster.strength = row[8]
                monster.dexterity = row[9]
                monster.constitution = row[10]
                monster.intelligence = row[11]
                monster.wisdom = row[12]
                monster.charisma = row[13]
                monster.saving_throws = row[14]
                monster.skills = row[15]
                monster.damage_vulnerabilities = row[16]
                monster.damage_resistances = row[17]
                monster.damage_immunities = row[18]
                monster.condition_immunities = row[19]
                monster.senses = row[20]
                monster.languages = row[21]
                monster.cr = row[22]
                monster.traits = row[23]
                monster.actions = row[24]
                monster.bonus_actions = row[25]
                monster.reactions = row[26]
                monster.legendary_action = row[27]
                monster.mythic_actions = row[28]
                monster.lair_actions = row[29]
                monster.regional_effects = row[30]
                monster.environment = row[31]
                monster.save()