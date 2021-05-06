/*
 * @Descripttion:
 * @Author: wy
 * @Date: 2021年04月18日
 * @LastEditTime: 2021年05月06日
 */
import service from '@/utils/request';
// 用户列表
export function getUserList(data: any) {
	return service({
		url: 'api/users/getUserList',
		method: 'post',
		data: data,
	});
}
export function fuzzySearch(data: any) {
	return service({
		url: 'api/users/fuzzySearch',
		method: 'post',
		data: data,
	});
}
