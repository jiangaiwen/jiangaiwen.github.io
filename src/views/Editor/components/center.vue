<template>
    <div id="centerRelative">
        <div
            v-for="(item, index) in nodeList"
            :id="item.id"
            :key="item.id"
            :style="{
                color: item.color,
                left: item.x + 'px',
                top: item.y + 'px',
            }"
            class="item"
            style="display: flex; justify-content: center; align-items: center"
            @contextmenu.prevent="handleContextMenu($event, item, index)"
        >
            <div class="node-anchor anchor-top">*</div>
            <div class="node-anchor anchor-bottom">*</div>
            <div class="node-anchor anchor-right">*</div>
            <div class="node-anchor anchor-left">*</div>
            <span> {{ item.name }}</span>
        </div>
    </div>
</template>
<script setup>
import { reactive, toRefs, onMounted, nextTick, watch } from 'vue';
import { $contextmenu } from 'vue-contextmenu-next/index';
import { GenNonDuplicateID } from '@/utils/random';
import {
    jsplumbSetting,
    jsplumbConnectOptions,
    jsplumbSourceOptions,
    jsplumbTargetOptions,
} from '../config/config';
import jsPlumb from 'jsplumb';
import { configJsplumb } from '@/stores/jsplumb';
let configJsplumbData = configJsplumb();
let $jsPlumb = jsPlumb.jsPlumb;
let jsPlumb_instance = null;
let data = reactive({
    jsplumbSettingConfig: jsplumbSetting,
    jsplumbConnectOptionsConfig: jsplumbConnectOptions,
    jsplumbSourceOptionsConfig: jsplumbSourceOptions,
    jsplumbTargetOptionsConfig: jsplumbTargetOptions,
    nodeList: [],
    lineList: [],
});
let {
    nodeList,
    lineList,
    jsplumbTargetOptionsConfig,
    jsplumbSourceOptionsConfig,
    jsplumbConnectOptionsConfig,
    jsplumbSettingConfig,
} = toRefs(data);

onMounted(() => {
    jsPlumb_instance = $jsPlumb.getInstance();
    nodeList.value = [
        {
            id: 'Mfzcx4apkafHBYATbdz6hFYntSHsXtDz',
            x: 100,
            y: 160,
            type: 'node',
            name: '开始',
            color: '#5a9cf8',
        },
        {
            id: 'sGsGhyhEJBsCSmRaAw8xJK3iaefcrKDX',
            x: 833,
            y: 79,
            type: 'statr',
            name: '节点1',
            color: '#479A52',
        },
        {
            id: 'sGsGhyhEJBsCSmRaAw8xJK3iaefcrKDl',
            x: 880,
            y: 180,
            type: 'statr',
            name: '节点2',
            color: '#479A52',
        },
        {
            id: 'sGsGhyhEJBsCSmRaAw8xJK3iaefcrKDl11',
            x: 1160,
            y: 180,
            type: 'statr',
            name: '结束',
            color: '#479A52',
        },
    ];
    nextTick(() => {
        init();
    });
});

//初始化
const init = () => {
    jsPlumb_instance.ready(() => {
        jsPlumb_instance.importDefaults(jsplumbSettingConfig.value);
        loadEasyFlow();
        // 会使整个jsPlumb立即重绘。
        jsPlumb_instance.setSuspendDrawing(false, true);
    });
};

//加载流程图-初始化节点，使节点可以拖拽
const loadEasyFlow = () => {
    // 初始化节点
    for (let i = 0; i < nodeList.value.length; i++) {
        let node = nodeList.value[i];
        console.log(node.id, 'node', jsplumbSourceOptionsConfig.value);
        // 设置源点，可以拖出线连接其他节点
        jsPlumb_instance.makeSource(node.id, jsplumbSourceOptionsConfig.value);
        // // 设置目标点，其他源点拖出的线可以连接该节点
        jsPlumb_instance.makeTarget(node.id, jsplumbTargetOptionsConfig.value);
        // this.jsPlumb.draggable(node.id);
        //画布节点添加拖拽方法
        draggableNode(node.id);

        jsPlumb_instance.unbind('connection'); //取消连接事件
        for (let i = 0; i < lineList.value.length; i++) {
            let line = this.data.lineList[i];
            jsPlumb_instance.connect(
                {
                    source: line.from,
                    target: line.to,
                },
                jsplumbConnectOptionsConfig.value,
            );
        }
        //完成连线前的校验
        jsPlumb_instance.bind('beforeDrop', (evt) => {
            //true代表可以连接 false代表可以连接
            return beforeDrop(evt);
        });

        //删除连接线
        jsPlumb_instance.bind('click', (conn, originalEvent) => {
            // console.log(jsPlumb_instance);
            // jsPlumb_instance
            //     .connect()
            //     .connection.getOverlay('Mfzcx4apkafHBYATbdz6hFYntSHsXtDz')
            //     .setLabel('111');
            conn.setLabel({ label: '<p>123213</p>', cssClass: '' });
            // jsPlumb_instance.deleteConnection(conn);
            // lineList.value.forEach((item, index) => {
            //     if (item.from === conn.sourceId && item.to === conn.targetId) {
            //         this.data.lineList.splice(index, 1);
            //     }
            // });
            console.log(conn, originalEvent);
        });
        //单击连接线
        // jsPlumb_instance.bind('click', (conn, originalEvent) => {
        //     jsPlumb_instance.deleteConnection(conn);
        //     lineList.value.forEach((item, index) => {
        //         if (item.from === conn.sourceId && item.to === conn.targetId) {
        //             this.data.lineList.splice(index, 1);
        //         }
        //     });
        //     console.log(originalEvent);
        // });
        // jsPlumb_instance.bind('connectionMoved', (evt) => {
        //     console.log(evt, '连线变更');
        // });
        //断开连线后的事件
        jsPlumb_instance.bind('connectionDetached', (evt) => {
            console.log(evt, '断开连线后');
        });
        //连线创建成功后，维护本地数据
        jsPlumb_instance.bind('connection', (evt) => {
            let from = evt.source.id;
            let to = evt.target.id;
            lineList.value.push({
                from: from,
                to: to,
                label: '',
                id: GenNonDuplicateID(8),
                Remark: '',
            });
        });
    }
};

//给画布节点添加拖拽方法
const draggableNode = (nodeId) => {
    jsPlumb_instance.draggable(nodeId, {
        grid: [5, 5],
        containment: 'center',
        drag: (event) => {
            window.event
                ? (window.event.cancelBubble = true)
                : event.stopPropagation();
            return false;
        },
        stop: (event) => {
            let nodeIndex = nodeList.value.findIndex((x) => x.id === nodeId);
            Object.assign(nodeList.value[nodeIndex], {
                x: event.pos[0],
                y: event.pos[1],
            });
        },
    });
};

const handleContextMenu = ($event, item, index) => {
    $contextmenu({
        x: $event.x,
        y: $event.y,
        customLayoutClass: 'customLayoutClass',
        menuList: [
            {
                text: '删除',
                icon: 'DeleteFilled',
                onClick: () => {
                    deleteBtn(item, index);
                },
            },
            {
                text: '复制',
                icon: 'DocumentCopy',
                onClick: () => {
                    copyNodeBtn(item);
                },
            },
            {
                text: '多选删除',
                icon: 'IceCream',
                onClick: () => {},
            },
            {
                text: '多选复制',
                icon: 'Link',
                onClick: () => {},
            },
            {
                text: '多选拖拽',
                icon: 'Location',
                onClick: () => {
                    chooseMoreDrag();
                },
            },
            {
                text: '已连接数据',
                icon: 'Location',
                onClick: () => {
                    console.log(jsPlumb_instance.getConnections());
                    console.log(jsPlumb_instance.getAllConnections());
                },
            },
            {
                text: '编辑模式',
                icon: 'Location',
                onClick: () => {
                    let elem = document.querySelectorAll('.item');
                    // jsPlumb_instance.draggable(elem, true);
                    jsPlumb_instance.setDraggable(elem, true);
                },
            },
            {
                text: '取消编辑',
                icon: 'Location',
                onClick: () => {
                    let elem = document.querySelectorAll('.item');
                    jsPlumb_instance.draggable(elem, false);
                    jsPlumb_instance.setDraggable(elem, false);
                },
            },
            {
                text: '虚线',
                icon: 'Location',
                onClick: () => {
                    let lines = jsPlumb_instance.getAllConnections();
                    lines.forEach((line) => {
                        line.canvas.classList.add('active');
                    });
                },
            },
            {
                text: '取消虚线',
                icon: 'Location',
                onClick: () => {
                    let lines = jsPlumb_instance.getAllConnections();
                    lines.forEach((line) => {
                        line.canvas.classList.remove('active');
                    });
                },
            },
        ],
    });
};

//右键菜单消失
const rightClick = () => {
    document.querySelectorAll('.customLayoutClass')[0].style.display = 'none';
};

//删除
const deleteBtn = (item, index) => {
    let isState = nodeList.value.some((x) => x.id === item.id);
    if (isState) {
        console.log(document.querySelectorAll('.customLayoutClass'));
        nodeList.value.splice(index, 1);
        jsPlumb_instance.remove(item.id);
        rightClick();
        return true;
    } else {
        return false;
    }
};

//复制节点
const copyNodeBtn = (item) => {
    let list = JSON.parse(JSON.stringify(item));
    list.id = GenNonDuplicateID(8);
    list.x = item.x + 100;
    nodeList.value.push(list);
    nextTick(() => {
        jsPlumb_instance.makeSource(list.id, jsplumbSourceOptionsConfig.value);
        jsPlumb_instance.makeTarget(list.id, jsplumbConnectOptionsConfig.value);
        draggableNode(list.id);
    });
};

//连线前做的事
const beforeDrop = (event) => {
    return true;
};

//多选拖拽
const chooseMoreDrag = () => {
    let idArray = nodeList.value.map((x) => x.id);
    for (let id of idArray) {
        jsPlumb_instance.addToDragSelection(id);
    }
};

watch(
    configJsplumbData.jslumbSortData,
    () => {
        if (configJsplumbData.jslumbSortData.length > 0) {
            let list = configJsplumbData.jslumbSortData[0];
            nodeList.value.push(list);
            //添加新的节点后，要重绘画布
            nextTick(() => {
                jsPlumb_instance.makeSource(
                    list.id,
                    jsplumbSourceOptionsConfig.value,
                );
                jsPlumb_instance.makeTarget(
                    list.id,
                    jsplumbConnectOptionsConfig.value,
                );
                draggableNode(list.id);
            });
        }
    },
    {
        deep: true,
        immediate: true,
    },
);
</script>

<style lang="scss" scoped>
#centerRelative {
    position: relative;
    width: 100%;
    height: 100%;
    .item {
        position: absolute;
        text-align: center;
        padding: 5px 10px;
        border: 1px solid #eaeaea;
        border-radius: 5px;
        width: 180px;
        height: 35px;
        font-size: 14px;
        cursor: move;
        background: white;
        &:hover {
            cursor: move;
            .node-anchor{
                display: block;
            }
        }
    }
}
</style>

<style lang="scss">
.customLayoutClass {
    width: 152px !important;
    .context-menu-item {
        font-size: 13px;
        height: 29px;
        padding: 0;
        .arrow {
            .icon {
                width: 0.7rem;
            }
        }
    }
}
.node-anchor {
    position: absolute;
    width: 10px;
    height: 10px;
    text-align: center;
    font-size: 22px;
    display: none;
    cursor: pointer;
    z-index: 11;
    &:hover{
        cursor: crosshair;
    }
}
.anchor-top {
    top: -10px;
    left: calc(50% - 5px);
}
.anchor-bottom {
    bottom: -5px;
    left: calc(50% - 5px);
}
.anchor-right {
    right: -10px;
    top: calc(50% - 7px);
}
.anchor-left {
    top: calc(50% - 7px);
    left: -10px;
}
.jtk-connector.active {
    z-index: 9999;
    path {
        stroke: #150042;
        stroke-width: 1.5;
        animation: ring;
        animation-duration: 3s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        stroke-dasharray: 5;
    }
}
@keyframes ring {
    from {
        stroke-dashoffset: 50;
    }
    to {
        stroke-dashoffset: 0;
    }
}
</style>