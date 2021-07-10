/*
 * @ModeRule: 整合所有的内容一并抛给main去合并
 * @Author: 何维想
 * @Date: 2021-07-06 23:32:36
 * @EditAuthor: heweixiang1110@163.com
 * @LastEditTime: 2021-07-11 02:01:34
 */

import index from "./index/index.js"


/**
 * 防抖函数,防抖一般应用在请求时控制,所以封入api
 * @param {Function} fn 处理函数
 * @param {int} delay 防抖时间 毫秒
 */
function debounce(fn, delay) {
    let timer = null;
    return function() {
        let self = this,
            args = arguments;
        timer && clearTimeout(timer);
        timer = setTimeout(function() {
            fn.apply(self, args);
        }, delay);
    }
}


const api = { index, debounce }

export default api