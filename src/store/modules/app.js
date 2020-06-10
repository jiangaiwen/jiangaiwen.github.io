const app = {
    state: {
        device: 'desktop',
        layout: ''
    },
    mutations: {
        TOGGLE_DEVICE: (state, device) => {
            state.device = device
        },
        TOGGLE_LAYOUT_MODE: (state, layout) => {
            state.layout = layout
        }
    },
    actions: {
        ToggleDevice ({ commit }, device) {
            commit('TOGGLE_DEVICE', device)
        },
        ToggleLayoutMode ({ commit }, mode) {
            commit('TOGGLE_LAYOUT_MODE', mode)
        }
    }
}

export default app