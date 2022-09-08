

const app = Vue.createApp({
    delimiters: ['[[', ']]'],

    data() {
        return {
            jsondata: [],
            encountersList: [],
            party: [],
            partyString: "",


        }
    },

    methods: {

        deleteEncounter: function(id) {
            fetch(`delete/${id}`)
            // .then(response => {
            //     console.log(response)
            //     response.json().then(data => {
            //         console.log(data.message)
            //     })
            // })
            
            window.location = ""

        },

    },

    watch: {

    },

    created: function() {
        fetch("load/")
        .then(response => {
            response.json().then(data => {
                console.log(data.data)
                this.jsondata = data.data
                for(i = 0; i < this.jsondata.length; i++){
                    this.encountersList.push(JSON.parse(data.data[i].monsters))
                }
                console.log(this.encountersList)
                this.party = JSON.parse(data.data[0].party)
                console.log(this.party)
                this.partyString = this.party.join(", ")
                console.log(this.partyString)
            })
        })
    },
    
    mounted: function() {
    },

}).mount("#app")