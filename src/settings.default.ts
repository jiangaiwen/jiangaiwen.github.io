// 系统默认配置
import type { RecursiveRequired, Settings } from '#/global'

const globalSettingsDefault: RecursiveRequired<Settings.all> = {
    app: {
        colorScheme: 'light',
        enablePermission: false,
        enableProgress: true,
        enableDynamicTitle: false,
        routeBaseOn: 'frontend',
    },
    home: {
        enable: true,
        title: '主页',
        fullPath: '/',
    },
    layout: {
        enableMobileAdaptation: false,
    },
    menu: {
        baseOn: 'frontend',
        menuMode: 'side',
        switchMainMenuAndPageJump: false,
        subMenuUniqueOpened: true,
        subMenuCollapse: false,
        enableSubMenuCollapseButton: false,
        enableHotkeys: false,
    },
    topbar: {
        mode: 'static',
    },
    tabbar: {
        enable: true,
        enableIcon: true,
        enableHotkeys: false,
    },
    toolbar: {
        breadcrumb: true,
        navSearch: true,
        fullscreen: true,
        pageReload: true,
        colorScheme: true,
    },
    mainPage: {
        enableHotkeys: true,
    },
    navSearch: {
        enableHotkeys: true,
    },
    copyright: {
        enable: false,
        dates: '',
        company: '',
        website: '',
        beian: '',
    },
}

export default globalSettingsDefault