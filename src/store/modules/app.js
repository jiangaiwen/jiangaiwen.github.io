const app = {
    state: {
        device: 'desktop',
        layout: '',
        theme: 'light'
    },
    mutations: {
        TOGGLE_DEVICE: (state, device) => {
            state.device = device
        },
        TOGGLE_LAYOUT_MODE: (state, layout) => {
            state.layout = layout
        },
        TOGGLE_THEME: (state, theme) => {
            state.theme = theme
        }
    },
    actions: {
        ToggleDevice ({ commit }, device) {
            commit('TOGGLE_DEVICE', device)
        },
        ToggleLayoutMode ({ commit }, mode) {
            commit('TOGGLE_LAYOUT_MODE', mode)
        },
        ToggleTheme ({ commit }, theme) {
            commit('TOGGLE_THEME', theme)
        }
    }
}

export default app