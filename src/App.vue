<template>
  <div id="app">
    <v-app>
      <v-main class="content">
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {  },
  data: () => ({
    //
  })
};
</script>