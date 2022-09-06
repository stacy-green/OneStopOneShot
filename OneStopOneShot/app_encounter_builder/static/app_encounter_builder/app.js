

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
            selectedMonster: null,
            statblock: [],
            encounterList: [],
            partySize: null,
            encounterEXPs: [],
            totalEXP: 0,
            adjustedEXP: 0,
            encounterDifficulty: null,


        }
    },

    methods: {
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
            // console.log(this.monsters)
        },

        displayStatblock: function() {
            if (this.selectedMonster != null) {
                this.statblock = []
                fetch(`/encounter/stats/?selectedmonster=${this.selectedMonster}`)
                .then((response) => {response.json().then(data => {
                    // console.log(data.data)
                    this.statblock = data.data[0]
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
            console.log(this.totalEXP)
        },
    
        adjustEXP: function() {

        },

        deleteCharacter: function(index) {
            this.party.splice(index, 1)
            this.calculateEXP()
            this.calculatePartySize()
        },

        addCharacter: function() {
            this.party.push(1)
            this.calculateEXP()
            this.calculatePartySize()
        },

        updatePlayer: function(playerIndex, newLevel){
            this.party[playerIndex] = newLevel
            this.calculateEXP()
            this.calculatePartySize()
        },

        addMonster: function() {
            this.encounterList.push(`${this.statblock.name}, CR: ${this.statblock.cr}`)
            let EXP = exp_by_challenge_rating[this.selectedCR]
            this.encounterEXPs.push(EXP)
            // console.log(this.encounterEXPs)
            this.calculateMonsterEXP()
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

    },

    watch: {

    },

    created: function() {

    },

    mounted: function() {
        this.enumerateCRs()
        this.elaborateMonsters()
    },

}).mount("#app")