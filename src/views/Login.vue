<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import Copyright from '@/layouts/components/Copyright/index.vue'
import useSettingsStore from '@/store/modules/settings'
import useUserStore from '@/store/modules/user'
import * as pageBubble from '@/utils/pageBubble';

defineOptions({
    name: 'Login',
})
var timer: NodeJS.Timer
const route = useRoute()
const router = useRouter()

const settingsStore = useSettingsStore()
const userStore = useUserStore()

// 表单类型，login 登录，register 注册，reset 重置密码
const formType = ref('login')
const loading = ref(false)
const redirect = ref(route.query.redirect?.toString() ?? settingsStore.settings.home.fullPath)

// 登录
const loginFormRef = ref<FormInstance>()
const loginForm = ref({
    account: localStorage.login_account || 'admin',
    password: '123456',
    remember: !!localStorage.login_account,
})
const loginRules = ref<FormRules>({
    account: [
        { required: true, trigger: 'blur', message: '请输入用户名' },
    ],
    password: [
        { required: true, trigger: 'blur', message: '请输入密码' },
        { min: 6, max: 18, trigger: 'blur', message: '密码长度为6到18位' },
    ]
})

function handleLogin() {
    loginFormRef.value && loginFormRef.value.validate((valid:any) => {
        if (valid) {
            loading.value = true
            userStore.login(loginForm.value).then(() => {
                loading.value = false
                if (loginForm.value.remember) {
                    localStorage.setItem('login_account', loginForm.value.account)
                }
                else {
                    localStorage.removeItem('login_account')
                }
                router.push(redirect.value)
            }).catch(() => {
                loading.value = false
            })
        }
    })
}

onMounted(() => {
    timer = setTimeout(() => {
        pageBubble.init()
    }, 1000)
})

onBeforeUnmount(() => {
    clearTimeout(timer)
    pageBubble.removeListeners()
})
</script>
<template>
    <div class="login">
        <div @contextmenu.stop="" id="bubble" class="bubble">
            <canvas id="bubble-canvas" class="bubble-canvas"></canvas>
        </div>
        <div class="login-wrapper">
            
            <div class="head">
                <!-- <el-button link>登录页</el-button> -->
            </div>
            <div class="form">
                <el-form @keyup.enter="handleLogin" ref="loginFormRef" :rules="loginRules" :model="loginForm">
                    <el-form-item prop="account">
                        <el-input
                            type="text"
                            clearable
                            v-model="loginForm.account"
                            placeholder="请输入账号"
                        >
                            <template #prefix>
                                <el-icon size="20"><UserFilled /></el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input
                            v-model="loginForm.password"
                            type="password"
                            placeholder="请输入密码"
                            show-password
                        >
                            <template #prefix>
                                <el-icon size="20"><Lock /></el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-checkbox v-model="loginForm.remember" label="记住密码" size="default"></el-checkbox>
                    <el-form-item>
                        <el-button :loading="loading" class="submit-button" type="primary" style="width: 100%;" @click="handleLogin">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <Copyright />
    </div>
</template>
<style lang="scss" scoped>
.login {
    position: relative;
    width: 100%;
    height: 100%;
    .bubble {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: url(@/assets/images/bg.jpg) repeat;
    }
    .login-wrapper {
        position: absolute;
        top: 0;
        display: flex;
        width: 100vw;
        height: 100vh;
        align-items: center;
        justify-content: center;
    }
}
</style>