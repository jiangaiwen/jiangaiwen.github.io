import type { RouteRecordRaw } from 'vue-router'

function Layout() {
    return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
    path: '/nv_other',
    component: Layout,
    redirect: '/nv_other/index',
    name: '其他',
    meta: { 
        title: '其他',
        icon: 'MoreFilled',
    },
    children: [{
        path: 'index',
        name: '其它',
        component: () => import('@/views/nv_other/index.vue'),
        meta: { 
            title: '其它',
            icon: 'MoreFilled',
            menu: false,
            breadcrumb: false,
            activeMenu: '/nv_other'
        }
    }]
}

export default routes