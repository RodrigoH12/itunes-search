<template>
  <div>
      <br>
        <v-container>
            <v-layout row>
                <v-text-field
                    v-model="request"
                    filled
                    label="Enter Artist Name"
                >
                </v-text-field>
                <v-btn
                            color="deep-purple darken-3"
                            outlined
                            dark
                            height="55"
                            v-bind="attrs"
                            v-on="on"
                            @click="submitSearch"
                        >
                            <v-icon>mdi-magnify</v-icon>
                        </v-btn>
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            color="deep-purple darken-3"
                            outlined
                            dark
                            height="55"
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon>mdi-filter</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                        v-for="(item, index) in items"
                        :key="index"
                        link
                        @click="sortFilter = item.type"
                        >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-layout>
        </v-container>

        <v-container class="my-5" grid-list-md>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 :key="index" v-for="(album, index) in sortedArray">
                    <div class="text-left mx-auto custom-card">
                        <v-img v-if="album.artworkUrl100 != null"
                            contain
                            height="300"
                            width="300"
                            :src="resizeImg(album)"
                        ></v-img>
                        <v-img v-else
                            contain
                            height="300"
                            width="300"
                            src="https://upload.wikimedia.org/wikipedia/commons/d/df/ITunes_logo.svg"
                        ></v-img>
                        <v-flex class="text-xs-left" xs12>
                            <div class="subheading font-weight-medium"><b> Album: </b></div>
                            <div class="grey--text albumData">{{ album.collectionName }}</div>
                            <div class="subheading"><b> Artist: </b></div>
                            <div class="grey--text albumData">{{ album.artistName }}</div>
                            <div class="subheading"><b> Price: </b></div>
                            <div class="grey--text albumData">{{album.collectionPrice}} {{ album.Price }} $</div>
                        </v-flex>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ApiSearch',

  components: {
    
  },

  data() {
    return {
        attrs: null,
        on: null,
        sortFilter: null,
        request: '',
        entity: 'album',
        albums: [],
        items: [
            { title: 'Predeterminado', type: null },
            { title: 'Alfabéticamente ascendente  [A - Z]', type: 'asc' },
            { title: 'Alfabéticamente descendente [Z - A]', type: 'desc' }
        ],
      }
  },

  computed: {
    sortedArray() {
        if (this.sortFilter == null) {
            return this.albums;
        }
        else if (this.sortFilter == "asc") {
            return (JSON.parse(JSON.stringify(this.albums))).sort(this.compareAsc);
        }
        else {
            return (JSON.parse(JSON.stringify(this.albums))).sort(this.compareDesc);
        }
    }
  },

  methods: {
        compareAsc(a, b) {
            if (a.collectionName < b.collectionName)
                return -1;
            if (a.collectionName > b.collectionName)
                return 1;
            return 0;
        },
        compareDesc(a, b) {
            if (a.collectionName > b.collectionName)
                return -1;
            if (a.collectionName < b.collectionName)
                return 1;
            return 0;
        },
        async submitSearch() {
            if (this.request === '') {
                return
            }
            const response=await axios.get(`https://itunes.apple.com/search?term=${this.request}&entity=${this.entity}&limit=50`);
            this.albums=response.data.results;
        },
        resizeImg (album) {
            return album.artworkUrl100.replace("100x100", "300x300")
      },
  }
};
</script>
 
<style>
.custom-card {
  max-height: 470px;
  max-width: 300px;
}
.albumData {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
