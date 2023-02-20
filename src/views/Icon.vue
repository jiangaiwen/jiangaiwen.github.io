<template>
    <div>
        <el-tabs v-model="state.activeTab" @tab-click="onChangeTab" type="border-card">
            <el-tab-pane class="config-tab-pane" v-for="(group, key) in state.config" :key="key" :name="group.title" :label="group.title">
                <div class="selector-body">
                    <el-scrollbar ref="selectorScrollbarRef">
                        <ul v-if="renderFontIconNames.length > 0">
                            <li
                                :title="item"
                                v-for="(item, key) in renderFontIconNames"
                                :key="key"
                            >
                                <Icon :name="item" color="var(--el-text-color-primary)" />
                            </li>
                        </ul>
                    </el-scrollbar>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script setup lang="ts">
import { onMounted, computed, reactive } from 'vue'
import { getAwesomeIconfontNames, getIconfontNames, getElementPlusIconfontNames, getLocalIconfontNames } from '@/utils/iconfont'
import type { TabsPaneContext } from 'element-plus'

const state: {
    activeTab: string
    config: any
    fontIconNames: string[]
} = reactive({
    activeTab: 'Element',
    config: [{
        title: 'Element'
    }, {
        title: 'Awesome'
    }, {
        title: 'ali'
    }],
    fontIconNames: []
})

const onChangeTab = (tab: TabsPaneContext) => {
    state.fontIconNames = []
    if (tab.paneName == 'Element') {
        getElementPlusIconfontNames().then((res) => {
            state.fontIconNames = res
        })
    } else if (tab.paneName == 'Awesome') {
        getAwesomeIconfontNames().then((res) => {
            state.fontIconNames = res.map((name) => `fa ${name}`)
        })
    } else if (tab.paneName == 'ali') {
        getIconfontNames().then((res) => {
            state.fontIconNames = res.map((name) => `iconfont ${name}`)
        })
    } else if (tab.paneName == 'local') {
        getLocalIconfontNames().then((res) => {
            state.fontIconNames = res
        })
    }
}

const renderFontIconNames = computed(() => {
    return state.fontIconNames
})

onMounted(()=> {
    getElementPlusIconfontNames().then((res) => {
        state.fontIconNames = res
    })
})
</script>
<style lang="scss" scoped>
.selector-body {
    ul {
        overflow: hidden;
        list-style: none;
        padding: 0!important;
        border-top: 1px solid var(--el-border-color);
        border-left: 1px solid var(--el-border-color);
        border-radius: 4px;
        display: grid;
        grid-template-columns: repeat(10,1fr);
        li {
            text-align: center;
            color: var(--el-text-color-primary);
            height: 90px;
            font-size: 13px;
            border-right: 1px solid var(--el-border-color);
            border-bottom: 1px solid var(--el-border-color);
            transition: background-color var(--el-transition-duration);
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}
.el-tabs--border-card {
    border: none;
    box-shadow: var(--el-box-shadow-light);
    border-radius: var(--el-border-radius-base);
}
.el-tabs--border-card :deep(.el-tabs__header) {
    background-color: var(--ba-bg-color);
    border-bottom: none;
    border-radius: var(--el-border-radius-base);
}
.el-tabs--border-card :deep(.el-tabs__item.is-active) {
    border: 1px solid transparent;
}
.el-tabs--border-card :deep(.el-tabs__nav-wrap) {
    border-radius: var(--el-border-radius-base);
}
</style>