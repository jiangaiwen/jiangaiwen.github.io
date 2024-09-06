import type { RouteRecordRaw } from 'vue-router'

function Layout() {
    return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
    path: '/nv_table',
    redirect: '/nv_table/nv_comprehensive_table',
    component: Layout,
    meta: { 
        title: '表格',
        icon: 'menu'
    },
    children: [{
        path: 'nv_comprehensive_table',
        name: '综合表格',
        component: () => import('@/views/nv_table/nv_comprehensive_table/index.vue'),
        meta: { 
            title: '综合表格',
            icon: 'star-filled'
        }
    }, {
        path: 'nv_custom_table',
        name: '自定义表格',
        component: () => import('@/views/nv_table/nv_custom_table/index.vue'),
        meta: { 
            title: '自定义表格',
            icon: 'star-filled'
        }
    }]
}

export default routes