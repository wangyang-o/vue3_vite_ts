/*
 * @Descripttion:
 * @Author: wy
 * @Date: 2021年04月18日
 * @LastEditTime: 2021年05月05日
 */
import service from '@/utils/request';
// 用户列表
export function getUserList() {
	return service({
		url: 'api/users/getUserList',
		method: 'get',
	});
}
