/*
 * @Descripttion:
 * @version:
 * @Author: wy
 * @Date: 2021年04月07日 21:46:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021年04月21日
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// 进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import HelloWorld from '../components/HelloWorld.vue';
import cookiesUtil from "@/utils/cookie";

const whiteList: Array<string> = ['/login', '/bind', '/register']

const Login = () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue');
const NotFound = () => import(/* webpackChunkName: "NotFound" */ '@/components/404.vue');
const Layout = () => import(/* webpackChunkName: "Layout" */ '@/layout/index.vue');

const routes: Array<RouteRecordRaw> = [
    { path: '/login', component: Login },
    {
        path: '',
        redirect: () => {
            return { path: '/home' }
        },
    },
    {
        path: '/home',
        name: 'Layout',
        component: Layout,
        children:[
      { path: '', component: HelloWorld },

        ]
    },
    {
        path: '/404',
        name: 'NotFound',
        component: NotFound,
    },
    {
        path: '/:currentPath(.*)*', // 路由未匹配到，进入这个
        redirect: () => {
            return { name: 'NotFound' }
        },
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            el: '#app',
            top: 0,
            behavior: 'smooth',
        }
    },
})
// 全局路由拦截
router.beforeEach((to, from, next) => {
    // ...
    NProgress.start();
    if (cookiesUtil.getToken()) {
        if (to.path === '/login') {
            next({ path: '/' });
            NProgress.done();
        }
        next()
    } else {
        // 没有token，强制跳转到登录页
        if (whiteList.indexOf(to.path) !== -1) {
            next();
            NProgress.done();
        } else {
            next();
            // next('/login');
            // next(`/login?redirect=${to.path}`)
            NProgress.done();
        }
    }
})
export default router;
