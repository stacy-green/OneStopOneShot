

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
                if(this.virtueBool === true && this.race === "Tiefling") {
                    let listIndex = Math.floor(Math.random() * this.virtueNames.length)
                    this.firstName = this.virtueNames[listIndex]
                } else if (this.childBool === true && this.race === "Elf") {
                    let listIndex = Math.floor(Math.random() * this.childNames.length)
                    this.firstName = this.childNames[listIndex]
                } else {
                    let listIndex = Math.floor(Math.random() * this.firstNames.length)
                    this.firstName = this.firstNames[listIndex]
                }
                // console.log(list)
            } else if (list === this.clanNames) {
                if(this.duergarBool === true && this.race === "Dwarf") {
                    let listIndex = Math.floor(Math.random() * this.duergarClanNames.length)
                    this.clanName = this.duergarClanNames[listIndex]
                } else {
                    let listIndex = Math.floor(Math.random() * this.clanNames.length)
                    this.clanName = this.clanNames[listIndex]
                }
                // console.log(list)
            } else if (list === this.typeVillainList) {
                let listIndex = Math.floor(Math.random() * this.typeVillainList.length)
                this.typeVillain = this.typeVillainList[listIndex]
                // console.log(list)
            } else if (list === this.organizationList) {
                let listIndex = Math.floor(Math.random() * this.organizationList.length)
                this.organization = this.organizationList[listIndex]
                // console.log(list)
            } else if (list === this.motivationList) {
                let listIndex = Math.floor(Math.random() * this.motivationList.length)
                this.motivation = this.motivationList[listIndex]
                // console.log(list)
            } else if (list === this.secretList) {
                let listIndex = Math.floor(Math.random() * this.secretList.length)
                this.secret = this.secretList[listIndex]
                // console.log(list)
            } else if (list === this.fearList) {
                let listIndex = Math.floor(Math.random() * this.fearList.length)
                this.fear = this.fearList[listIndex]
                // console.log(list)
            } else if (list === this.lifeEventList) {
                let listIndex = Math.floor(Math.random() * this.lifeEventList.length)
                this.lifeEvent = this.lifeEventList[listIndex]
                // console.log(this.lifeEvent)
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
                this.message = `${this.race} has no prepared names.`
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
        this.virtueNames = Tiefling[0].virtue
    },
    
    mounted: function() {
        this.determineClan()
        this.determineNames()
    },

}).mount("#app")
