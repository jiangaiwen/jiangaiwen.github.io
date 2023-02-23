<template>
    <div class="table-header">
        <div class="table-search">
            <el-form @submit.prevent="">
                <el-form-item label="标题">
                    <el-input v-model="state.quickSearch"></el-input>
                </el-form-item>
            </el-form>
        </div>

        <slot></slot>

        <!-- 右侧工具按钮 -->
        <div class="table-tools">
            <div class="table-tools-button-group">
                <el-tooltip content="刷新" placement="top">
                    <el-button 
                        class="table-tools-button-item right-border" 
                        color="#dcdfe6" 
                        @click="onAction('refresh', { loading: true })"
                        plain
                    >
                        <Icon size="14" name="el-icon-RefreshRight"></Icon>
                    </el-button>
                </el-tooltip>
                <el-dropdown :max-height="380" :hide-on-click="false">
                    <el-button 
                        class="table-tools-button-item"
                        color="#dcdfe6" 
                        plain
                    >
                        <Icon size="14" name="el-icon-Grid"></Icon>
                    </el-button>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item v-for="(item, idx) in columnDisplay" :key="idx">
                                <el-checkbox
                                    v-if="item.prop"
                                    @change="onChangeShowColumn($event, item.prop!)"
                                    :checked="!item.show"
                                    :model-value="item.show"
                                    size="small"
                                    :label="item.label"
                                />
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive, computed, inject } from 'vue'
import type baTableClass from '@/utils/baTable'

const baTable = inject('baTable') as baTableClass

interface Props {
    buttons: HeaderOptButton[]
    quickSearchPlaceholder?: string
}

const props = withDefaults(defineProps<Props>(), {
    buttons: () => {
        return ['refresh', 'add', 'edit', 'delete']
    },
    quickSearchPlaceholder: '',
})

const state = reactive({
    quickSearch: '',
})

const columnDisplay = computed(() => {
    let columnDisplayArr = []
    for (let item of baTable.table.column) {
        item.type === 'selection' || item.render === 'buttons' || item.enableColumnDisplayControl === false ? '' : columnDisplayArr.push(item)
    }
    return columnDisplayArr
})

const onChangeShowColumn = (value: string | number | boolean, field: string) => {
    baTable.onTableHeaderAction('change-show-column', { field: field, value: value })
}

const onAction = (event: string, data: anyObj = {}) => {
    baTable.onTableHeaderAction(event, data)
}
</script>
<style lang="scss" scoped>
.table-header {
    display: flex;
    justify-content: space-between;
}
.table-tools-button-group {
    display: flex;
    margin-left: 12px;
    border: 1px solid var(--el-border-color);
    border-radius: var(--el-border-radius-base);
    overflow: hidden;
    button:focus,
    button:active {
        background-color: var(--ba-bg-color-overlay);
    }
    button:hover {
        background-color: var(--el-color-info-light-7);
    }
    .table-tools-button-item {
        border: none;
        border-radius: 0;
    }
    .el-button + .el-button {
        margin: 0;
    }
    .right-border {
        border-right: 1px solid var(--el-border-color);
    }
}
</style>