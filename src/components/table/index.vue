<template>
    <div>
        <el-table
            ref="tableRef"
            class="ba-data-table w100"
            :data="table.data"
            :border="true"
            stripe
        >
            <el-table-column 
                v-for="(item, key) in table.column" 
                :key="key" 
                :prop="item.prop" 
                :label="item.label"
            ></el-table-column>
        </el-table>
        <div v-if="table.pagination" class="table-pagination">
            <el-pagination
                :currentPage="table.filter!.page"
                :page-size="table.filter!.limit"
                :page-sizes="pageSizes"
                background
                :layout="'total, sizes, prev, pager, next, jumper'"
                :total="table.total"
                @size-change="onTableSizeChange"
                @current-change="onTableCurrentChange"
            ></el-pagination>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, nextTick, inject, computed } from 'vue'

const props = defineProps({
    table: {
        type: Object
    }
})

const pageSizes = computed(() => {
    let defaultSizes = [10, 20, 50, 100]
    if (props.table.filter!.limit) {
        if (!defaultSizes.includes(props.table.filter!.limit)) {
            defaultSizes.push(props.table.filter!.limit)
        }
    }
    return defaultSizes
})

const onTableSizeChange = () => {

}

const onTableCurrentChange = () => {

}
</script>
<style lang="scss" scoped>
.table-pagination {
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    background-color: var(--ba-bg-color-overlay);
    padding: 13px 15px;
    .el-pagination {
        justify-content: center;
    }
}
</style>