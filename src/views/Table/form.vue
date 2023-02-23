<template>
    <div class="default-main ba-table-box">
        <!-- 表格顶部菜单 -->
        <TableHeader
            :buttons="['refresh', 'edit', 'comSearch', 'quickSearch', 'columnDisplay']"
        ></TableHeader>
        
        <!-- 表格 -->
        <Table ref="tableRef" />
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, provide } from 'vue'
import Table from '@/components/table/index.vue'
import TableHeader from '@/components/table/header/index.vue'
import baTableClass from '@/utils/baTable'
import { routineAttachment } from '@/api/controllerUrls'
import { defaultOptButtons } from '@/components/table'
import { baTableApi } from '@/api/common'

const tableRef = ref()
const optBtn = defaultOptButtons(['edit', 'delete'])
optBtn[1].popconfirm.title = '确定要删除吗?'

const baTable = new baTableClass(new baTableApi(routineAttachment), {
    column: [
        { type: 'selection', align: 'center', operator: false },
        { label: 'ID', prop: 'id', align: 'center', operator: 'LIKE', operatorPlaceholder: 'Fuzzy query', width: 70 },
        { label: '项目名称', prop: 'name', align: 'center', operator: 'LIKE', operatorPlaceholder: 'Fuzzy query' },
        {
            label: '大小',
            prop: 'size',
            align: 'center',
            formatter: (row: TableRow, column: TableColumn, cellValue: string) => {
                const size = parseFloat(cellValue)
                const i = Math.floor(Math.log(size) / Math.log(1024))
                return (size / Math.pow(1024, i)).toFixed(i < 1 ? 0 : 2) + ' ' + ['B', 'KB', 'MB', 'GB', 'TB'][i]
            },
            operator: 'RANGE',
            sortable: 'custom',
            operatorPlaceholder: 'bytes',
        },
        {
            label: '类型',
            prop: 'mimetype',
            align: 'center',
            operator: 'LIKE',
            'show-overflow-tooltip': true,
            operatorPlaceholder: 'Fuzzy query',
        },
        {
            label: '上传次数',
            prop: 'quote',
            align: 'center',
            width: 150,
            operator: 'RANGE',
            sortable: 'custom',
        },
        {
            label: '原始名称',
            prop: 'name',
            align: 'center',
            'show-overflow-tooltip': true,
            operator: 'LIKE',
            operatorPlaceholder: 'Fuzzy query',
        },
        {
            label: '存储方式',
            prop: 'storage',
            align: 'center',
            width: 100,
            operator: 'LIKE',
            operatorPlaceholder: 'Fuzzy query',
        },
        {
            label: '创建时间',
            prop: 'lastuploadtime',
            align: 'center',
            render: 'datetime',
            operator: 'RANGE',
            width: 160,
            sortable: 'custom',
        },
        {
            label: '创建人',
            prop: 'admin.nickname',
            align: 'center',
            operator: 'LIKE',
            operatorPlaceholder: 'Fuzzy query',
        },
        {
            label: '操作',
            align: 'center',
            width: '100',
            render: 'buttons',
            buttons: optBtn,
            operator: false,
        },
    ],
    defaultOrder: { prop: 'lastuploadtime', order: 'desc' },
})

provide('baTable', baTable)

onMounted(() => {
    baTable.table.ref = tableRef.value
    baTable.mount()
    baTable.getIndex()?.then(() => {
        baTable.initSort()
    })
})
</script>
