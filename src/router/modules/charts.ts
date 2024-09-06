import type { RouteRecordRaw } from 'vue-router'

function Layout() {
    return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
    path: '/nv_flow_chart',
    redirect: '/nv_flow_chart/index',
    component: Layout,
    meta: { 
        title: '流程图',
        icon: 'HelpFilled',
        alwaysShow: true,
    },
    children: [{
        path: 'index',
        name: 'LogicFlow',
        component: () => import('@/views/nv_flow_chart/nv_logic_flow/index.vue'),
        meta: { 
            title: 'LogicFlow',
            icon: 'star-filled',
            menu: false,
            breadcrumb: false,
            activeMenu: '/nv_flow_chart'
        }
    }]
}

export default routes