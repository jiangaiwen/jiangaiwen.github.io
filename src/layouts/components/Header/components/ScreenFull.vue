<template>
    <div class="m-screenful">
        <el-tooltip
            content="全屏"
            placement="bottom"
        >   
            <el-icon class="pointer" size="18" @click="toggle">
                <FullScreen />
            </el-icon>
        </el-tooltip>
    </div>
</template>
<script lang="ts" setup>
import { useFullscreen } from "@vueuse/core";
const { toggle, isFullscreen } = useFullscreen();
</script>
<style lang="scss" scoped>
.m-screenful {
    display: flex;
    align-items: center;
    padding-right: 0;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
}
</style>