

const app = Vue.createApp({
    delimiters: ['[[', ']]'],

    data() {
        return {
            encounters: [],


        }
    },

    methods: {

    },

    watch: {

    },

    created: function() {
        fetch("load/")
        .then(response => {
            response.json().then(data => {
                console.log(data.data)
                this.encounters = data.data[0]
            })
        })
    },

    mounted: function() {
        
    },

}).mount("#app")