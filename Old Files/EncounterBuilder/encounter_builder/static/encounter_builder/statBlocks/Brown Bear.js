const monster = {
	"name": "Brown Bear",
	"source": "MM",
	"page": 319,
	"srd": true,
	"basicRules": true,
	"otherSources": [
		{
			"source": "PotA"
		},
		{
			"source": "SKT"
		},
		{
			"source": "TftYP"
		},
		{
			"source": "GoS"
		},
		{
			"source": "IMR"
		},
		{
			"source": "MOT"
		},
		{
			"source": "IDRotF"
		},
		{
			"source": "WBtW"
		}
	],
	"size": [
		"L"
	],
	"type": "beast",
	"alignment": [
		"U"
	],
	"ac": [
		{
			"ac": 11,
			"from": [
				"natural armor"
			]
		}
	],
	"hp": {
		"average": 34,
		"formula": "4d10 + 12"
	},
	"speed": {
		"walk": 40,
		"climb": 30
	},
	"str": 19,
	"dex": 10,
	"con": 16,
	"int": 2,
	"wis": 13,
	"cha": 7,
	"skill": {
		"perception": "+3"
	},
	"passive": 13,
	"cr": "1",
	"trait": [
		{
			"name": "Keen Smell",
			"entries": [
				"The bear has advantage on Wisdom ({@skill Perception}) checks that rely on smell."
			]
		}
	],
	"action": [
		{
			"name": "Multiattack",
			"entries": [
				"The bear makes two attacks: one with its bite and one with its claws."
			]
		},
		{
			"name": "Bite",
			"entries": [
				"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d8 + 4}) piercing damage."
			]
		},
		{
			"name": "Claws",
			"entries": [
				"{@atk mw} {@hit 6} to hit, reach 5 ft., one target. {@h}11 ({@damage 2d6 + 4}) slashing damage."
			]
		}
	],
	"environment": [
		"arctic",
		"forest",
		"hill"
	],
	"soundClip": {
		"type": "internal",
		"path": "bestiary/brown-bear.mp3"
	},
	"traitTags": [
		"Keen Senses"
	],
	"actionTags": [
		"Multiattack"
	],
	"damageTags": [
		"P",
		"S"
	],
	"miscTags": [
		"MW"
	],
	"hasToken": true
}