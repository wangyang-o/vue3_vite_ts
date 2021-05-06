/*
 * @Descripttion:
 * @Author: wy
 * @Date: 2021年05月05日
 * @LastEditTime: 2021年05月05日
 */
import { ref, onMounted } from 'vue';
import echarts from '@/utils/echarts';
interface echartsData {
	name: string;
	value: string | number;
}
interface treeData {
	name: string;
	children: Object[];
}

const data1 = [
	{ value: 30, name: 'rose 1' },
	{ value: 28, name: 'rose 2' },
	{ value: 26, name: 'rose 3' },
	{ value: 50, name: 'rose 4' },
	{ value: 22, name: 'rose 5' },
	{ value: 40, name: 'rose 6' },
	{ value: 28, name: 'rose 7' },
	{ value: 16, name: 'rose 8' },
];
export function randerPie(pieRef: any, data: echartsData[] = data1): void {
	onMounted(() => {
		const pieChart = echarts.init(pieRef.value);
		pieChart.setOption({
			// backgroundColor: '#2c343c',
			tooltip: {
				trigger: 'item',
				formatter: '{a} <br/>{b} : {c} ({d}%)',
			},
			series: [
				{
					name: '面积模式',
					type: 'pie',
					radius: [20, 130],
					roseType: 'area',
					itemStyle: {
						borderRadius: 5,
					},
					data: data,
				},
			],
		});
	});
}
// ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
// [120, 200, 150, 80, 70, 110, 130]
const data2 = {
	Mon: 120,
	Tue: 200,
	Wed: 150,
	Thu: 80,
	Fri: 70,
	Sat: 110,
	Sun: 130,
};

export function randerBar(barRef: any, data: Object = data2): void {
	onMounted(() => {
		const barChart = echarts.init(barRef.value);

		barChart.setOption({
			xAxis: {
				type: 'category',
				data: Object.keys(data),
			},
			yAxis: {
				type: 'value',
			},
			series: [
				{
					data: Object.values(data),
					type: 'bar',
					showBackground: true,
					backgroundStyle: {
						color: 'rgba(180, 180, 180, 0.2)',
					},
				},
			],
		});
	});
}
const data3 = {
	name: 'flare',
	children: [
		{
			name: 'flex',
			children: [{ name: 'FlareVis', value: 4116 }],
		},
		{
			name: 'scale',
			children: [
				{ name: 'IScaleMap', value: 2105 },
				{ name: 'LinearScale', value: 1316 },
				{ name: 'LogScale', value: 3151 },
				{ name: 'OrdinalScale', value: 3770 },
			],
		},
		{
			name: 'display',
			children: [{ name: 'DirtySprite', value: 8833 }],
		},
	],
};
export function randerTree(treeRef: any, data: treeData = data3): void {
	onMounted(() => {
		const treeChart = echarts.init(treeRef.value);
		treeChart.setOption({
			series: {
				type: 'tree',
				name: 'tree2',
				data: [data],

				symbolSize: 7,

				label: {
					position: 'left',
					verticalAlign: 'middle',
					align: 'right',
				},

				leaves: {
					label: {
						position: 'right',
						verticalAlign: 'middle',
						align: 'left',
					},
				},

				expandAndCollapse: true,

				emphasis: {
					focus: 'descendant',
				},

				animationDuration: 550,
				animationDurationUpdate: 750,
			},
		});
	});
}
const data4 = [
	{
		value: 0.89,
		name: '平均评价',
	},
];
export function randerGauge(gaugeRef: any, data: echartsData[] = data4): void {
	onMounted(() => {
		//感叹号非空断言
		const gaugeChart = echarts.init(gaugeRef.value);
		gaugeChart.setOption({
			series: [
				{
					type: 'gauge',
					startAngle: 180,
					endAngle: 0,
					min: 0,
					max: 1,
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
						fontSize: 20,
						distance: -60,
						formatter: function (value: number) {
							if (value === 0.875) {
								return '优';
							} else if (value === 0.625) {
								return '中';
							} else if (value === 0.375) {
								return '良';
							} else if (value === 0.125) {
								return '差';
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
							return Math.round(value * 100) + '分';
						},
						color: 'inherit',
					},
					data: data,
				},
			],
		});
	});
}
