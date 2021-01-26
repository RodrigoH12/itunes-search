<template>
  <div>
        <v-container>
            <v-layout row>
                <v-flex xs11>
                    <v-text-field
                        v-model="request"
                        filled
                        label="Enter Artist Name"
                        clearable
                    >
                    </v-text-field>
                </v-flex>
                <v-flex>
                    <v-btn outlined type="submit" height="55" width="100">
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-container>

  </div>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data() {
    return {
        request: 'Jack+Johnson'
      }
  },
};
</script>