/*
 * @Descripttion:
 * @Author: wy
 * @Date: 2021年05月04日
 * @LastEditTime: 2021年05月05日
 */
import service from '@/utils/request';
// 验证后台session
export function validSession() {
	return service({
		url: '/isLogin',
		method: 'get',
	});
}
// 登录
export function toLogin(data: any) {
	return service({
		url: '/login',
		method: 'post',
		data: data,
	});
}
// 注销
export function logout() {
	return service({
		url: '/logout',
		method: 'get',
	});
}
