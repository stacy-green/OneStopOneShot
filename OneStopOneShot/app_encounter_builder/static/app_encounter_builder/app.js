

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
            monsters: [],

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
            // console.log(this.easyEXP)
            // console.log(this.mediumEXP)
            // console.log(this.hardEXP)
            // console.log(this.deadlyEXP)
            // console.log(this.dayEXP)
        },

        enumerateCRs: function() {

        },

        elaborateMonsters: function() {

        },

        calculateMonsterEXP: function() {

        },
    
        adjustEXP: function() {

        },

        deleteCharacter: function(index) {
            this.party.splice(index, 1)
            this.calculateEXP()
        },

        addCharacter: function() {
            this.party.push(1)
            this.calculateEXP()
        },

        updatePlayer: function(playerIndex, newLevel){
            this.party[playerIndex] = newLevel
            this.calculateEXP()
        }
    },

    watch: {

    },

    created: function() {

    },

    mounted: function() {

    },

}).mount("#app")