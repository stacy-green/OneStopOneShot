

const app = Vue.createApp({
    delimiters: ['[[', ']]'],

    data() {
        return {
            selectedMapSize: "0",
            mapSizeList: ["Small", "Medium", "Large"],
            selectedMap: null,
            jsondata: null,
            mapList: [],
            fetching: false,


        }
    },

    methods: {
        loadMaps: function() {
            this.fetching = true
            console.log(this.selectedMapSize)
            fetch(`get/?size=${this.selectedMapSize}`)
            .then(response => {
                return response.json()
            })
                .then(data => {
                    this.jsondata = data.data
                    console.log(this.jsondata)  
                    this.fetching = false
            })
        },

        buildMapList: function() {
            this.mapList = []
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

        saveMap: function(map) {
            fetch(`save/?name=${map}`)
        },

    },

    watch: {
        jsondata: function() {
            this.buildMapList()
        }
    },

    created: function() {
      this.loadMaps()
    },
    
    mounted: function() {
    },

}).mount("#app")