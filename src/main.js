/*
 * @ModeRule: 模块作用
 * @Author: 何维想
 * @Date: 2021-07-06 23:34:28
 * @EditAuthor: heweixiang1110@163.com
 * @LastEditTime: 2021-07-10 17:24:12
 */
import { createApp } from 'vue'
import App from './App.vue'

// 引入路由
// import { createRouter, createWebHashHistory } from 'vue-router';
import router from "./router/index"

// 引入vueX
import store from './store';

// 引入公共css
import "./assets/less/style.less"

// 初始化css
import 'normalize.css/normalize.css'


// 导入elementUI
import ElementPlus from 'element-plus';
import "element-plus/lib/theme-chalk/index.css"

// 导入API
import api from "./api/index"


// 引入
const VM = createApp(App)
VM.config.globalProperties.$api = api
VM.use(ElementPlus).use(router).use(store).use(api).mount('#app')