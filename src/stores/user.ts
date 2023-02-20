import { defineStore } from 'pinia'
// import { ADMIN_INFO } from '@/stores/constant/cacheKey'
// import { AdminInfo } from '@/stores/interface'

export const useUserStore = defineStore('userState', {
    state: () => {
        return {
            id: 0,
            username: '',
            nickname: '',
            avatar: '',
            lastlogintime: '',
            token: '',
            refreshToken: '',
            roles: ['admin']
        }
    },
    actions: {
        dataFill(state) {
            this.$state = { ...this.$state, ...state }
        },
        removeToken() {
            this.token = ''
            this.refreshToken = ''
        },
        setToken(token: string, type: 'token' | 'refreshToken') {
            this[type] = token
        },
        getToken(type: 'auth' | 'refresh' = 'auth') {
            return type === 'auth' ? this.token : this.refreshToken
        },
    },
    // persist: {
    //     key: ADMIN_INFO,
    // },
})