<template>
    <el-scrollbar>
        <div class="panel-container">
            <el-tabs v-model="firstTab">
                <el-tab-pane name="componentLib" label="组件库">
                    <el-collapse v-model="activeNames" class="widget-collapse">
                        <el-collapse-item name="1" title="容器">
                            <draggable tag="ul" 
                                :list="containers" 
                                item-key="key" 
                                :group="{
                                    name: 'dragGroup', 
                                    pull: 'clone', 
                                    put: false
                                }"
                                :clone="handleContainerWidgetClone" 
                                ghost-class="ghost" 
                                :sort="false"
                                :move="checkContainerMove" 
                                @end="onContainerDragEnd">
                                <template #item="{ element: ctn }">
                                    <li class="container-widget-item" :title="ctn.label" @dblclick="addContainerByDbClick(ctn)">
                                        <span>{{ctn.label}}</span>
                                    </li>
                                </template>
                            </draggable>
                        </el-collapse-item>
                    </el-collapse>
                </el-tab-pane>
                <el-tab-pane name="formLib" label="表单模板">
                    <div>表单模板</div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </el-scrollbar>
</template>
<script>
import draggable from 'vuedraggable'
import { containers as CONS } from './widgetsConfig'
import { generateId } from '@/utils'
export default {
    props: {
        designer: Object,
    },
    inject: ['getBannedWidgets', 'getDesignerConfig'],
    data() {
        return {
            firstTab: 'componentLib',
            activeNames: ['1', '2', '3', '4'],
            containers: [],
        }
    },
    created() {
        this.loadWidgets()
    },
    methods: {
        isBanned(wName) {
            return this.getBannedWidgets().indexOf(wName) > -1
        },

        loadWidgets() {
            this.containers = CONS.map(con => {
                return {
                    key: generateId(),
                    ...con
                }
            }).filter(con => {
                return !con.internal && !this.isBanned(con.type)
            })
        },
        handleContainerWidgetClone(origin) {
            return this.designer.copyNewContainerWidget(origin)
        },
        checkContainerMove(evt) {
            return this.designer.checkWidgetMove(evt)
        },
        onContainerDragEnd(evt) {
            console.log(evt)
        },
        addContainerByDbClick(container) {
            this.designer.addContainerByDbClick(container)
        },
    }
}
</script>