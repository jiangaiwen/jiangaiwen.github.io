import type { RouteRecordRaw } from 'vue-router'

function Layout() {
    return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
    path: '/nv_iframe',
    redirect: '/nv_iframe/nv_ppt',
    component: Layout,
    meta: { 
        title: 'Iframe',
        icon: 'DataLine',
        alwaysShow: true,
    },
    children: [{
        path: 'nv_excalidraw',
        name: 'Excalidraw',
        component: () => import('@/views/nv_iframe/nv_excalidraw/index.vue'),
        meta: { 
            title: 'Excalidraw',
            icon: 'star-filled'
        }
    }
    // , {
    //     path: 'nv_ppt',
    //     name: 'PPT',
    //     component: () => import('@/views/nv_iframe/nv_ppt/index.vue'),
    //     meta: { 
    //         title: 'PPT',
    //         icon: 'star-filled'
    //     }
    // }, {
    //     path: 'nv_export_excel',
    //     name: '导出Excel',
    //     component: () => import('@/views/nv_excel/nv_export_excel/index.vue'),
    //     meta: { 
    //         title: '导出Excel',
    //         icon: 'star-filled'
    //     }
    // }
]
}

export default routes