/*
 * @Descripttion: 封装axios拦截器
 * @Author: wy
 * @Date: 2021年04月08日
 * @LastEditTime: 2021年05月05日
 */
// 首先引入axios和封装的cookie方法
import axios from 'axios';
import cookiesUtil from './cookie';
// 提示弹窗
import { ElNotification, ElMessageBox } from 'element-plus';
import router from '../router';

const service = axios.create({
	baseURL: 'http://localhost:3000', // url = base url + request url
	timeout: 10000,
	withCredentials: true, // 请求携带凭据
	headers: {
		'Content-Type': 'application/json;charset=utf-8',
	},
});
// 请求拦截
service.interceptors.request.use(
	(config) => {
		// 判断一下是否有cookie 如果有的话则把cookie放入请求头中
		if (cookiesUtil.getToken()) {
			config.headers[cookiesUtil.getTokenKey()] = cookiesUtil.getToken();
		}
		// 在此处添加请求头等，如添加 token
		// config.headers['Authorization'] = 'tokentokentokentokentokentokenhhh'
		return config;
	},
	(err) => {
		console.error(err);
	},
);
// 响应拦截
service.interceptors.response.use(
	(res: any) => {
		const response = res.data;
		if (response.code !== 200) {
			// ElNotification({
			// 	title: '错误',
			// 	type: 'error',
			// 	message: response.msg,
			// 	duration: 1000,
			// });
			if (response.code === 401 || response.code === 403 || response.code === 408) {
				// 警告提示窗
				let msg = '登录状态已过期，请您重新登录';
				ElMessageBox.confirm(msg, '系统提示', {
					confirmButtonText: '重新登录',
					cancelButtonText: '取消',
					type: 'warning',
					roundButton: true,
				}).then(() => {
					ElNotification({
						type: 'success',
						message: '退出登陆成功',
						duration: 1000,
					});
					// 移除过期cookie
					// cookiesUtil.removeToken();
					// 跳转到登录页，具体根据项目路由修改
					router.push('/login');
				});
			} else {
				// 若后台返回错误值，此处返回对应错误对象，下面 error 就会接收
				return Promise.reject(new Error(response.error || 'Error'));
			}
		} else {
			// 注意返回值
			return response;
		}
	},
	(error) => {
		if (error && error.response) {
			switch (error.response.status) {
				case 400:
					error.message = '请求错误(400)';
					break;
				case 401:
					error.message = '未授权,请登录(401)';
					break;
				case 403:
					error.message = '拒绝访问(403)';
					break;
				case 404:
					error.message = `请求地址出错(404): ${error.response.config.url}`;
					break;
				case 405:
					error.message = '请求方法未允许(405)';
					break;
				case 408:
					error.message = '请求超时(408)';
					break;
				case 500:
					error.message = '服务器内部错误(500)';
					break;
				case 501:
					error.message = '服务未实现(501)';
					break;
				case 502:
					error.message = '网络错误(502)';
					break;
				case 503:
					error.message = '服务不可用(503)';
					break;
				case 504:
					error.message = '网络超时(504)';
					break;
				case 505:
					error.message = 'HTTP版本不受支持(505)';
					break;
				default:
					error.message = `连接错误: ${error.message}`;
			}
		} else {
			error.message = '连接到服务器失败，请联系管理员';
		}
		ElNotification({
			title: '错误',
			type: 'error',
			message: error.data || error.message || 'Error',
			duration: 1000,
		});
		return Promise.reject(error);
	},
);
export default service;
