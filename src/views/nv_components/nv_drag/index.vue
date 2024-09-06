<template>
    <PageMain>
        <div class="drag-box">
            <Draggable
                v-model="tags"
                :list="list"
                :animation="100"
                item-key="id"
                class="list-group"
                :forceFallback="true"
                ghost-class="ghost"
                @change="onMoveCallback"
                :move="getData"
                >
                <template #item="{ element }">
                    <div class="items">
                        <div class="title">{{ element.label }}</div>
                    </div>
                </template>
            </Draggable>
        </div>
    </PageMain>
</template>
<script setup>
import { reactive } from 'vue';
import Draggable from 'vuedraggable'
let list = reactive([{
    label: '模块1',
    id: 1,
    isflod: false
},{
    label: '模块2',
    id: 2,
    isflod: false
},{
    label: '模块3',
    id: 3,
    isflod: false
},{
    label: '模块4',
    id: 4,
    isflod: false
},{
    label: '模块5',
    id: 5,
    isflod: false
},{
    label: '模块6',
    id: 6,
    isflod: false
}])

const onMoveCallback = (val) => {
    console.log(val.moved.newIndex, val.moved.oldIndex);
}
const getData = (val) => {
    console.log(val.draggedContext.element.id);
}
</script>
<style scoped>
.drag-box .items {
    display: flex;
    justify-content: space-between;
    width: 80%;
    padding: 20px;
    margin-bottom: 20px;
    background: #e3e3e3;
    border-radius: 8px;
}
</style>