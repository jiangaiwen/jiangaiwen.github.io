import { setupLayouts } from 'virtual:meta-layouts'
import generatedRoutes from 'virtual:generated-pages'
import type { RouteRecordRaw } from 'vue-router'
import type { Route } from '#/global'
import useSettingsStore from '@/store/modules/settings'
import Components from './modules/components'
import Table from './modules/table'
import Css from './modules/css'
import Charts from './modules/charts'
import ECharts from './modules/echarts'
import Editor from './modules/editor'
import Print from './modules/print'
import Icon from './modules/icon'
// import Iframe from './modules/iframe'
import Other from './modules/other'

// 固定路由（默认路由）
const constantRoutes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login.vue'),
        meta: {
            title: '登录',
        },
    },
    {
        path: '/:all(.*)*',
        name: 'notFound',
        component: () => import('@/views/[...all].vue'),
        meta: {
            title: '找不到页面',
        },
    },
]

// 系统路由
const systemRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/layouts/index.vue'),
        meta: {
            title: () => useSettingsStore().settings.home.title,
            breadcrumb: false,
        },
        children: [
            {
                path: '',
                component: () => import('@/views/index.vue'),
                meta: {
                title: () => useSettingsStore().settings.home.title,
                    icon: 'i-ant-design:home-twotone',
                    breadcrumb: false,
                },
            },
            {
                path: 'reload',
                name: 'reload',
                component: () => import('@/views/reload.vue'),
                meta: {
                    title: '重新加载',
                    breadcrumb: false,
                },
            }
        ]
    }
]

// 动态路由（异步路由、导航栏路由）
const asyncRoutes: Route.RouteRecordRaw[] = [
    {
        meta: {
            title: '组件',
            icon: 'i-uim:box',
        },
        children: [
            Components
        ]
    },
    {
        meta: {
            title: '其他',
            icon: 'i-icon-park-outline:circular-connection',
        },
        children: [
            Charts,
            ECharts,
            Print,
            Icon,
            // Iframe,
            Css,
            Other
        ]
    },
    {
        meta: {
            title: '生态',
            icon: 'i-icon-park-outline:circular-connection',
        },
        children: [
            Table,
            Editor
        ]
    }
]

const constantRoutesByFilesystem = generatedRoutes.filter((item) => {
    return item.meta?.enabled !== false && item.meta?.constant === true
})
  
const asyncRoutesByFilesystem = setupLayouts(generatedRoutes.filter((item) => {
    return item.meta?.enabled !== false && item.meta?.constant !== true && item.meta?.layout !== false
}))
  
export {
    constantRoutes,
    systemRoutes,
    asyncRoutes,
    constantRoutesByFilesystem,
    asyncRoutesByFilesystem,
}
  