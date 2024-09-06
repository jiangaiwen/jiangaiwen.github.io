
<script>
import WidgetPanel from './widget-panel/index.vue'
import { createDesigner } from "./designer"
export default {
    data() {
        return {
            designer: createDesigner(this),
        }
    },
    components: {
        WidgetPanel
    },
    props: {
        /* 禁止显示的组件名称数组 */
        bannedWidgets: {
            type: Array,
            default: () => []
        },

        designerConfig: {
            type: Object,
            default: () => {
                return {
                    languageMenu: true,  //是否显示语言切换菜单
                    externalLink: true,  //是否显示GitHub、文档等外部链接
                    formTemplates: true,  //是否显示表单模板
                    eventCollapse: true,  //是否显示组件事件属性折叠面板
                    widgetNameReadonly: false,  //禁止修改组件名称

                    clearDesignerButton: true,  //是否显示清空设计器按钮
                    previewFormButton: true,  //是否显示预览表单按钮
                    importJsonButton: true,  //是否显示导入JSON按钮
                    exportJsonButton: true,  //是否显示导出JSON器按钮
                    exportCodeButton: true,  //是否显示导出代码按钮
                    generateSFCButton: true,  //是否显示生成SFC按钮

                    toolbarMaxWidth: 450,  //设计器工具按钮栏最大宽度（单位像素）
                    toolbarMinWidth: 300,  //设计器工具按钮栏最小宽度（单位像素）

                    presetCssCode: '',  //设计器预设CSS样式代码

                    resetFormJson: false,  //是否在设计器初始化时将表单内容重置为空
                }
            }
        },
    },
    provide() {
        return {
            getDesignerConfig: () => this.designerConfig,
            getBannedWidgets: () => this.bannedWidgets,
        }
    }
}
</script>
<template>
    <el-container class="main-container full-height">
        <el-container>
            <el-aside class="side-panel">
                <widget-panel :designer="designer" />
            </el-aside>
            <el-container class="center-layout-container">
                <el-header class="toolbar-header">

                </el-header>
                <el-main>
                    <el-scrollbar>
                        面板
                    </el-scrollbar>
                </el-main>
            </el-container>
            <el-aside>
                属性
            </el-aside>
        </el-container>
    </el-container>
</template>
<style lang="scss" scoped>
.el-container.main-container {
    background: #fff;

    :deep(aside) {  /* 防止aside样式被外部样式覆盖！！ */
        margin: 0;
        padding: 0;
        background: inherit;
    }
}
.el-container.full-height {
    height: 100%;
    overflow-y: hidden;
}

.el-container.center-layout-container {
    min-width: 680px;
    border-left: 2px dotted #EBEEF5;
    border-right: 2px dotted #EBEEF5;
}

.el-header.main-header {
    border-bottom: 2px dotted #EBEEF5;
    height: 48px !important;
    line-height: 48px !important;
    min-width: 800px;
}

.el-header.toolbar-header {
    font-size: 14px;
    border-bottom: 1px dotted #CCCCCC;
    height: 42px !important;
}
.el-aside.side-panel {
    width: 260px !important;
    overflow-y: hidden;
}

.el-main.form-widget-main {
    padding: 0;
    position: relative;
    overflow-x: hidden;
}
</style>