/*
 * @Descripttion:工具
 * @Author: wy
 * @Date: 2021年05月21日
 * @LastEditTime: 2021年05月22日
 */
import service from '@/utils/request';
// 列表,包含分页
export function getUtilList(query: any) {
	return service({
		url: '/warehouse/warehouse-utils',
		method: 'post',
		params: query,
	});
}

// 删除ids
export function deleteUtil(data: any) {
	return service({
		url: '/warehouse/warehouse-utils',
		method: 'delete',
		params: data,
	});
}
// 添加或者修改
// 有id就是修改，没有就是添加
export function putUtil(data: any) {
	return service({
		url: '/warehouse/warehouse-utils',
		method: 'put',
		params: data,
	});
}
// 根据id查询信息
export function getInstanceById(id: string) {
	return service({
		url: `/warehouse/warehouse-utils/${id}`,
		method: 'get',
	});
}
