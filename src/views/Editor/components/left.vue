<template>
    <ul id="leftUl">
        <li v-for="(item, index) in tableData" :key="index">
            <span :style="{ color: item.color }"> {{ item.name }}</span>
        </li>
    </ul>
</template>
<script setup>
import { onMounted } from 'vue';
import Sortable from 'sortablejs';
import { configJsplumb } from '@/stores/jsplumb';
let tableData = [
    {
        type: 'statr',
        name: '开始',
        color: '#479A52',
    },
    {
        type: 'node',
        name: '节点',
        color: '#5a9cf8',
    },
    {
        type: 'end',
        name: '结束',
        color: 'red',
    },
];
let configJsplumbData = configJsplumb();
onMounted(() => {
    let dome = document.getElementById('leftUl');
    new Sortable(dome, {
        animation: 150,
        sort: false,
        forceFallback: true,
        ghostClass: 'blue-background-class',
        onEnd: function (evt) {
            if (evt.originalEvent.x < 309 && evt.originalEvent.y < 69) return;
            let list = {
                id: setSessionid(),
                x: evt.originalEvent.x - 310,
                y: evt.originalEvent.y - 70,
            };
            Object.assign(list, tableData[evt.newIndex]);
            configJsplumbData.updateSortData(list);
            console.log(evt.clone, '111');
        },
    });
});
//生成随机id
const setSessionid = () => {
    var len = 32;
    var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = chars.length;
    var pwd = '';
    for (var i = 0; i < len; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
};
</script>

<style lang="scss" scoped>
#leftUl {
    height: 100%;
    box-sizing: border-box;
    padding: 0 5px;
    list-style: none;
    li {
        text-align: center;
        padding: 5px 10px;
        border: 1px solid #eaeaea;
        border-radius: 5px;
        margin-bottom: 3px;
        font-size: 14px;
        cursor: move;
        background: white;
        &:first-child {
            margin-top: 3px;
        }
    }
}
</style>