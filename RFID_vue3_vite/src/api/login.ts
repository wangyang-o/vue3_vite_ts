/*
 * @Descripttion:
 * @Author: wy
 * @Date: 2021年05月04日
 * @LastEditTime: 2021年05月18日
 */
import service from '@/utils/request';
// 登录
export function toLogin(data: any) {
	return service({
		url: '/warehouse/sys/login',
		method: 'post',
		data: data,
	});
}
// 注销
export function logout() {
	return service({
		url: '/warehouse/sys/logout',
		method: 'post',
	});
}
