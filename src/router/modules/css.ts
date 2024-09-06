import type { RouteRecordRaw } from 'vue-router'

function Layout() {
    return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
    path: '/nv_css_animate',
    redirect: '/nv_css_animate/index',
    component: Layout,
    meta: { 
        title: 'Css动画',
        icon: 'HelpFilled',
        alwaysShow: true,
    },
    children: [{
        path: 'index',
        name: 'cssAnimate',
        component: () => import('@/views/nv_components/nv_css_animate/index.vue'),
        meta: { 
            title: 'cssAnimate',
            icon: 'star-filled',
            menu: false,
            breadcrumb: false,
            activeMenu: '/nv_css_animate'
        }
    }]
}

export default routes