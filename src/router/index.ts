import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import Wrapper from '@/layouts/empty.vue';

// 异步菜单
export const asyncRoutes = [
    {
        path: '/project',
        name: '项目管理',
        redirect: '/project/list',
        component: Wrapper,
        meta: {
            title: '项目管理',
            icon: 'monitor'
        },
        children: [{
            path: 'list',
            name: '项目列表',
            component: () => import('@/views/Project/list.vue'),
            meta: {
                title: '项目列表',
                icon: 'star-filled'
            },
        }, {
            path: 'group',
            name: '项目分组',
            component: () => import('@/views/Project/group.vue'),
            meta: {
                title: '项目分组',
                icon: 'star-filled'
            },
        }]
    }, {
        path: '/device',
        name: '设备管理',
        redirect: '/device/list',
        component: Wrapper,
        meta: {
            title: '设备管理',
            icon: 'message-box'
        },
        children: [{
            path: 'list',
            name: '设备列表',
            component: () => import('@/views/Device/list.vue'),
            meta: {
                title: '设备列表',
                icon: 'star-filled'
            },
        }, {
            path: 'chart',
            name: '设备统计',
            component: () => import('@/views/Device/chart.vue'),
            meta: {
                title: '设备统计',
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