from django.db import models
from app_OSOS.models import Portfolio, User

class Monster(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    source = models.CharField(max_length=255, blank=True, null=True)
    size = models.CharField(max_length=255, blank=True, null=True)
    type = models.CharField(max_length=255, blank=True, null=True)
    alignment = models.CharField(max_length=255, blank=True, null=True)
    ac = models.CharField(max_length=255, blank=True, null=True)
    hp = models.CharField(max_length=255, blank=True, null=True)
    speed = models.CharField(max_length=255, blank=True, null=True)
    strength = models.CharField(max_length=255, blank=True, null=True)
    dexterity = models.CharField(max_length=255, blank=True, null=True)
    constitution = models.CharField(max_length=255, blank=True, null=True)
    intelligence = models.CharField(max_length=255, blank=True, null=True)
    wisdom = models.CharField(max_length=255, blank=True, null=True)
    charisma = models.CharField(max_length=255, blank=True, null=True)
    saving_throws = models.TextField(blank=True, null=True)
    skills = models.TextField(blank=True, null=True)
    damage_vulnerabilities = models.TextField(blank=True, null=True)
    damage_resistances = models.TextField(blank=True, null=True)
    damage_immunities = models.TextField(blank=True, null=True)
    condition_immunities = models.TextField(blank=True, null=True)
    senses = models.TextField(blank=True, null=True)
    languages = models.TextField(blank=True, null=True)
    cr = models.TextField(blank=True, null=True)
    traits = models.TextField(blank=True, null=True)
    actions = models.TextField(blank=True, null=True)
    bonus_actions = models.TextField(blank=True, null=True)
    reactions = models.TextField(blank=True, null=True)
    legendary_action = models.TextField(blank=True, null=True)
    mythic_actions = models.TextField(blank=True, null=True)
    lair_actions = models.TextField(blank=True, null=True)
    regional_effects = models.TextField(blank=True, null=True)
    environment = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.name}, CR: {self.cr}"

class Encounter(models.Model):
    monsters = models.TextField(blank=True, null=True)
    party = models.CharField(max_length=255, blank=True, null=True)
    exp = models.CharField(max_length=16, blank=True, null=True)
    adjusted_exp = models.CharField(max_length=16, blank=True, null=True)
    difficulty = models.CharField(max_length=16, blank=True, null=True)
    user = models.ForeignKey(User, related_name="users", on_delete=models.PROTECT, blank=True, null=True)
    portfolio = models.ForeignKey(Portfolio, related_name="portfolios", on_delete=models.PROTECT, blank=True, null=True)
    
    def __str__(self):
        return f"User: {self.user}, Party: {self.party}, Monsters: {self.monsters}"
