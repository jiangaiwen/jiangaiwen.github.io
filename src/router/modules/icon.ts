import type { RouteRecordRaw } from 'vue-router'

function Layout() {
    return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
    path: '/nv_icon',
    redirect: '/nv_icon/index',
    component: Layout,
    meta: { 
        title: '图标',
        icon: 'HelpFilled'
    },
    children: [{
        path: 'index',
        name: 'icon',
        component: () => import('@/views/nv_icon/index.vue'),
        meta: { 
            title: 'icon',
            icon: 'star-filled',
            menu: false,
            breadcrumb: false,
            activeMenu: '/nv_icon'
        }
    }]
}

export default routes