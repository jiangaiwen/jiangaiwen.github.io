<template>
    <PageMain>
        <div class="full">
            <!-- 节点面板 -->
            <NodePanel v-if="lf" :lf="lf" :nodeList="nodeList" />
            <!-- 工具栏 -->
            <ToolBar v-if="lf" :lf="lf" :catTurboData="false" :catData="catData" />
            <!-- 画布 -->
            <div id="turbo"></div>
        </div>
    </PageMain>
</template>
<script setup lang="ts">
import LogicFlow from "@logicflow/core";
import { Snapshot, BpmnElement, Menu } from "@logicflow/extension";
import "@logicflow/core/dist/style/index.css";
import "@logicflow/extension/lib/style/index.css";
import { BpmnNode } from "./config/index";
import NodePanel from "./components/NodePanel.vue";
import ToolBar from "./components/ToolBar.vue";
// https://site.logic-flow.cn/docs/#/zh/guide/start

defineOptions({
    name: "LogicFlow"
});

const lf = ref(null);
const graphData = ref(null);
const dataVisible = ref<boolean>(false);
const nodeList = BpmnNode;

function init() {
    // 画布配置
    LogicFlow.use(Snapshot);
    // 使用bpmn插件，引入bpmn元素，这些元素可以在turbo中转换后使用
    LogicFlow.use(BpmnElement);
    // 启动右键菜单
    LogicFlow.use(Menu);
    const domLf = new LogicFlow({
        container: document.querySelector("#turbo") as HTMLElement,
        grid: true,
        background: {
            color: "#f7f9ff"
        },
        keyboard: {
            enabled: true
        }
    });
    lf.value = domLf;
    // 设置边类型bpmn:sequenceFlow为默认类型
    unref(lf).setDefaultEdgeType("bpmn:sequenceFlow");
    onRender();
}

function onRender() {
    // Turbo数据转换为LogicFlow内部识别的数据结构
    const lFData = {
        nodes: [
            {
                id: "node_id_1",
                type: "rect",
                x: 500,
                y: 100,
                text: { x: 500, y: 100, value: "节点1" },
                properties: {},
            },
            {
                id: "node_id_2",
                type: "circle",
                x: 600,
                y: 300,
                text: { x: 600, y: 300, value: "节点2" },
                properties: {},
            },
        ],
        edges: [
            {
                id: "edge_id",
                type: "polyline",
                sourceNodeId: "node_id_1",
                targetNodeId: "node_id_2",
                text: { x: 539, y: 200, value: "连线" },
                startPoint: { x: 500, y: 140 },
                endPoint: { x: 600, y: 250 },
                pointsList: [
                    { x: 500, y: 140 },
                    { x: 500, y: 200 },
                    { x: 600, y: 200 },
                    { x: 600, y: 250 },
                ],
                properties: {},
            },
        ],
    };
    lf.value.render(lFData);
}

function catData() {
    graphData.value = unref(lf).getGraphData();
    dataVisible.value = true;
}

onMounted(() => {
    init();
});
</script>
<style lang="scss" scoped>
#turbo {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>