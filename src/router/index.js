import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: () => import('@/views/home')
    },{
        path: '/theme',
        name: 'theme',
        component: () => import('@/views/theme')
    },{
        path: '/about',
        name: 'about',
        component: () => import('@/views/about')
    }]
})