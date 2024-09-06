import type { RouteRecordRaw } from 'vue-router'

function Layout() {
    return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
    path: '/nv_editor',
    redirect: '/nv_editor/nv_wang_editor',
    component: Layout,
    meta: { 
        title: '编辑器',
        icon: 'SetUp'
    },
    children: [{
        path: 'nv_wang_editor',
        name: 'Wang Editor',
        component: () => import('@/views/nv_editor/nv_wang_editor/index.vue'),
        meta: { 
            title: 'Wang Editor',
            icon: 'star-filled'
        }
    }, {
        path: 'nv_markdown',
        name: 'Markdown',
        component: () => import('@/views/nv_editor/nv_markdown/index.vue'),
        meta: { 
            title: 'Markdown',
            icon: 'star-filled'
        }
    }, {
        path: 'nv_form_making',
        name: 'FormMaking',
        component: () => import('@/views/nv_form_design/nv_form_making/index.vue'),
        meta: { 
            title: 'FormMaking',
            icon: 'star-filled'
        }
    }, {
        path: 'nv_form_generator',
        name: 'FormGenerator',
        component: () => import('@/views/nv_form_design/nv_form_generator/index.vue'),
        meta: { 
            title: 'FormGenerator',
            icon: 'star-filled'
        }
    }, {
        path: 'nv_starfish',
        name: 'Starfish',
        component: () => import('@/views/nv_form_design/nv_starfish/index.vue'),
        meta: { 
            title: 'Starfish',
            icon: 'star-filled'
        }
    }]
}

export default routes