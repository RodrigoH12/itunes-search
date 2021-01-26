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
            </v-layout>
        </v-container>

        <v-container class="my-5" grid-list-md>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 :key="item.album_name" v-for="item in filteredList">
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
        request: '',
        albums: itunes.albums
      }
  },

  computed: {
      filteredList() {
      return this.request === ""
        ? this.albums
        : this.albums.filter(
            item =>
              item.artist_name.includes(this.request)
          );
    },
  },
};
</script>
 
<style>

</style>
