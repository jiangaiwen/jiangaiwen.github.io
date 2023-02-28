<template>
    <div class="flow-editor">
        <div class="left-panel">
            <left></left>
        </div>
        <div class="right-panel">
            <centers></centers>
        </div>
    </div>
</template>

<script setup lang="ts">
import left from './components/left.vue';
import centers from './components/center.vue';
</script>

<style lang="scss" scoped>
.flow-editor {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    background: var(--el-menu-bg-color);    
    border-right: 1px solid var(--el-menu-border-color);
    .left-panel {
        width: 200px;
        border-right: 1px solid var(--el-menu-border-color);
    }
    .right-panel {
        flex: 1;
    }
}
</style>