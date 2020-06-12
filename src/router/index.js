import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: () => import('@/views/home')
    },{
        path: '/gank',
        name: 'gank',
        component: () => import('@/views/gank')
    },{
        path: '/about',
        name: 'about',
        component: () => import('@/views/about')
    },{
        path: '/test',
        name: 'test',
        component: () => import('@/views/test')
    }]
})