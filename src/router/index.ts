import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeComponent from '@/views/HomeView.vue';
import HomePage from '@/components/HomePage.vue';
import SearchPage from '@/components/SearchPage.vue';
import PodcastsPage from '@/components/PodcastsPage.vue';
import CollectionPage from '@/components/CollectionPage.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: HomeComponent,
        children: [
            {
                path: '/',
                component: HomePage
            },
            {
                path: '/search',
                component: SearchPage
            },
            {
                path: '/podcasts',
                component: PodcastsPage
            },
            {
                path: '/collection',
                component: CollectionPage
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router