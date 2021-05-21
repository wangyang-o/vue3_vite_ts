/*
 * @Descripttion:权限
 * @Author: wy
 * @Date: 2021年05月21日
 * @LastEditTime: 2021年05月21日
 */
import service from '@/utils/request';
// 列表,包含分页
export function getPermissionList(query: any) {
	return service({
		url: '/warehouse/warehouse-permission',
		method: 'post',
		params: query,
	});
}

// 根据id查询信息
export function getInstanceById(id: string) {
	return service({
		url: `/warehouse/warehouse-permission/${id}`,
		method: 'get',
	});
}
