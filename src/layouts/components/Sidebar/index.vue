<template>
    <div class="sidebar-container">
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu
                :default-active="activeMenu"
                unique-opened
                :collapse="isCollapse"
                :collapse-transition='false'
            >
                <SubItem 
                    v-for="route in permission_routes"
                    :key="route.path"
                    :item="route"
                    :base-path="route.path"
                ></SubItem>
            </el-menu>
        </el-scrollbar>
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router';
import { useApp } from '@/stores/app';
import { usePermissionStore } from "@/stores/permission";
import SubItem from './SubItem.vue';

// 在setup中获取store
const route = useRoute()
const PermissionStore = usePermissionStore()
const AppStore = useApp()

// 是否折叠
const isCollapse = computed(() => !AppStore.isCollapse)
// 获取路由
const permission_routes = computed(() => PermissionStore.permission_routes)

const activeMenu = computed(() => {
    const { meta, path } = route
    // if set path, the sidebar will highlight the path you set
    if (meta.activeMenu) {
        return meta.activeMenu
    }
    return path
})
</script>
<style lang="scss">
.sidebar-container {
    position: relative;
    width: 100%;
    height: 100%;
    .el-menu {
        height: 100%;
        width: 100% !important;
        .el-menu-item.is-active {
            background-color: var(--el-menu-border-color);
        }
    }
}
</style>