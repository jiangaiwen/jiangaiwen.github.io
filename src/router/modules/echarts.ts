import type { RouteRecordRaw } from 'vue-router'

function Layout() {
    return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
    path: '/nv_charts',
    component: Layout,
    redirect: '/nv_charts/index',
    name: '图表',
    meta: { 
        title: '图表',
        icon: 'HelpFilled'
    },
    children: [{
        path: 'index',
        name: 'echarts',
        component: () => import('@/views/nv_charts/index.vue'),
        meta: { 
            title: 'echarts',
            icon: 'PieChart',
            menu: false,
            breadcrumb: false,
            activeMenu: '/nv_charts'
        }
    }]
}

export default routes