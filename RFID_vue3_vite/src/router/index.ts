/*
 * @Descripttion:
 * @version:
 * @Author: wy
 * @Date: 2021年04月07日 21:46:49
 * @LastEditors: wy
 * @LastEditTime: 2021年04月08日 13:31:13
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '',
        redirect: () => {
            return { path: '/home' }
        },
    },
    {
        path: '/home',
        name: 'HelloWorld',
        component: HelloWorld,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "About" */ '../components/About.vue'),
    },
    {
        path: '/404',
        name: 'NotFound',
        component: () =>
            import(/* webpackChunkName: "NotFound" */ '../components/404.vue'),
    },
    {
        path: '/:currentPath(.*)*', // 路由未匹配到，进入这个
        redirect: () => {
            return { name: 'NotFound' }
        },
    },
]
const router = createRouter({
    history: createWebHistory(''),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            el: '#app',
            top: 0,
            behavior: 'smooth',
        }
    },
})
export default router
