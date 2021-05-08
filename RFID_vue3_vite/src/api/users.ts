/*
 * @Descripttion:
 * @Author: wy
 * @Date: 2021年04月18日
 * @LastEditTime: 2021年05月08日
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
// 模糊查找
export function fuzzySearch(data: any) {
	return service({
		url: 'api/users/fuzzySearch',
		method: 'post',
		data: data,
	});
}
// 删除
export function deleteUser(data: any) {
	return service({
		url: 'api/users/deleteUser',
		method: 'delete',
		params: data,
	});
}
// 添加
export function addUser(data: any) {
	return service({
		url: 'api/users/addUser',
		method: 'post',
		data: data,
	});
}
//修改
export function updateUser(data: any) {
	return service({
		url: 'api/users/updateUser',
		method: 'post',
		data: data,
	});
}
//查抄by id
export function getUserById(data: any) {
	return service({
		url: 'api/users/getUserById',
		method: 'get',
		params: data,
	});
}
