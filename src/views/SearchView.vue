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
};
</script>
 
<style>

</style>
