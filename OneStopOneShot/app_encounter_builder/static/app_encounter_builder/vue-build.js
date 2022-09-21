

const app = Vue.createApp({
    delimiters: ['[[', ']]'],

    data() {
        return {
            message: "hello from vue!",
            easyEXP: 25,
            mediumEXP: 50,
            hardEXP: 75,
            deadlyEXP: 100,
            dayEXP: 300,
            party: [1],
            listCRs: [],
            monsters: [],
            selectedCR: "0",
            selectedMonster: "Awakened Shrub",
            statblock: [],
            encounterList: [],
            partySize: "small",
            encounterEXPs: [],
            totalEXP: 0,
            adjustedEXP: 0,
            encounterDifficulty: "Easy",
            statMods: {
                0: "-5",
                1: "-5",
                2: "-4",
                3: "-4",
                4: "-3",
                5: "-3",
                6: "-2",
                7: "-2",
                8: "-1",
                9: "-1",
                10: "+0",
                11: "+0",
                12: "+1",
                13: "+1",
                14: "+2",
                15: "+2",
                16: "+3",
                17: "+3",
                18: "+4",
                19: "+4",
                20: "+5",
                21: "+5",
                22: "+6",
                23: "+6",
                24: "+7",
                25: "+7",
                26: "+8",
                27: "+8",
                28: "+9",
                29: "+9",
                30: "+10"
            },
            strMod: "",
            dexMod: "",
            conMod: "",
            intMod: "",
            wisMod: "",
            chaMod: ""


        }
    },

    methods: {

        calculateStatMods: function() {
            this.strMod = this.statMods[this.statblock.strength]
            this.dexMod = this.statMods[this.statblock.dexterity]
            this.conMod = this.statMods[this.statblock.constitution]
            this.intMod = this.statMods[this.statblock.intelligence]
            this.wisMod = this.statMods[this.statblock.wisdom]
            this.chaMod = this.statMods[this.statblock.charisma]
        },

        calculateEXP: function() {
            this.easyEXP = 0
            this.mediumEXP = 0
            this.hardEXP = 0
            this.deadlyEXP = 0
            this.dayEXP = 0
            for(let player of this.party) {
                player = Number(player)
                this.easyEXP += exp_threshold_per_character_level[player]["Easy"]
                this.mediumEXP += exp_threshold_per_character_level[player]["Medium"]
                this.hardEXP += exp_threshold_per_character_level[player]["Hard"]
                this.deadlyEXP += exp_threshold_per_character_level[player]["Deadly"]
                this.dayEXP += adventuring_day_exp_per_character[player]
            }
        },

        enumerateCRs: function() {
            for(let cr in monsters_by_challenge_rating) {
                this.listCRs.push(cr)
            }
        },

        elaborateMonsters: function() {
            this.monsters = []
            // console.log(this.selectedCR)
            for(let monster of monsters_by_challenge_rating[this.selectedCR]) {
                this.monsters.push(monster)
            }
            this.selectedMonster = this.monsters[0]
            // console.log(this.monsters)
        },

        displayStatblock: function() {
            if (this.selectedMonster != null) {
                this.statblock = []
                fetch(`/encounter/stats/?selectedmonster=${this.selectedMonster}`)
                .then((response) => {response.json().then(data => {
                    // console.log(data.data)
                    this.statblock = data.data[0]
                    this.calculateStatMods()
                })})
                .catch(function(err) {
                    console.log(err)
                })
            }
        },

        calculateMonsterEXP: function() {
            this.totalEXP = 0
            for(let EXP of this.encounterEXPs){
                EXP = Number(EXP)
                this.totalEXP += EXP
            }
            this.adjustEXP()
            // console.log(this.totalEXP)
        },
    
        adjustEXP: function() {
            let multiplier = 0
            if(this.encounterList.length > 0 && this.encounterList.length < 16) {
                if (this.partySize === 'small') {
                    multiplier = encounter_multipliers_per_number_of_monsters_small_party[this.encounterList.length]
                } else if (this.partySize === 'medium') {
                    multiplier = encounter_multipliers_per_number_of_monsters[this.encounterList.length]
                } else if (this.partySize === 'large') {
                    multiplier = encounter_multipliers_per_number_of_monsters_large_party[this.encounterList.length]
                }
            } else if (this.encounterList.length > 15) {
                if (this.partySize === 'small') {
                    multiplier = encounter_multipliers_per_number_of_monsters_small_party[15]
                } else if (this.partySize === 'medium') {
                    multiplier = encounter_multipliers_per_number_of_monsters[15]
                } else if (this.partySize === 'large') {
                    multiplier = encounter_multipliers_per_number_of_monsters_large_party[15]
                }
            }
            this.adjustedEXP = (this.totalEXP) * (multiplier)
            this.calculateDifficulty()
        },

        calculateDifficulty: function() {
            if(this.adjustedEXP <= this.easyEXP) {
                this.encounterDifficulty = "Easy"
            } else if (this.adjustedEXP <= this.mediumEXP) {
                this.encounterDifficulty = "Medium"
            } else if (this.adjustedEXP <= this.hardEXP) {
                this.encounterDifficulty = "Hard"
            } else {
                this.encounterDifficulty = "Deadly"
            }
        },

        deleteCharacter: function(index) {
            if(party.length > 1){
            this.party.splice(index, 1)
            this.calculateEXP()
            this.calculatePartySize()
            this.adjustEXP()
            }
        },

        addCharacter: function() {
            this.party.push(1)
            this.calculateEXP()
            this.calculatePartySize()
            this.adjustEXP()
        },

        updatePlayer: function(playerIndex, newLevel){
            this.party[playerIndex] = Number(newLevel)
            this.calculateEXP()
            this.calculatePartySize()
            this.adjustEXP()
        },

        addMonster: function() {
            if(this.selectedMonster != null){
            this.encounterList.push(`${this.statblock.name}, CR: ${this.statblock.cr}`)
            let EXP = exp_by_challenge_rating[this.selectedCR]
            this.encounterEXPs.push(EXP)
            // console.log(this.encounterEXPs)
            this.calculateMonsterEXP()
            }
        },

        removeMonster: function(monster) {
            monster = String(monster)
            let currentCRIndex = this.encounterList.indexOf(monster)
            this.encounterList.splice(this.encounterList.indexOf(monster), 1)
            this.encounterEXPs.splice(currentCRIndex, 1)
            this.calculateMonsterEXP()
        },

        calculatePartySize: function(){
            if(this.party.length < 3) {
                this.partySize = 'small'
            } else if (this.party.length < 6) {
                this.partySize = 'medium'
            } else {
                this.partySize = 'large'
            }
            // console.log(this.partySize)
        },

        saveParty: function() {
            // save to local storage
            const partyString = JSON.stringify(this.party)
            localStorage.setItem("party", partyString)
            console.log(partyString)

        },

        saveEncounter: function(portfolio_id) {
            // save to database 
            let partyString = JSON.stringify(this.party)
            let monsterString = JSON.stringify(this.encounterList)
            fetch(`/encounter/save/${portfolio_id}/?par=${partyString}&mon=${monsterString}&exp=${this.totalEXP}&adj=${this.adjustedEXP}&dif=${this.encounterDifficulty}`)
            .then(
                window.location = `../../${portfolio_id}`
            )
        },

    },

    watch: {

    },

    created: function() {
        if(localStorage.getItem("party")) {
            this.party = JSON.parse(localStorage.getItem("party"))
            for(i = 0; i < this.party.length; i++){
                this.party[i] = Number(this.party[i])
            }
            console.log(this.party)
        } else {
            this.party = [1]
        }
    },

    mounted: function() {
        this.enumerateCRs()
        this.elaborateMonsters()
        this.updatePlayer()
        this.selectedMonster = "Awakened Shrub"
        this.displayStatblock()
    },

}).mount("#app")