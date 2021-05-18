/*
 * @Descripttion:
 * @version:
 * @Author: wy
 * @Date: 2021年04月07日 21:46:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021年05月18日
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// 进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Dashboard from '../views/Dashboard/Dashboard.vue';

const whiteList: Array<string> = ['/login', '/bind', '/register'];

const Login = () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue');
const NotFound = () => import(/* webpackChunkName: "NotFound" */ '@/components/404.vue');
const Layout = () => import(/* webpackChunkName: "Layout" */ '@/layout/index.vue');
const Customers = () =>
	import(/* webpackChunkName: "Customers" */ '@/views/customers/index.vue');
const Jurisdiction = () =>
	import(/* webpackChunkName: "Jurisdiction" */ '@/views/jurisdiction/index.vue');
const Price = () => import(/* webpackChunkName: "Price" */ '@/views/price/index.vue');
const UserList = () =>
	import(/* webpackChunkName: "Price" */ '@/views/userList/index.vue');
const ProductList = () =>
	import(/* webpackChunkName: "ProductList" */ '@/views/productList/index.vue');
const ProductType = () =>
	import(/* webpackChunkName: "ProductType" */ '@/views/productType/index.vue');
const Roles = () => import(/* webpackChunkName: "Roles" */ '@/views/roles/index.vue');
const StockList = () =>
	import(/* webpackChunkName: "StockList" */ '@/views/stockList/index.vue');
const ToolsList = () =>
	import(/* webpackChunkName: "ToolsList" */ '@/views/toolsList/index.vue');
const WarehousingInfo = () =>
	import(/* webpackChunkName: "Warehousinglnfo" */ '@/views/warehousingInfo/index.vue');

const routes: Array<RouteRecordRaw> = [
	{ path: '/login', name: 'Login', component: Login },
	{
		path: '',
		redirect: () => {
			return { path: '/home' };
		},
	},
	{
		path: '/home',
		name: 'Layout',
		component: Layout,
		children: [
			{ path: '', name: 'Dashboard', component: Dashboard },
			{ path: '/customers', name: 'Customers', component: Customers },
			{ path: '/userList', name: 'UserList', component: UserList },
			{ path: '/jurisdiction', name: 'Jurisdiction', component: Jurisdiction },
			{ path: '/price', name: 'Price', component: Price },
			{ path: '/productList', name: 'ProductList', component: ProductList },
			{ path: '/productType', name: 'ProductType', component: ProductType },
			{ path: '/roles', name: 'Roles', component: Roles },
			{ path: '/stockList', name: 'StockList', component: StockList },
			{ path: '/toolsList', name: 'ToolsList', component: ToolsList },
			{
				path: '/warehousingInfo',
				name: 'WarehousingInfo',
				component: WarehousingInfo,
			},
			{ path: '/:currentPath(.*)*', name: 'NotFound', component: NotFound },
		],
	},
	{
		path: '/:currentPath(.*)*', // 路由未匹配到，进入这个
		redirect: () => {
			return { name: 'NotFound' };
		},
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		return {
			el: '#app',
			top: 0,
			behavior: 'smooth',
		};
	},
});
// 全局路由拦截
router.beforeEach(async (to, from, next) => {
	//
	NProgress.start();
	const token = window.localStorage.getItem('token');
	// 如果为登录状态
	if (token) {
		// 如果为登录状态，自动跳转'/'页面
		if (to.path === '/login') {
			next({ path: '/' });
		} else {
			next();
		}
		NProgress.done();
	} else {
		if (to.path !== '/login') {
			next('/login');
		} else {
			next();
		}

		NProgress.done();
	}
});
export default router;
