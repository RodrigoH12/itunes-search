<template>
  <div>
      <br>
        <v-container>
            <v-layout row>
                <v-text-field
                    v-model="request"
                    filled
                    label="Enter Artist Name"
                    clearable
                >
                </v-text-field>
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
                <v-flex xs12 sm6 md4 lg3 :key="item.album_name" v-for="item in sortedArray">
                    <v-card class="text-center mx-auto">
                        <v-img v-if="item.album_img_url != null "
                            contain
                            height="200"
                            :src="item.album_img_url"
                        ></v-img>
                        <v-img v-else
                            contain
                            height="200"
                            src="https://upload.wikimedia.org/wikipedia/commons/d/df/ITunes_logo.svg"
                        ></v-img>
                        <v-card-text class="text-left">
                            <div class="subheading"><b> Album: </b></div>
                            <div class="grey--text">{{ item.album_name }}</div>
                            <div class="subheading"><b> Artist: </b></div>
                            <div class="grey--text">{{ item.artist_name }}</div>
                            <div class="subheading"><b> Price: </b></div>
                            <div class="grey--text">{{ item.album_price }} $</div>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
  </div>
</template>

<script>
import itunes from '@/assets/data/itunes.json'

export default {
  name: 'App',

  components: {
    
  },

  data() {
    return {
        sortFilter: null,
        request: '',
        albums: itunes.albums,
        items: [
            { title: 'Normal', type: null },
            { title: 'Alfabéticamente ascendente [A - Z]', type: 'asc' },
            { title: 'Alfabéticamente descendente [Z - A]', type: 'desc' }
        ],
      }
  },

  computed: {
      filteredList() {
          console.log(JSON.parse(JSON.stringify(this.albums)));
      return this.request === ""
        ? this.albums
        : this.albums.filter(
            item =>
              item.artist_name.includes(this.request)
          );
    },
    sortedArray: function() {
        function compareAsc(a, b) {
            if (a.album_name < b.album_name)
                return -1;
            if (a.album_name > b.album_name)
                return 1;
            return 0;
        }
        function compareDesc(a, b) {
            if (a.album_name > b.album_name)
                return -1;
            if (a.album_name < b.album_name)
                return 1;
            return 0;
        }

        if (this.sortFilter == null) {
            return this.filteredList;
        }
        else if (this.sortFilter == "asc") {
            return (JSON.parse(JSON.stringify(this.filteredList))).sort(compareAsc);
        }
        else {
            return (JSON.parse(JSON.stringify(this.filteredList))).sort(compareDesc);
        }
    }
  },
};
</script>
 
<style>

</style>
