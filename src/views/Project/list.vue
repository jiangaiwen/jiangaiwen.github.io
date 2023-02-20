<template>
    <div class="default-main ba-table-box">
        <!-- 表格顶部菜单 -->
        <TableHeader />
        
        <!-- 表格 -->
        <Table ref="tableRef" :table="table" />
    </div>
</template>
<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import Table from '@/components/table/index.vue'
import TableHeader from '@/components/table/header/index.vue'
const table: {
    column: object[]
    data: object[]
    total: number
    pagination: Boolean
    filter: object
} = reactive({
    column: [],
    data: [],
    total: 0,
    pagination: true,
    filter: {
        page: 1,
        limit: 20
    }
})

onMounted(() => {
    table.column = [{
        prop: 'title1',
        label: '标题1'
    }, {
        prop: 'title2',
        label: '标题2'
    }, {
        prop: 'title3',
        label: '标题3'
    }, {
        prop: 'title4',
        label: '标题4'
    }]
})
</script>
