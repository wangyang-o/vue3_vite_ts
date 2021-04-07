/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年04月07日 21:37:16
 * @LastEditors: wy
 * @LastEditTime: 2021年04月07日 22:23:17
 */
import { createApp } from 'vue'
import App from './App.vue'

import router from "./router";
import { store } from "./vuex";

// 链式调用
createApp(App).use(store).use(router).mount('#app')
