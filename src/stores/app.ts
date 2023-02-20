import { defineStore } from "pinia";

export const useApp = defineStore('app', {
    state: () => {
        return {
            isCollapse: true,
            themeConfig: {
                // 显示设置
                showSetting: false,
                // 深色模式 切换暗黑模式
                isDark: false,
            }
        }
    },
    actions: {
        // 设置主题
        setThemeConfig({key, val}) {
            this.themeConfig[key] = val
        },
        // 切换 Collapse
        setCollapse(value){
            this.isCollapse = value
        },
    }
})