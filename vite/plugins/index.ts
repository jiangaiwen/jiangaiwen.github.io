import type { PluginOption } from "vite";
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueLegacy from '@vitejs/plugin-legacy'

import createAutoImport from './auto-import'
import createComponents from './components'
import createUnocss from './unocss'
import createSvgIcon from './svg-icon'
import createLayouts from './layouts'
import createPages from './pages'
import createBanner from './banner'

export default function createVitePlugins(viteEnv, isBuild = false) {
    const vitePlugins: (PluginOption | PluginOption[])[] = [
        vue({
            script: {
                defineModel: true
            }
        }),
        vueJsx(),
        vueLegacy({
            renderLegacyChunks: false,
            modernPolyfills: [
                'es.array.at',
                'es.array.find-last',
            ],
        }),
    ]
    vitePlugins.push(createAutoImport())
    vitePlugins.push(createComponents())
    vitePlugins.push(createUnocss())
    vitePlugins.push(createSvgIcon(isBuild))
    vitePlugins.push(createLayouts())
    vitePlugins.push(createPages())
    vitePlugins.push(createBanner())
    return vitePlugins
}