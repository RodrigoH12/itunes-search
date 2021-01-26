import Vue from "vue";
import VueRouter from "vue-router";
import searchView from "@/views/searchView.vue";

Vue.use(VueRouter)

const routes = [
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