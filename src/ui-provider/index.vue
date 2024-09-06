<script setup lang="ts">
import zhCN from 'element-plus/es/locale/lang/zh-cn.mjs'
</script>

<template>
    <el-config-provider :locale="zhCN" :button="{ autoInsertSpace: true }">
        <slot />
    </el-config-provider>
</template>