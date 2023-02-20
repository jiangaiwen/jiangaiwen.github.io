<template>
    <div class="layout-container full">
        <Header></Header>
        <el-container class="main-container">
            <el-aside width="240px">
                <Sidebar></Sidebar>
            </el-aside>
            <el-container class="content-wrapper">
                <el-main>
                    <router-view v-slot="{ Component }">
                        <transition name="fade-transform" mode="out-in">
                            <component class="view" :is="Component" />
                        </transition>
                    </router-view>
                </el-main>
            </el-container>
        </el-container>
        <Theme />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from './components/Sidebar/index.vue';
import Header from './components/Header/index.vue';
import Theme from '@/components/Theme/index.vue';
export default defineComponent({
    setup() {
        
        return {
            
        }
    },
    components: {
        Sidebar,
        Header,
        Theme
    }
})
</script>
<style lang="scss" scoped>
.layout-container {
    .main-container {
        position: relative;
        width: 100%;
        height: calc(100% - 60px);
    }
    .content-wrapper {
        flex-direction: column;
    }
}
</style>