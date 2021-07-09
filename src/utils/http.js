import axios from "axios";
// import { Dialog } from "element-plus";
import { ElMessage } from "element-plus"

// 请求超时时间
axios.defaults.timeout = 1000 * 60 * 3; // 3 min
//  axios 请求头
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = localStorage.getItem('token') || '' // 携带token
axios.defaults.headers.post['Content-Type'] = 'application/json'

// axios请求开启cookie，支持跨域请求携带cookie
axios.defaults.withCredentials = true;


// 请求拦截
axios.interceptors.request.use(
    (config) => {
        // 可在这里做一些数据的校验。
        // session的校验等。
        return config
    },
    (error) => {
        return error
    }
)

// 响应拦截
axios.interceptors.response.use((result) => {
    // 大于 -10 可能为服务端人为反馈
    if (result.data.code < -100) {
        if (result.data.msg) {
            // 调用自定义alert
            // utils.alert(result.data.msg, function() {
            //     window.location.assign('/pc/index');
            // });
            // 友情提示错误
            ElMessage.error(result.data.msg)

        }
        ElMessage.error("请求出错啦")

        // 此处可直接引导入错误页面

        return Promise.reject(result.data.data)
    } else {
        // 请求成功
        return Promise.resolve(result)
    }
}, (err) => {
    ElMessage.error("请求出错啦")

    // utils.alertLoadExec(false);
    // 返回数据前做了什么
    return Promise.reject(err)
})

export default axios