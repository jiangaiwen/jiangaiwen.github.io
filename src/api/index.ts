import axios from "axios";

const api = axios.create({
    baseURL: '/api',
    timeout: 1000 * 60,
    responseType: 'json'
})

export default api