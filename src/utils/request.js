import { message } from "antd";
import axios from "axios";


// 创建axios实例
const service = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 300 * 1000
})

// 是否正在刷新
let isRefreshing = false;
// 等待 Token 刷新的请求队列
let refreshSubscribers = [];

// 请求拦截器
service.interceptors.request.use(
    config => {
        const tokenInfoStr = localStorage.getItem("tokenInfo");
        if (tokenInfoStr) {
            const tokenInfo = JSON.parse(tokenInfoStr)
            config.headers['deviceCode'] = `${tokenInfo.deviceCode}`
            config.headers['sign'] = `${tokenInfo.sign}`
        }
        return config;
    },

    error => {
        // 请求错误
        console.log("请求错误：", error);
        return Promise.reject(error);
    }
);

// 响应拦截
service.interceptors.response.use(

    async response => {
        const res = response.data;
        // console.log("服务端返回结果：", res);
        // code = 200 表示成功返回 5007 token过期
        if (res.code === 1) {
            return res;
        } else {
            // 其他错误码
            console.log("响应失败：", res)
            return Promise.reject(res)
        }

    },
    async error => {
        message.error("响应错误")
        console.log("响应错误：", error)
        return Promise.reject(error);
    }
)


export default service;

