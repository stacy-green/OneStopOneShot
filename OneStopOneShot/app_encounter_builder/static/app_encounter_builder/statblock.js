
// this is an edited versio of the main app for use only with displaying statblock
const app = Vue.createApp({
    delimiters: ['[[', ']]'],

    data() {
        return {
            statblock: [],
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
// calculates the modifier for the statblock
        calculateStatMods: function() {
            this.strMod = this.statMods[this.statblock.strength]
            this.dexMod = this.statMods[this.statblock.dexterity]
            this.conMod = this.statMods[this.statblock.constitution]
            this.intMod = this.statMods[this.statblock.intelligence]
            this.wisMod = this.statMods[this.statblock.wisdom]
            this.chaMod = this.statMods[this.statblock.charisma]
        },
// Write your own code to retrieve monster from database using this as a template
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
    },

    watch: {},
    created: function() {},
    mounted: function() {},
}).mount("#app")