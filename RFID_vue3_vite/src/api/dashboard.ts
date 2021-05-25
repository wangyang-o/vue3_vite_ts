/*
 * @Descripttion:
 * @Author: wy
 * @Date: 2021年05月25日
 * @LastEditTime: 2021年05月25日
 */
import service from '@/utils/request';

// 价格指数
export function avgPrice() {
	return service({
		url: `/warehouse/avgPrice`,
		method: 'get',
	});
}
// 首页数据统计
export function indexCount() {
	return service({
		url: `/warehouse/indexCount`,
		method: 'get',
	});
}
// 数量-价格分布
export function numPriceDistribution() {
	return service({
		url: `/warehouse/numPriceDistribution`,
		method: 'get',
	});
}
// 价格分布
export function priceDistribution() {
	2;
	return service({
		url: `/warehouse/priceDistribution`,
		method: 'get',
	});
}
// 产品分布
export function productDistribution() {
	2;
	return service({
		url: `/warehouse/productDistribution`,
		method: 'get',
	});
}
