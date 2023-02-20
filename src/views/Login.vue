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
                <el-form @keyup.enter="onSubmit(formRef)" ref="formRef" :rules="rules" size="large" :model="form">
                    <el-form-item prop="username">
                        <el-input
                            type="text"
                            clearable
                            v-model="form.username"
                            placeholder="请输入账号"
                        >
                            <template #prefix>
                                <Icon name="fa fa-user" class="form-item-icon" size="16" color="var(--el-input-icon-color)" />
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input
                            v-model="form.password"
                            type="password"
                            placeholder="请输入密码"
                            show-password
                        >
                            <template #prefix>
                                <Icon name="fa fa-unlock-alt" class="form-item-icon" size="16" color="var(--el-input-icon-color)" />
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-checkbox v-model="form.keep" label="记住密码" size="default"></el-checkbox>
                    <el-form-item>
                        <el-button :loading="form.loading" class="submit-button" type="primary" size="large" @click="onSubmit(formRef)">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, onBeforeUnmount, reactive, ref } from 'vue';
import { useRouter } from "vue-router";
import type { FormInstance } from 'element-plus'
import * as pageBubble from '@/utils/pageBubble';
var timer: NodeJS.Timer
const router = useRouter();
const formRef = ref<FormInstance>()
const form = reactive({
    username: '',
    password: '',
    keep: false,
    loading: false
})

const onSubmit = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            form.loading = true

            setTimeout(()=> {
                form.loading = false
                localStorage.setItem('token', 'asdasfjaghfjhqwiur');
                router.push('/');
            }, 500)
        } else {
            return false
        }
    })
    
}

// 表单验证规则
const rules = reactive({
    username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }],
})

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
<style lang="scss" scoped>
.login {
    .bubble {
        overflow: hidden;
        background: url(@/assets/bg.jpg) repeat;
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