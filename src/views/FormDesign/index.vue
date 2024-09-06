<script setup lang="ts">
import { ref } from 'vue'
import FormDesigner from './components/form-designer/index.vue'

const globalDsv = ref({
    testApiHost: 'http://www.test.com/api',
    testPort: 8080
})
</script>
<template>
    <div class="full form-design">
        <FormDesigner :global-dsv="globalDsv" />
    </div>
</template>
<style lang="scss" scoped>
.form-design {
    display: flex;
    background: var(--el-bg-color);
    .left-board {
        width: 250px;
    }
    .center-board {
        flex: 1;
        border-left: 1px solid var(--el-border-color);
        border-right: 1px solid var(--el-border-color);

        &__toolbar {
            padding: 5px 0;
            border-bottom: 1px solid var(--el-border-color);
        }
        &__container {
            height: calc(100% - 43px);
            overflow-y: auto;
        }
    }
    .right-board {
        width: 300px;
    }
}
</style>