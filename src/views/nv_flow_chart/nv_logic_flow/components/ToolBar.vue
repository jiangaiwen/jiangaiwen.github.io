<script setup lang="ts">
import { ref, unref, onMounted } from "vue";
import { LogicFlow } from "@logicflow/core";

interface Props {
    lf: LogicFlow;
    catTurboData?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    lf: null
});

const emit = defineEmits<{
    (e: "catData"): void;
}>();

const controlButton3 = ref();
const controlButton4 = ref();

const focusIndex = ref<Number>(-1);
const titleLists = ref([
    {
        icon: "el-icon-zoom-out",
        text: "缩小",
        size: 18,
        disabled: false
    },
    {
        icon: "el-icon-zoom-in",
        text: "放大",
        size: 18,
        disabled: false
    },
    {
        icon: "icon-full-screen-hs",
        text: "适应",
        size: 18,
        disabled: false
    },
    {
        icon: "icon-previous-hs",
        text: "上一步",
        size: 18,
        disabled: true
    },
    {
        icon: "icon-next-step-hs",
        text: "下一步",
        size: 18,
        disabled: true
    },
    {
        icon: "icon-download-hs",
        text: "下载图片",
        size: 18,
        disabled: false
    },
    {
        icon: "icon-watch-hs",
        text: "查看数据",
        size: 18,
        disabled: false
    }
]);

const onControl = (key: number) => {
    ["zoom", "zoom", "resetZoom", "undo", "redo", "getSnapshot"].forEach(
        (v, i) => {
            const domControl = props.lf;
            if (key === 1) {
                domControl.zoom(true);
            }
            if (key === 6) {
                emit("catData");
            }
            if (key === i) {
                domControl[v]();
            }
        }
    );
};

const onEnter = (key: number) => {
    focusIndex.value = key;
};

onMounted(() => {
    props.lf.on("history:change", ({ data: { undoAble, redoAble } }) => {
        unref(titleLists)[3].disabled = unref(controlButton3).disabled = !undoAble;
        unref(titleLists)[4].disabled = unref(controlButton4).disabled = !redoAble;
    });
});
</script>
<template>
    <div class="toolbar">
        <ul>
            <li
                v-for="(item, key) in titleLists"
                :key="key"
                :title="item.text"
                class="dark:text-bg_color"
                @mouseenter.prevent="onEnter(key)"
                @mouseleave.prevent="focusIndex = -1"
            >
                <el-tooltip
                :content="item.text"
                :visible="focusIndex === key"
                placement="right"
                >
                <button
                    :ref="'controlButton' + key"
                    :disabled="item.disabled"
                    :style="{
                    cursor: item.disabled === false ? 'pointer' : 'not-allowed',
                    color: item.disabled === false ? '' : '#00000040',
                    background: 'transparent'
                    }"
                    @click="onControl(key)"
                >
                    <el-icon v-if="item.text=='缩小'" :size="item.size"><ZoomOut /></el-icon>
                    <el-icon v-else-if="item.text=='放大'" :size="item.size"><ZoomIn /></el-icon>
                    <el-icon v-else-if="item.text=='适应'"><FullScreen /></el-icon>
                    <el-icon v-else-if="item.text=='上一步'"><Back /></el-icon>
                    <el-icon v-else-if="item.text=='下一步'"><Right /></el-icon>
                    <el-icon v-else-if="item.text=='下载图片'"><Download /></el-icon>
                    <el-icon v-else><View /></el-icon>
                </button>
                </el-tooltip>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
.toolbar {
    position: absolute;
    top: 50px;
    right: 20px;
    z-index: 2;
    background: hsl(0deg 0% 100% / 80%);
    box-shadow: 0 1px 4px rgb(0 0 0 / 20%);
}

.toolbar ul li {
    margin: 10px;
    text-align: center;
}

.toolbar ul li span:hover {
    color: var(--el-color-primary);
}
</style>