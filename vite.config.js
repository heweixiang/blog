/*
 * @ModeRule: 模块作用
 * @Author: 何维想
 * @Date: 2021-07-10 17:31:59
 * @EditAuthor: heweixiang1110@163.com
 * @LastEditTime: 2021-07-10 17:38:13
 */
import { defineConfig } from 'vite'
import path, { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    // 配置别名
    resolve: {
        alias: [{
                find: /^~/,
                replacement: "",
            },
            {
                find: "@",
                replacement: resolve(__dirname, "src"),
            },
            {
                find: "@ASS",
                replacement: resolve(__dirname, "src/assets"),
            },

        ],
    },
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    hack: `true; @import "@ASS/less/style.less";`,
                },
            },
        },
    },
})