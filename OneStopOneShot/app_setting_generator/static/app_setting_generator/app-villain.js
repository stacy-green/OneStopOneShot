

const app = Vue.createApp({
    delimiters: ['[[', ']]'],

    data() {
        return {
            jsondata: [],
            message: "",
            firstName: "",
            lastName: "",
            race: "Dragonborn",
            organization: "",
            lifeEvent: "",
            motivation: "",
            typeVillain: "",
            secret: "",
            fear: "",
            gender: "Female",
            playableRaces: [],
            firstNames: [],
            clanNames: [],
            childNames: [],
            virtueNames: [],
            duergarClanNames: [],
            racesWithClans: [],
            hasClan: false,
            hasNames: false,
            ethnicityList: [],
            ethnicity: "norse",




        }
    },

    methods: {

        determineClan: function() {
            if (this.racesWithClans.includes(this.race)){
                this.hasClan = true
            } else {
                this.hasClan = false
            }
        },

        determineNames: function() {
            this.firstNames = []
            this.clanNames = []
            if(racesWithNames.includes(this.race)) {

                this.hasNames = true
            } else if (this.race === "Human") {
                if (this.gender === "Female") {
                    let eth = this.ethnicity
                    for (let name of human[eth][0].female) {
                        console.log(name)
                    }
                } else if (this.gender === "Male") {

                } else if (this.gender === "Other") {

                }
                this.hasNames = true
            } else {
                this.hasNames = false
                this.message = `${this.race} has no prepared names`
            }
            
        },

    },

    watch: {

    },

    created: function() {
        

        
        for (let race of playable_races) {
            this.playableRaces.push(race)
        }
        for (let name of elf[0].child) {
            this.childNames.push(name)
        }
        for (let name of dwarf[0].duergarclan) {
            this.duergarClanNames.push(name)
        }
        for (let race of racesWithClanNames) {
            this.racesWithClans.push(race)
        }
        console.log(this.racesWithClans)
    },
    
    mounted: function() {
        this.determineClan()
    },

}).mount("#app")

// first_name = models.CharField(max_length=255, blank=True, null=True)
// last_name = models.CharField(max_length=255, blank=True, null=True)
// race = models.CharField(max_length=255, blank=True, null=True)
// villain = models.CharField(max_length=255, blank=True, null=True)
// motivations = models.CharField(max_length=255, blank=True, null=True)
// secret = models.CharField(max_length=255, blank=True, null=True)
// fear = models.CharField(max_length=255, blank=True, null=True)
// life_event = models.CharField(max_length=255, blank=True, null=True)