
const app = Vue.createApp({
    delimiters: ['[[', ']]'],

    data() {
        return {


        }
    },

    methods: {
        deleteMap: function(portfolio_id, map_id) {
            fetch(`../../${portfolio_id}/delete/?map=${map_id}`)
            window.location = `../../../updateportfolio/${portfolio_id}`
        },

    },

    watch: {
        
    },

    created: function() {

    },
    
    mounted: function() {
    },

}).mount("#app")