/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年04月07日 21:37:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021年04月08日
 */
import { createApp } from 'vue'
import App from './App.vue'

import router from "./router";
import { store, key } from "./vuex";
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App);
// 注册相应模块
app.use(ElementPlus)
app.use(store, key)
app.use(router)
app.mount('#app')

// 注册组件
// app.component(ElButton.name, ElButton)