/*
 * @Descripttion:
 * @Author: wy
 * @Date: 2021年04月18日
 * @LastEditTime: 2021年05月19日
 */
import service from '@/utils/request';
// 用户列表,包含分页
export function getUserList(query: any) {
	return service({
		url: '/warehouse/warehouse-user',
		method: 'post',
		params: query,
	});
}

// 删除ids
export function deleteUser(data: any) {
	return service({
		url: '/warehouse/warehouse-user',
		method: 'delete',
		params: data,
	});
}
// 添加或者修改
// 有id就是修改，没有
export function putUser(data: any) {
	return service({
		url: '/warehouse/warehouse-user',
		method: 'put',
		params: data,
	});
}
