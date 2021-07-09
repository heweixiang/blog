import { createRouter, createWebHashHistory } from "vue-router"

// 路由配置
const routes = [
    { path: "/", redirect: "/index" },
    {
        path: "/index",
        name: "index",
        component: () =>
            import ( /* webpackChunkName: "index" */ "../views/index/index.vue")
    }
]




const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router