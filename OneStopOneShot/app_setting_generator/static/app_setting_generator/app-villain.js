

const app = Vue.createApp({
    delimiters: ['[[', ']]'],

    data() {
        return {
            jsondata: [],
            message: "",
            firstName: "",
            clanName: "",
            race: "Dragonborn",
            organization: "",
            organizationList: [],
            lifeEvent: "",
            lifeEventList: [],
            motivation: "",
            motivationList: [],
            typeVillain: "",
            typeVillainList: [],
            secret: "",
            secretList: [],
            fear: "",
            fearList: [],
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
            genders: ["Female", "Male", "Other"],
            duergarBool: false,
            virtueBool: false,
            childBool: false,
            useOtherNamesBool: false,


        }
    },

    methods: {

        rollOnTable: function(list) {
            if (list === this.firstNames){
                console.log(list)
            } else if (list === this.clanNames) {
                console.log(list)
            } else if (list === this.typeVillainList) {
                console.log(list)
            } else if (list === this.organizationList) {
                console.log(list)
            } else if (list === this.motivationList) {
                console.log(list)
            } else if (list === this.secretList) {
                console.log(list)
            } else if (list === this.fearList) {
                console.log(list)
            } else if (list === this.lifeEventList) {
                console.log(list)
            }

        },

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
                } else if (this.race === "Half-Orc") {
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
                // console.log(this.firstNames)
                // console.log(this.clanNames)
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
                // console.log(this.firstNames)
                this.hasNames = true
            } else {
                this.hasNames = false
                this.message = `${this.race} has no prepared names. Use other names?`
            }
            
        },

    },

    watch: {

    },

    created: function() {
        
        this.lifeEventList = events
        this.fearList = fears
        this.secretList = secrets
        this.organizationList = organizations
        this.typeVillainList = villainTypes
        this.motivationList = motivations
        this.playableRaces = playable_races
        this.childNames = Elf[0].child
        this.duergarClanNames = Dwarf[0].duergarclan
        this.racesWithClans = racesWithClanNames
        this.ethnicityList = Object.keys(human)
    },
    
    mounted: function() {
        this.determineClan()
        this.determineNames()
    },

}).mount("#app")
