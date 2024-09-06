<template>
    <div class="crud">
        <div class="crud-form">

        </div>
        <div class="crud-table">

            <el-table ref="container" 
                :data="tableData"
                height="100px"
                :stripe="stripe"
                :border="border"
                :row-key="rowKey" 
                fit
                highlight-current-row
                @row-click="handleRowClick"
                @selection-change="handleSelectionChange"
                @sort-change="handleSortChange"
            >
                <el-table-column v-for="item in tableColumns"
                    :fixed="item.fixed"
                    :align="item.align || 'center'" 
                    :prop="item.name"
                    :label="item.label"
                    :width="item.width"
                />
                <!-- <el-table-column fixed="right" label="操作" width="120">
                <template #default>
                    <el-button link type="primary" size="small" @click="handleClick">Detail</el-button>
                    <el-button link type="primary" size="small">Edit</el-button>
                </template>
                </el-table-column> -->
            </el-table>

            <div class="crud-footer">
                <div class="crud-footer__left">
                    <slot name="footerLeft"></slot>
                </div>
                <div v-if="!hidePagination">
                    <el-pagination
                        background
                        :current-page.sync="currentPage" 
                        :page-size.sync="currentSize"
                        :pager-count="5" 
                        :layout="total > size ? layout : 'total'"
                        :page-sizes="pageSizes"
                        :total="total"
                        v-bind="$attrs"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import mittBus from "@/utils/mittBus";

const props = defineProps({
    loading: {
        type: Boolean,
        default: false,
    },
    stripe: {
        type: Boolean,
        default: true,
    },
    border: {
        type: Boolean,
        default: true,
    },
    tableData: {
        type: Array,
        default: () => [],
    },
    tableSize: {
        type: String,
        default: 'small',
    },
    tableColumns: {
        type: Array,
        default: () => [],
    },
    treeProps: {
        type: Object,
        default: () => {},
    },
    rowKey: {
        type: String,
        default: '',
    },
    selection: {
        type: Boolean,
        default: false,
    },
    total: { // 总条目数
        type: Number,
        default: 0
    },
    page: { // 当前分页
        type: Number,
        default: 1
    },
    size: { // 当前页数
        type: Number,
        default: 20
    },
    layout: { // 组件布局，子组件名用逗号分隔
        type: String,
        default: 'total, sizes, prev, pager, next, jumper'
    },
    pageSizes: { // 每页显示个数选择器的选项设置
        type: Array,
        default: () => [10, 20, 30, 50]
    },
    cellClassName: {
        //给单元格添加样式
        type: Function,
        default: () => {},
    },
    tabsConfig: {
        //搜索栏的tabs标签
        type: Array,
        default: () => [],
    },
    selectedTabIndex: {
        type: Number,
        default: 0
    },
    showCrudForm: {
        type: Boolean,
        default: true,
    },
    hidePagination: { //隐藏分页
        type: Boolean,
        default: false,
    },
    complexTable: {
        type: Boolean,
        default: false,
    },
})

const currentPage = computed({
    get() {
        return props.page
    },
    set(value) {
        mittBus.emit('update:page', value)
    }
})
const currentSize = computed({
    get() {
        return props.size
    },
    set(value) {
        mittBus.emit('update:size', value)
    }
})

const handleRowClick = (row: object) => {
    mittBus.emit('row-click', row)
}

const handleSelectionChange = (value: any) => {
    mittBus.emit('selection-change', value)
}

const handleSortChange = (value: any) => {
    mittBus.emit('sort-change', value)
}

const handleSizeChange = (value: number) => {
    mittBus.emit('onChangeSize', value)
}

const handleCurrentChange = (value: number) => {
    mittBus.emit('onChangePage', value);
}
</script>