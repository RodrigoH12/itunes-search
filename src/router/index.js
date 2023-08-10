import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '@/views/Home.vue';
import JsonSearch from '@/views/JsonSearch.vue';
import apiSearch from '@/views/ApiSearch.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/jsonSearch',
        name: 'jsonSearch',
        component: JsonSearch
    },
    {
        path: '/apiSearch',
        name: 'apiSearch',
        component: apiSearch
    }
];

const router = new VueRouter({
    routes
});

export default router;
