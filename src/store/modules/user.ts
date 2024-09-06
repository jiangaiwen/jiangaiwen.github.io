import useSettingsStore from "./settings";
import useRouteStore from './route'
import useMenuStore from './menu'
import router from '@/router';

const useUserStore = defineStore(
    'user',
    () => {
        const settingsStore = useSettingsStore()
        const routeStore = useRouteStore()
        const menuStore = useMenuStore()

        const account = ref(localStorage.account ?? '')
        const token = ref(localStorage.token ?? '')
        const permissions = ref<string[]>([])
        const isLogin = computed(() => {
            if (token.value) {
                return true
            }
            return false
        })

        // 登录
        async function login(data: {
            account: string
            password: string
        }) {
            localStorage.setItem('account', data.account)
            localStorage.setItem('token', data.account + '_@string')
            account.value = data.account
            token.value = data.account + '_@string'
        }

        // 登出
        async function logout(redirect = router.currentRoute.value.fullPath) {
            localStorage.removeItem('account')
            localStorage.removeItem('token')
            account.value = ''
            token.value = ''
            permissions.value = []
            routeStore.removeRoutes()
            menuStore.setActived(0)
            router.push({
                name: 'login',
                query: {
                    ...(router.currentRoute.value.path !== settingsStore.settings.home.fullPath && router.currentRoute.value.name !== 'login' && { redirect }),
                },
            })
        }

        // 获取权限
        async function getPermissions() {
            permissions.value = [
                'permission.browse',
                'permission.create',
                'permission.edit',
                'permission.remove',
              ]
        }

        return {
            account,
            token,
            permissions,
            isLogin,
            login,
            logout,
            getPermissions
        }
    }
)

export default useUserStore