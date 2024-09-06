import type { RouteRecordRaw } from 'vue-router'

function Layout() {
    return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
    path: '/nv_print',
    redirect: '/nv_print/index',
    component: Layout,
    meta: { 
        title: '打印',
        icon: 'HelpFilled',
        alwaysShow: true,
    },
    children: [{
        path: 'index',
        name: 'print',
        component: () => import('@/views/nv_components/nv_print/index.vue'),
        meta: { 
            title: 'print',
            icon: 'star-filled',
            menu: false,
            breadcrumb: false,
            activeMenu: '/nv_print'
        }
    }]
}

export default routes