const monster = {
	"name": "Animated Armor",
	"group": [
		"Animated Objects"
	],
	"source": "MM",
	"page": 19,
	"srd": true,
	"basicRules": true,
	"otherSources": [
		{
			"source": "CoS"
		},
		{
			"source": "RoT"
		},
		{
			"source": "SKT"
		},
		{
			"source": "TftYP"
		},
		{
			"source": "WDH"
		},
		{
			"source": "WDMM"
		},
		{
			"source": "GoS"
		},
		{
			"source": "BGDIA"
		},
		{
			"source": "EGW"
		},
		{
			"source": "IDRotF"
		},
		{
			"source": "TCE"
		},
		{
			"source": "CM"
		},
		{
			"source": "WBtW"
		}
	],
	"size": [
		"M"
	],
	"type": "construct",
	"alignment": [
		"U"
	],
	"ac": [
		{
			"ac": 18,
			"from": [
				"natural armor"
			]
		}
	],
	"hp": {
		"average": 33,
		"formula": "6d8 + 6"
	},
	"speed": {
		"walk": 25
	},
	"str": 14,
	"dex": 11,
	"con": 13,
	"int": 1,
	"wis": 3,
	"cha": 1,
	"senses": [
		"blindsight 60 ft. (blind beyond this radius)"
	],
	"passive": 6,
	"immune": [
		"poison",
		"psychic"
	],
	"conditionImmune": [
		"blinded",
		"charmed",
		"deafened",
		"exhaustion",
		"frightened",
		"paralyzed",
		"petrified",
		"poisoned"
	],
	"cr": "1",
	"trait": [
		{
			"name": "Antimagic Susceptibility",
			"entries": [
				"The armor is {@condition incapacitated} while in the area of an {@spell antimagic field}. If targeted by {@spell dispel magic}, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall {@condition unconscious} for 1 minute."
			]
		},
		{
			"name": "False Appearance",
			"entries": [
				"While the armor remains motionless, it is indistinguishable from a normal suit of armor."
			]
		}
	],
	"action": [
		{
			"name": "Multiattack",
			"entries": [
				"The armor makes two melee attacks."
			]
		},
		{
			"name": "Slam",
			"entries": [
				"{@atk mw} {@hit 4} to hit, reach 5 ft., one target. {@h}5 ({@damage 1d6 + 2}) bludgeoning damage."
			]
		}
	],
	"soundClip": {
		"type": "internal",
		"path": "bestiary/animated-armor.mp3"
	},
	"traitTags": [
		"Antimagic Susceptibility",
		"False Appearance"
	],
	"senseTags": [
		"B"
	],
	"actionTags": [
		"Multiattack"
	],
	"damageTags": [
		"B"
	],
	"miscTags": [
		"MW"
	],
	"hasToken": true,
	"hasFluff": true,
	"hasFluffImages": true
}