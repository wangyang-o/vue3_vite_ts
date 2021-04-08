/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年04月07日 21:37:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021年04月08日
 */
import { defineConfig } from 'vite'
// Vue 3 单文件组件支持
import vue from '@vitejs/plugin-vue'
// 导入路径模块
import path from 'path';

// https://vitejs.dev/config/
// https://cn.vitejs.dev/config/ 中文配置地址
export default defineConfig({
  root: process.cwd(),
  resolve: {
    alias: {
      // 路径别名
      '@': path.resolve(__dirname, 'src')
      // '/@components/': path.resolve(__dirname, './src/components')
    }
  },

  // 服务代理
  server: {
    // 自动打开
    open: true,
    port: 3030,
    strictPort: true,
    // proxy: {
    //   '/au': {
    //     target: `http://localhost:3030`,
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/au/, '')
    //   }
    // }
  },
  // 插件
  plugins: [vue()]
})
