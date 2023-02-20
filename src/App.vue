<template>
    <el-config-provider :locale="locale">
        <router-view v-if="$route.path === '/login'"></router-view>
        <layout v-else></layout>
    </el-config-provider>
</template>
<script setup lang="ts">
import { onMounted, ref, computed, watch } from 'vue';
import iconfontInit from '@/utils/iconfont';
import { useRoute } from 'vue-router';
import { setTitleFromRoute } from '@/utils/common'
import layout from '@/layouts/index.vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))
const route = useRoute()

onMounted(() => {
    iconfontInit()
})

// 监听路由变化时更新浏览器标题
watch(
    () => route.path,
    () => {
        setTitleFromRoute()
    }
)
</script>