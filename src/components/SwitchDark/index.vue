<template>
    <el-switch v-model="themeConfig.isDark" @change="switchDark" inline-prompt :active-icon="Sunny" :inactive-icon="Moon" />
</template>

<script lang="ts" setup name="switchDark">
import { computed } from 'vue'
import { useApp } from "@/store/app"
import { Sunny, Moon } from "@element-plus/icons-vue";
import { useTheme } from "@/hooks/useTheme";

const { switchDark } = useTheme();
const AppStore = useApp()
const themeConfig = computed(()=>AppStore.themeConfig)
</script>
