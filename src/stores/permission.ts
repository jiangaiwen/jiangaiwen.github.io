import { defineStore } from 'pinia'
import { asyncRoutes, constantRoutes } from '@/router/index'
import { filterAsyncRoutes, filterKeepAlive } from "@/utils/router"

export const usePermissionStore = defineStore('permissionState', {
    state: ()=>({
        // 路由
        routes:[],
        // 动态路由
        addRoutes:[],
        // 缓存路由
        cacheRoutes:{},
    }),
    getters: {
        permission_routes:state=> {
            return state.routes
        },
        keepAliveRoutes: state=>{
            return filterKeepAlive(asyncRoutes)
        }
    },
    // 可以同步 也可以异步
    actions:{
        // 生成路由
        generateRoutes(roles){
            return new Promise(resolve => {
                // 在这判断是否有权限，哪些角色拥有哪些权限
                let accessedRoutes
                if (roles&&roles.length&&!roles.includes('admin')) {
                    accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
                } else {
                    accessedRoutes = asyncRoutes || []
                }
                this.routes = constantRoutes.concat(accessedRoutes)
                this.addRoutes = accessedRoutes
                resolve(accessedRoutes)
            })
        },
        // 清除路由
        clearRoutes(){
            this.routes = []
            this.addRoutes = []
            this.cacheRoutes = []
        },
        getCacheRoutes(){
            this.cacheRoutes = filterKeepAlive(asyncRoutes)
            return this.cacheRoutes
        }
    }
})