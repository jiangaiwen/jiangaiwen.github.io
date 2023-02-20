<template>
    <div class="m-setting">
        <el-tooltip
            content="主题设置"
            placement="bottom"
        >
            <el-icon class="pointer" size="18" @click="changeSwitch('showSetting',true)">
                <Setting />
            </el-icon>
        </el-tooltip>
    </div>
</template>
<script lang="ts" setup>
import { useApp } from "@/stores/app"
const AppStore = useApp()
const changeSwitch = (key, val) => {
    AppStore.setThemeConfig({key, val})
}
</script>
<style lang="scss" scoped>
.m-setting {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
}
</style>