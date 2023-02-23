import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import Wrapper from '@/layouts/empty.vue';

// 异步菜单
export const asyncRoutes = [
    {
        path: '/table',
        name: '表格展示',
        redirect: '/table/list',
        component: Wrapper,
        meta: {
            title: '表格展示',
            icon: 'monitor'
        },
        children: [{
            path: 'list',
            name: '列表展示',
            component: () => import('@/views/Table/list.vue'),
            meta: {
                title: '列表展示',
                icon: 'star-filled'
            },
        }, {
            path: 'form',
            name: '表单展示',
            component: () => import('@/views/Table/form.vue'),
            meta: {
                title: '表单展示',
                icon: 'star-filled'
            },
        }]
    }, {
        path: '/icon',
        name: '图标管理',
        component: () => import('@/views/Icon.vue'),
        children: [],
        meta: {
            title: '图标管理',
            icon: 'setting'
        }
    }
]

export const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: '登录',
        component: () => import('@/views/Login.vue'),
        hidden: true,
        meta: { title: '登录',}
    },
    {
        path: '/',
        name: 'layout',
        component: Wrapper,
        redirect: '/home',
        children: [{
            path: '/home',
            name: 'home',
            component: () => import('@/views/Home.vue'),
            meta: {
                title: '首页',
                icon: 'odometer',
                affix: true
            }
        }]
    },
    {
        path: '/:catchAll(.*)',
        component: () => import('@/views/NotFound.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes
})

export default router