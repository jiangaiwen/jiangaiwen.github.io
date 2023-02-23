import Axios from 'axios'
import { ElMessage } from 'element-plus';

const baseURL = ''

const axios = Axios.create({
    baseURL,
    timeout: 20000
})

/*
 * 根据运行环境获取基础请求URL
 */
export const getUrl = (): string => {
    const value: string = import.meta.env.VITE_AXIOS_BASE_URL as string
    return value == 'getCurrentDomain' ? window.location.protocol + '//' + window.location.host : value
}

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response && error.response.data) {
            const code = error.response.status
            const msg = error.response.data.message
            ElMessage.error(`Code: ${code}, Message: ${msg}`)
            console.error(`[Axios Error]`, error.response)
        } else {
            ElMessage.error(`${error}`)
        }
        return Promise.reject(error)
    }
)
  
export default axios