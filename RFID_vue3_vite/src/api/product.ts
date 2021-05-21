/*
 * @Descripttion:产品
 * @Author: wy
 * @Date: 2021年05月21日
 * @LastEditTime: 2021年05月21日
 */
import service from '@/utils/request';
// 列表,包含分页
export function getProductList(query: any) {
	return service({
		url: '/warehouse/warehouse-product',
		method: 'post',
		params: query,
	});
}

// 删除ids
export function deleteProduct(data: any) {
	return service({
		url: '/warehouse/warehouse-product',
		method: 'delete',
		params: data,
	});
}
// 添加或者修改
// 有id就是修改，没有就是添加
export function putProduct(data: any) {
	return service({
		url: '/warehouse/warehouse-product',
		method: 'put',
		params: data,
	});
}
// 根据id查询信息
export function getInstanceById(id: string) {
	return service({
		url: `/warehouse/warehouse-product/${id}`,
		method: 'get',
	});
}
