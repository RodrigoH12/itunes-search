import Vue from "vue";
import VueRouter from "vue-router";
import home from "@/views/Home.vue";
import searchView from "@/views/SearchView.vue";

Vue.use(VueRouter)

const routes = [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/search",
      name: "search",
      component: searchView
    }
  ];
  
  const router = new VueRouter({
    routes
  });
  
  export default router;