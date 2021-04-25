/*
 * @Descripttion:
 * @version:
 * @Author: wy
 * @Date: 2021年04月07日 21:37:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021年04月25日
 */
import { createApp } from 'vue';
import App from './App.vue';

import router from './router';
import { store, key } from './vuex';
import ElementPlus from 'element-plus';
// 样式
import 'element-plus/lib/theme-chalk/index.css';
import 'animate.css/animate.min.css';
// 自定义通用样式
import '@/assets/css/common.css'; // 通用 css

const app = createApp(App);
// 注册相应模块
app.use(ElementPlus);
app.use(store, key);
app.use(router);
app.mount('#app');

// 全局注册组件（也可以使用局部注册）
// app.component(ElButton.name, ElButton)
// app.component('v-chart', ECharts);
