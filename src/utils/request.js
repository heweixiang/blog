/*
 * @Author: your name
 * @Date: 2021-07-06 20:28:32
 * @LastEditTime: 2021-07-10 13:14:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webServer\src\utils\request.js
 */
import axios from "./http";
import qs from "qs";

/**
 * 封装请求方式
 */
const request = {
    /**
     * @param url 请求连接
     * @param params 请求参数
     * @param callback 回调方法
     */
    async Get(url, params, callback) {
        return new Promise((resolve, reject) => {
            axios
                .get(url, {
                    params: params
                })
                .then(res => {
                    callback ? resolve(callback(res.data)) : resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },

    /**
     * @param url 请求连接
     * @param params 请求参数
     * @param callback 回调方法
     */
    async Post(url, params, callback) {
        return new Promise((resolve, reject) => {
            axios
                .post(url, qs.stringify(params))
                .then(res => {
                    callback ? resolve(callback(res.data)) : resolve(res.data);
                })
                .catch(err => {
                    // reject(err);
                    resolve(err)
                });
        });
    },

    /**
     * @param url 请求连接
     * @param params 请求参数
     * @param callback 回调方法
     */
    put(url, params, callback) {
        return new Promise((resolve, reject) => {
            axios
                .put(url, params)
                .then(res => {
                    callback ? resolve(callback(res.data)) : resolve(res.data);
                }, err => {
                    reject(err)
                })
        })
    },
    /**
     * @param {Number} status 请求失败的状态码
     */
    errorHandle(status, other) {
        // 状态码判断
        switch (status) {
            // 401: 未登录状态，跳转登录页
            case 401:
                // toLogin();
                break;
                // 403 token过期
                // 清除token并跳转登录页
            case 403:
                // tip('登录过期，请重新登录');
                // localStorage.removeItem('token');
                // store.commit('loginSuccess', null);
                setTimeout(() => {
                    // toLogin();
                }, 1000);
                break;
                // 404请求不存在
            case 404:
                // tip('请求的资源不存在');
                break;
            default:
                console.log(other);
        }
    }

}
export default request;