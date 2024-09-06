import type { RouteRecordRaw } from 'vue-router'

function Layout() {
    return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
    path: '/nv_components',
    component: Layout,
    name: '组件',
    meta: { 
        title: '组件',
        icon: 'grid'
    },
    children: [{
        path: 'nv_map',
        name: '高德地图',
        component: () => import('@/views/nv_components/nv_map/index.vue'),
        meta: {
            title: '高德地图',
            icon: 'star-filled'
        }
    }, {
        path: 'nv_mapbox',
        name: 'mapbox',
        component: () => import('@/views/nv_components/nv_mapbox/index.vue'),
        meta: {
            title: 'mapbox',
            icon: 'star-filled'
        }
    }, {
        path: 'nv_drag',
        name: '拖拽',
        component: () => import('@/views/nv_components/nv_drag/index.vue'),
        meta: {
            title: '拖拽',
            icon: 'star-filled'
        }
    }, {
        path: 'nv_split_panel',
        name: '切割面板',
        component: () => import('@/views/nv_components/nv_split_panel/index.vue'),
        meta: {
            title: '切割面板',
            icon: 'star-filled'
        }
    }, {
        path: 'nv_count_to',
        name: '数字动画',
        component: () => import('@/views/nv_components/nv_count_to/index.vue'),
        meta: {
            title: '数字动画',
            icon: 'star-filled'
        }
    }, {
        path: 'nv_cascader',
        name: '区域级联',
        component: () => import('@/views/nv_components/nv_cascader/index.vue'),
        meta: {
            title: '区域级联',
            icon: 'star-filled'
        }
    }, {
        path: 'nv_infinite_scroll',
        name: '无限滚动',
        component: () => import('@/views/nv_components/nv_infinite_scroll/index.vue'),
        meta: {
            title: '无限滚动',
            icon: 'star-filled'
        }
    }, {
        path: 'nv_virtual_list',
        name: '虚拟列表',
        component: () => import('@/views/nv_components/nv_virtual_list/index.vue'),
        meta: {
            title: '虚拟列表',
            icon: 'star-filled'
        }
    }, {
        path: 'nv_watermark',
        name: '水印',
        component: () => import('@/views/nv_components/nv_watermark/index.vue'),
        meta: {
            title: '水印',
            icon: 'star-filled'
        }
    }, {
        path: 'nv_timeline',
        name: '时间线',
        component: () => import('@/views/nv_components/nv_timeline/index.vue'),
        meta: {
            title: '时间线',
            icon: 'star-filled'
        }
    }, {
        path: 'nv_tree_select',
        name: '树形下拉',
        component: () => import('@/views/nv_components/nv_tree_select/index.vue'),
        meta: {
            title: '树形下拉',
            icon: 'star-filled'
        }
    }]
}

export default routes