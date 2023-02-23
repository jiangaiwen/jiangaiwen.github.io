<template>
    <div class="full" ref="appContainer">
        <PropTable
            :loading="loading"
            @selection-change="selectionChange"
            :columns="column"
            :data="list"
            @reset="reset"
            @onSubmit="onSubmit"
        >
        <template v-slot:btn>
            <div style="display: flex; justify-content: flex-end">
                <el-button type="primary">
                    <el-icon><plus /></el-icon>添加
                </el-button>
                <el-button type="danger">
                    <el-icon><delete /></el-icon>删除
                </el-button>
            </div>
        </template>
        <template v-slot:sex="scope">{{ scope.row.sex ? '男' : '女' }}</template>
        <template v-slot:operation="scope">
            <el-button type="primary" size="small" icon="Edit">
                编辑
            </el-button>
            <el-button type="danger" size="small" icon="Delete">
                删除
            </el-button>
        </template>
        </PropTable>
    </div>
</template>
<script setup lang="ts" name="comprehensive">
import { ref, reactive, onMounted, nextTick } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus'
import type { FormInstance } from 'element-plus'
import PropTable from '@/components/table/PropTable/index.vue'

const loading = ref(true)
const appContainer = ref(null)

const data = []
for (let i = 0; i < 100; i++) {
    data.push({
        date: '2016-05-02',
        name: '王五' + i,
        price: 1 + i,
        province: '上海',
        admin: 'admin',
        sex: i % 2 ? 1 : 0,
        checked: true,
        id: i + 1,
        age: 0,
        city: '普陀区',
        address: '上海市普上海',
        zip: 200333,
    })
}
const column = [
    { type: 'selection', width: 60 ,fixed: 'left'},
    { name: 'name', label: '姓名', inSearch: true, valueType: 'input', width: 80 },
    { name: 'age', label: '年龄', align: 'right' },
    {
        name: 'sex',
        label: '性别',
        slot: true,
        inSearch: true,
        options: [
        {
            value: 1,
            label: '男',
        },
        {
            value: 0,
            label: '女',
        },
        ],
        valueType: 'select',
    },
    {name: 'price', label: '价格', inSearch: true, valueType: 'input',},
    { name: 'admin', label: '账号', inSearch: true, valueType: 'input' },
    { name: 'address', label: '地址', inSearch: true, valueType: 'input' , width: 180},
    { name: 'date', label: '日期', sorter: true, inSearch: true, valueType: 'input', width: 180 },
    { name: 'province', label: '省份' , width: 100},
    { name: 'city', label: '城市' },
    { name: 'zip', label: '邮编' },
    { name: 'operation', slot: true, fixed: 'right', width: 200, label: '操作'  },
]
const list = ref(data)
const selectObj = ref([])
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    name: '',
    sex: null,
    price: null,
})

const rules = reactive({
    name: [
        { required: true, message: '请输入活动名称活动区域', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
    ],
    price: [{ required: true, message: '请输入价格', trigger: 'blur' }],
    sex: [
        {
            required: true,
            message: '请选择性别',
            trigger: 'change',
        },
    ],
})

const reset = () => {
    loading.value = true
    setTimeout(() => {
        loading.value = false
    }, 500)
    ElMessage.success('触发重置方法')
}

const onSubmit = (val) => {
    console.log('val===', val)
    ElMessage.success('触发查询方法')
    loading.value = true
    setTimeout(() => {
        loading.value = false
    }, 500)
}

const selectionChange = (val) => {
  selectObj.value = val
}

onMounted(() => {
    nextTick(()=>{
        // let data = appContainer.value.
    })
    setTimeout(() => {
        loading.value = false
    }, 500)
})
</script>