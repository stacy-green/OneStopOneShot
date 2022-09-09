

const app = Vue.createApp({
    delimiters: ['[[', ']]'],

    data() {
        return {
            selectedMapSize: "0",
            mapSizeList: ["Small", "Medium", "Large"],
            selectedMap: null,
            jsondata: null,
            mapList: [],


        }
    },

    methods: {
        loadMaps: function() {
            fetch(`get/?size=${this.selectedMapSize}`)
            .then(response => {
                response.json()
                .then(data => {
                    this.jsondata = data.data
                    console.log(this.jsondata)
                })
            })
        },

        buildMapList: function() {
            for(i = 0; i < this.jsondata.length; i++) {
                this.mapList.push(this.jsondata[i].img)
            } 
            console.log(this.mapList)
        },

        displayMap: function() {
            let listIndex = Math.floor(Math.random() * this.mapList.length)
            this.selectedMap = this.mapList[listIndex]
            console.log(this.selectedMap)
        },

    },

    watch: {

    },

    created: function() {
      this.loadMaps()
    },
    
    mounted: function() {
    },

}).mount("#app")