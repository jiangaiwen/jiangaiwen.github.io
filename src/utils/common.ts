import { nextTick } from "vue"
import type { App } from 'vue'
import * as elIcons from '@element-plus/icons-vue'
import router from '@/router/index'
import Icon from '@/components/icon/index.vue'
import { useSiteConfig } from '@/stores/siteConfig'
import { useTitle } from '@vueuse/core'
import { getUrl } from './axios'

export function registerIcons(app: App) {
    /*
     * 全局注册 Icon
     * 使用方式: <Icon name="name" size="size" color="color" />
     * 详见<待完善>
     */
    app.component('Icon', Icon)

    /*
     * 全局注册element Plus的icon
     */
    const icons = elIcons as any
    for (const i in icons) {
        app.component(`el-icon-${icons[i].name}`, icons[i])
    }
}
/**
 * 加载网络css文件
 * @param url css资源url
 */
export function loadCss(url: string): void {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = url
    link.crossOrigin = 'anonymous'
    document.getElementsByTagName('head')[0].appendChild(link)
}

/**
 * 加载网络js文件
 * @param url js资源url
 */
export function loadJs(url: string): void {
    const link = document.createElement('script')
    link.src = url
    document.body.appendChild(link)
}

/**
 * 根据路由 meta.title 设置浏览器标题
 */
export function setTitleFromRoute() {
    if (typeof router.currentRoute.value.meta.title != 'string') {
        return
    }
    nextTick(() => {
        let webTitle = ''
        if ((router.currentRoute.value.meta.title as string).indexOf('pagesTitle.') === -1) {
            webTitle = router.currentRoute.value.meta.title as string
        } else {
            // webTitle = i18n.global.t(router.currentRoute.value.meta.title as string)
        }
        const title = useTitle()
        const siteConfig = useSiteConfig()
        title.value = `${webTitle}${siteConfig.siteName ? ' - ' + siteConfig.siteName : ''}`
    })
}

/**
 * 是否是外部链接
 * @param path
 */
export function isExternal(path: string): boolean {
    return /^(https?|ftp|mailto|tel):/.test(path)
}

/**
 * 是否在后台应用内
 * @param path 不传递则通过当前路由 path 检查
 */
export const isAdminApp = (path = '') => {
    if (path) {
        return /^\/admin/.test(path)
    }
    if (/^\/admin/.test(router.currentRoute.value.fullPath) || window.location.hash.indexOf('#/admin') === 0) {
        return true
    }
    return false
}

/**
 * 根据当前时间生成问候语
 */
 export const getGreet = () => {
    const now = new Date()
    const hour = now.getHours()
    let greet = ''

    if (hour < 5) {
        greet = '夜深了，注意身体哦！'
    } else if (hour < 9) {
        greet = '早上好！欢迎回来！'
    } else if (hour < 12) {
        greet = '上午好！欢迎回来！'
    } else if (hour < 14) {
        greet = '中午好！欢迎回来！'
    } else if (hour < 18) {
        greet = '下午好！欢迎回来！'
    } else if (hour < 24) {
        greet = '晚上好！欢迎回来！'
    } else {
        greet = '您好！欢迎回来！'
    }
    return greet
}

/**
 * 根据pk字段的值从数组中获取key
 * @param arr
 * @param pk
 * @param value
 */
export const getArrayKey = (arr: any, pk: string, value: string): any => {
    for (const key in arr) {
        if (arr[key][pk] == value) {
            return key
        }
    }
    return false
}

/**
 * 获取资源完整地址
 * @param relativeUrl 资源相对地址
 * @param domain 指定域名
 */
export const fullUrl = (relativeUrl: string, domain = '') => {
    const siteConfig = useSiteConfig()
    if (!domain) {
        domain = siteConfig.cdnUrl ? siteConfig.cdnUrl : getUrl()
    }
    if (!relativeUrl) return domain

    const regUrl = new RegExp(/^http(s)?:\/\//)
    const regexImg = new RegExp(/^((?:[a-z]+:)?\/\/|data:image\/)(.*)/i)
    if (!domain || regUrl.test(relativeUrl) || regexImg.test(relativeUrl)) {
        return relativeUrl
    }
    return domain + relativeUrl
}

/**
 * 获取一组资源的完整地址
 * @param relativeUrls 资源相对地址
 * @param domain 指定域名
 */
export const arrayFullUrl = (relativeUrls: string | string[], domain = '') => {
    if (typeof relativeUrls === 'string') {
        relativeUrls = relativeUrls == '' ? [] : relativeUrls.split(',')
    }
    for (const key in relativeUrls) {
        relativeUrls[key] = fullUrl(relativeUrls[key], domain)
    }
    return relativeUrls
}