import Vue from 'vue';
import axios from 'axios';

const service = axios.create({
    baseURL: Vue.prototype.BASE_URL,
    timeout: 15000
})

// request interceptor
service.interceptors.request.use(
    config => {
        // let token = getToken();
        // if(token) {
        //     config.headers.Authorization = 'Bearer '+token;
        // }
        return config
    },
    error => {
        console.log('请求超时')
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        return response
    },
    error => {
        console.log(error.message)
        return Promise.reject(error)
    }
)

export default service

export function http(url, method, params) {
    let paramsData = null;
    if(method === 'get'){
        paramsData = {params};
    }
    else if( method === 'post' || method === 'put'){
        paramsData = params;
    }
    else if( method === 'delete'){
        paramsData = `/${params}`;
    }
    return new Promise((resolve, reject) => {
        method === 'delete' ?
        service[method.toLowerCase()](url+paramsData).then(res => {
            resolve(res && res.data)
        }).catch(err => {
            reject(err.data)
        })
        :
        service[method.toLowerCase()](url, paramsData).then(res => {
            resolve(res && res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}