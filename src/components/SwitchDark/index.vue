<template>
    <el-switch
        @change="switchDark"
        inline-prompt
        v-model="themeConfig.isDark"
        :active-icon="Sunny"
        :inactive-icon="Moon"
    />
</template>
<script lang="ts" setup name="switchDark">
import { Sunny, Moon } from "@element-plus/icons-vue";
import { computed } from 'vue'
import { useApp } from "@/stores/app"
const AppStore = useApp()
// 设置信息
const themeConfig = computed(()=>AppStore.themeConfig)
// 切换暗黑模式
const switchDark = () => {
    const body = document.documentElement as HTMLElement;
    if (themeConfig.value.isDark) body.setAttribute("class", "dark");
    else body.setAttribute("class", "");
}
</script>
