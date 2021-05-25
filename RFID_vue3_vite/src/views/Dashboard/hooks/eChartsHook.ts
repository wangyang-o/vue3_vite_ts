/*
 * @Descripttion:
 * @Author: wy
 * @Date: 2021年05月05日
 * @LastEditTime: 2021年05月25日
 */
import { onMounted } from 'vue';
import {
	avgPrice,
	numPriceDistribution,
	priceDistribution,
	productDistribution,
} from '@/api/dashboard';

import echarts from '@/utils/echarts';
interface echartsData {
	name: string;
	value: string | number;
}
// 产品储备情况
export function randerPie(pieRef: any): void {
	onMounted(async () => {
		const pieChart = echarts.init(pieRef.value);
		const { data, code }: any = await productDistribution();
		if (code === 0) {
			pieChart.setOption({
				// backgroundColor: '#2c343c',
				tooltip: {
					trigger: 'item',
					formatter: '{a} <br/>{b} : {c} ({d}%)',
				},
				series: [
					{
						name: '产品储备',
						type: 'pie',
						radius: [30, 100],
						roseType: 'area',
						itemStyle: {
							borderRadius: 5,
						},
						data: data,
					},
				],
			});
		}
	});
}
interface echartsInf {
	name: string;
	value: string;
}
// 产品价格分布
export function randerBar(barRef: any): void {
	onMounted(async () => {
		const barChart = echarts.init(barRef.value);
		const { data, code }: any = await priceDistribution();
		if (code === 0) {
			const keys: Array<string> = [];
			const values: Array<string> = [];
			data.forEach((item: echartsInf) => {
				keys.push(item.name);
				values.push(item.value);
			});
			barChart.setOption({
				xAxis: {
					type: 'category',
					data: keys,
				},
				yAxis: {
					type: 'value',
				},
				series: [
					{
						data: values,
						type: 'bar',
						showBackground: true,
						backgroundStyle: {
							color: 'rgba(180, 180, 180, 0.2)',
						},
					},
				],
			});
		}
	});
}

// 数量-价格分布
export function randerTree(treeRef: any): void {
	onMounted(async () => {
		const treeChart = echarts.init(treeRef.value);
		const { data, code }: any = await numPriceDistribution();
		if (code === 0) {
			treeChart.setOption({
				xAxis: {},
				yAxis: {},
				series: [
					{
						symbolSize: 20,
						data: data,
						type: 'scatter',
					},
				],
			});
		}
	});
}
// 价格指数
export function randerGauge(gaugeRef: any): void {
	onMounted(async () => {
		//感叹号非空断言
		const gaugeChart = echarts.init(gaugeRef.value);
		const { data, code }: any = await avgPrice();
		if (code === 0) {
			gaugeChart.setOption({
				series: [
					{
						type: 'gauge',
						startAngle: 180,
						endAngle: 0,
						min: 0,
						max: 1000,
						center: ['50%', '65%'],
						splitNumber: 8,
						axisLine: {
							lineStyle: {
								width: 6,
								color: [
									[0.25, '#FF6E76'],
									[0.5, '#FDDD60'],
									[0.75, '#58D9F9'],
									[1, '#7CFFB2'],
								],
							},
						},
						pointer: {
							icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
							length: '12%',
							width: 20,
							offsetCenter: [0, '-60%'],
							itemStyle: {
								color: '#7d5fff',
							},
						},
						axisTick: {
							length: 12,
							lineStyle: {
								color: 'inherit',
								width: 2,
							},
						},
						splitLine: {
							length: 20,
							lineStyle: {
								color: 'inherit',
								width: 2,
							},
						},
						axisLabel: {
							color: '#464646',
							fontSize: 12,
							distance: -60,
							formatter: function (value: number) {
								if (value === 875) {
									return '较高';
								} else if (value === 625) {
									return '中';
								} else if (value === 375) {
									return '良好';
								} else if (value === 125) {
									return '低廉';
								}
							},
						},
						title: {
							offsetCenter: [0, '70%'],
							fontSize: 20,
						},
						detail: {
							fontSize: 20,
							// offsetCenter: [0, '0%'],
							valueAnimation: true,
							formatter: function (value: number) {
								return value + ' 元/件';
							},
							color: 'inherit',
						},
						data: [data],
					},
				],
			});
		}
	});
}
