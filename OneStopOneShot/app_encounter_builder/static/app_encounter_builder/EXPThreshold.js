const exp_threshold_per_character_level = {
    1: {
        "Easy": 25,
        "Medium": 50,
        "Hard": 75,
        "Deadly": 100
    },
    2: {
        "Easy": 50,
        "Medium": 100,
        "Hard": 150,
        "Deadly": 200
    },
    3: {
        "Easy": 75,
        "Medium": 150,
        "Hard": 225,
        "Deadly": 400
    },
    4: {
        "Easy": 125,
        "Medium": 250,
        "Hard": 375,
        "Deadly": 500
    },
    5: {
        "Easy": 250,
        "Medium": 500,
        "Hard": 750,
        "Deadly": 1100
    },
    6: {
        "Easy": 300,
        "Medium": 600,
        "Hard": 900,
        "Deadly": 1400
    },
    7: {
        "Easy": 350,
        "Medium": 750,
        "Hard": 1100,
        "Deadly": 1700
    },
    8: {
        "Easy": 450,
        "Medium": 900,
        "Hard": 1400,
        "Deadly": 2100
    },
    9: {
        "Easy": 550,
        "Medium": 1100,
        "Hard": 1600,
        "Deadly": 2400
    },
    10: {
        "Easy": 600,
        "Medium": 1200,
        "Hard": 1900,
        "Deadly": 2800
    },
    11: {
        "Easy": 800,
        "Medium": 1600,
        "Hard": 2400,
        "Deadly": 3600
    },
    12: {
        "Easy": 1000,
        "Medium": 2000,
        "Hard": 3000,
        "Deadly": 4500
    },
    13: {
        "Easy": 1100,
        "Medium": 2200,
        "Hard": 3400,
        "Deadly": 5100
    },
    14: {
        "Easy": 1250,
        "Medium": 2500,
        "Hard": 3800,
        "Deadly": 5700
    },
    15: {
        "Easy": 1400,
        "Medium": 2800,
        "Hard": 4300,
        "Deadly": 6400
    },
    16: {
        "Easy": 1600,
        "Medium": 3200,
        "Hard": 4800,
        "Deadly": 7200
    },
    17: {
        "Easy": 2000,
        "Medium": 3900,
        "Hard": 5900,
        "Deadly": 8800
    },
    18: {
        "Easy": 2100,
        "Medium": 4200,
        "Hard": 6300,
        "Deadly": 9500
    },
    19: {
        "Easy": 2400,
        "Medium": 4900,
        "Hard": 7300,
        "Deadly": 10900
    },
    20: {
        "Easy": 2800,
        "Medium": 5700,
        "Hard": 8500,
        "Deadly": 12700
    },
}

// # The following is for a party of 3-5 adventurers. 
// # If party contains less than 3 members, increase difficulty multiplier by one tier. Use x5 for 15+ monsters. 
// # If party contains 6 or more members, decrease difficulty multiplier by one tier. Use x0.5 for single monsters.
const encounter_multipliers_per_number_of_monsters = {
    1: 1,
    2: 1.5,
    3: 2,
    4: 2,
    5: 2,
    6: 2,
    7: 2.5,
    8: 2.5,
    9: 2.5,
    10: 2.5,
    11: 3,
    12: 3,
    13: 3,
    14: 3,
    15: 4
}

const adventuring_day_exp_per_character = {
    1: 300,
    2: 600,
    3: 1200,
    4: 1700,
    5: 3500,
    6: 4000,
    7: 5000,
    8: 6000,
    9: 7500,
    10: 9000,
    11: 10500,
    12: 11500,
    13: 13500,
    14: 15000,
    15: 18000,
    16: 20000,
    17: 25000,
    18: 27000,
    19: 30000,
    20: 40000
}

