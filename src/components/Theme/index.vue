<template>
    <el-drawer
        v-model="drawer"
        title="我是弹出框"
        size="300px"
        append-to-body
    >
        <div class="theme-item">
            <label>暗黑模式</label>
            <switch-dark></switch-dark>
        </div>
    </el-drawer>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useApp } from "@/stores/app"
import SwitchDark from '@/components/SwitchDark/index.vue'
const AppStore = useApp()

const drawer = computed({
    get() {
        return AppStore.themeConfig.showSetting;
    },
    set() {
        changeSwitch('showSetting',!AppStore.themeConfig.showSetting)
    }
})

// 进行配置
const changeSwitch = (key, val) => {
    AppStore.setThemeConfig({key, val})
    // if(key === 'mode'){
    //     openLoading()
    //     setTimeout(()=>{
    //         closeLoading()
    //     },600)
    // }
}
</script>
<style lang="scss" scoped>
.theme-item {
    width: 100%;
    display: flex;
    margin-bottom: 15px;
    align-items: center;
    font-size: 14px;
    color: var(--el-text-color-primary);
    justify-content: space-between;
}
</style>