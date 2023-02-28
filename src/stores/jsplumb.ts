import { defineStore } from 'pinia';

export const configJsplumb = defineStore({
    id: 'configJsplumb', // id必填，且需要唯一
    state: () => {
        return {
            jslumbSortData: [],
        };
    },
    actions: {
        updateSortData(name) {
            this.jslumbSortData.unshift(name);
        },
    },
});