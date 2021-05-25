/*
 * @Descripttion:
 * @Author: wy
 * @Date: 2021年04月25日
 * @LastEditTime: 2021年05月25日
 */
import * as echarts from 'echarts/core';

import {
	BarChart,
	LineChart,
	PieChart,
	MapChart,
	PictorialBarChart,
	RadarChart,
	TreeChart,
	GaugeChart,
	ScatterChart,
} from 'echarts/charts';

import {
	TitleComponent,
	TooltipComponent,
	GridComponent,
	PolarComponent,
	AriaComponent,
	ParallelComponent,
	LegendComponent,
	RadarComponent,
} from 'echarts/components';

import { SVGRenderer } from 'echarts/renderers';

echarts.use([
	LegendComponent,
	TitleComponent,
	TooltipComponent,
	GridComponent,
	PolarComponent,
	AriaComponent,
	ParallelComponent,
	BarChart,
	LineChart,
	PieChart,
	MapChart,
	RadarChart,
	SVGRenderer,
	PictorialBarChart,
	RadarComponent,
	TreeChart,
	GaugeChart,
	ScatterChart,
]);

export default echarts;
