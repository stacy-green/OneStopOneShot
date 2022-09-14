

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
            ethnicity: "Arabic",
            genders: ["Female", "Male", "Other"]



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
                if (this.race === "Dragonborn") {
                    for (let name of Dragonborn[0].clan) {
                        this.clanNames.push(name)
                    }
                    if (this.gender === "Female") {
                        for (let name of Dragonborn[0].female) {
                            this.firstNames.push(name)
                        }
                    } else if (this.gender === "Male") {
                        for (let name of Dragonborn[0].male) {
                            this.firstNames.push(name)
                        }
                    } else if (this.gender === "Other") {
                        for (let name of Dragonborn[0].female) {
                            this.firstNames.push(name)
                        }
                        for (let name of Dragonborn[0].male) {
                            this.firstNames.push(name)
                        }
                    }
                } else if (this.race === "Dwarf") {
                    for (let name of Dwarf[0].clan) {
                        this.clanNames.push(name)
                    }
                    if (this.gender === "Female") {
                        for (let name of Dwarf[0].female) {
                            this.firstNames.push(name)
                        }
                    } else if (this.gender === "Male") {
                        for (let name of Dwarf[0].male) {
                            this.firstNames.push(name)
                        }
                    } else if (this.gender === "Other") {
                        for (let name of Dwarf[0].female) {
                            this.firstNames.push(name)
                        }
                        for (let name of Dwarf[0].male) {
                            this.firstNames.push(name)
                        }
                    }
                } else if (this.race === "Elf") {
                    for (let name of Elf[0].clan) {
                        this.clanNames.push(name)
                    }
                    if (this.gender === "Female") {
                        for (let name of Elf[0].female) {
                            this.firstNames.push(name)
                        }
                    } else if (this.gender === "Male") {
                        for (let name of Elf[0].male) {
                            this.firstNames.push(name)
                        }
                    } else if (this.gender === "Other") {
                        for (let name of Elf[0].female) {
                            this.firstNames.push(name)
                        }
                        for (let name of Elf[0].male) {
                            this.firstNames.push(name)
                        }
                    }
                } else if (this.race === "Gnome") {
                    for (let name of Gnome[0].clan) {
                        this.clanNames.push(name)
                    }
                    if (this.gender === "Female") {
                        for (let name of Gnome[0].female) {
                            this.firstNames.push(name)
                        }
                    } else if (this.gender === "Male") {
                        for (let name of Gnome[0].male) {
                            this.firstNames.push(name)
                        }
                    } else if (this.gender === "Other") {
                        for (let name of Gnome[0].female) {
                            this.firstNames.push(name)
                        }
                        for (let name of Gnome[0].male) {
                            this.firstNames.push(name)
                        }
                    }
                } else if (this.race === "Halfling") {
                    for (let name of Halfling[0].clan) {
                        this.clanNames.push(name)
                    }
                    if (this.gender === "Female") {
                        for (let name of Halfling[0].female) {
                            this.firstNames.push(name)
                        }
                    } else if (this.gender === "Male") {
                        for (let name of Halfling[0].male) {
                            this.firstNames.push(name)
                        }
                    } else if (this.gender === "Other") {
                        for (let name of Halfling[0].female) {
                            this.firstNames.push(name)
                        }
                        for (let name of Halfling[0].male) {
                            this.firstNames.push(name)
                        }
                    }
                } else if (this.race === "Halforc") {
                    if (this.gender === "Female") {
                        for (let name of Halforc[0].female) {
                            this.firstNames.push(name)
                        }
                    } else if (this.gender === "Male") {
                        for (let name of Halforc[0].male) {
                            this.firstNames.push(name)
                        }
                    } else if (this.gender === "Other") {
                        for (let name of Halforc[0].female) {
                            this.firstNames.push(name)
                        }
                        for (let name of Halforc[0].male) {
                            this.firstNames.push(name)
                        }
                    }
                } else if (this.race === "Lizardfolk") {
                    for (let name of Lizardfolk[0]["general"]) {
                        this.firstNames.push(name)
                    }
                } else if (this.race === "Tiefling") {
                    if (this.gender === "Female") {
                        for (let name of Tiefling[0].female) {
                            this.firstNames.push(name)
                        }
                    } else if (this.gender === "Male") {
                        for (let name of Tiefling[0].male) {
                            this.firstNames.push(name)
                        }
                    } else if (this.gender === "Other") {
                        for (let name of Tiefling[0].female) {
                            this.firstNames.push(name)
                        }
                        for (let name of Tiefling[0].male) {
                            this.firstNames.push(name)
                        }
                    }
                }
                console.log(this.firstNames)
                console.log(this.clanNames)
                this.hasNames = true
            } else if (this.race === "Human") {
                if (this.gender === "Female") {
                    for (let name of human[this.ethnicity][0].female) {
                        this.firstNames.push(name)
                    }
                } else if (this.gender === "Male") {
                    for (let name of human[this.ethnicity][0].male) {
                        this.firstNames.push(name)
                    }
                } else if (this.gender === "Other") {
                    for (let name of human[this.ethnicity][0].female) {
                        this.firstNames.push(name)
                    }
                    for (let name of human[this.ethnicity][0].male) {
                        this.firstNames.push(name)
                    }
                }
                console.log(this.firstNames)
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
        for (let name of Elf[0].child) {
            this.childNames.push(name)
        }
        for (let name of Dwarf[0].duergarclan) {
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