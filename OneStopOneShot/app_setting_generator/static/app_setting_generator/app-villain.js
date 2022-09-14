

const app = Vue.createApp({
    delimiters: ['[[', ']]'],

    data() {
        return {
            jsondata: [],
            villainRaces: [],
            message: "Setting works",
            firstName: "",
            lastName: "",
            race: "",
            organization: "",
            lifeEvent: "",
            motivation: "",
            typeVillain: "",
            secret: "",
            fear: ""

        }
    },

    methods: {

    },

    watch: {

    },

    created: function() {
        

        for(let race of races.races) {
            villainRaces.push(race)
        }
        console.log(villainRaces)
    },
    
    mounted: function() {
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