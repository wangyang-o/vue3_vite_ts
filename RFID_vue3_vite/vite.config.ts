/*
 * @Descripttion:
 * @version:
 * @Author: wy
 * @Date: 2021年04月07日 21:37:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021年05月24日
 */
import { defineConfig } from 'vite';
// Vue 3 单文件组件支持
import vue from '@vitejs/plugin-vue';
// 导入路径模块
import { resolve } from 'path';

// https://vitejs.dev/config/
// https://cn.vitejs.dev/config/ 中文配置地址
export default defineConfig({
	root: process.cwd(),
	resolve: {
		alias: {
			// 路径别名
			'@': resolve(__dirname, 'src'),
			// '/@components/': path.resolve(__dirname, './src/components')
		},
	},

	// 服务
	server: {
		// 自动打开
		open: true,
		// 自己设置端口，和后端无关
		port: 80,
		// 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
		strictPort: true,
		proxy: {
			'/api': {
				target: `http://localhost:18080`,
				// changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
	build: {
		// 设置最终构建的浏览器兼容目标
		target: 'es2015',

		terserOptions: {
			// 压缩
			compress: {
				// https://terser.org/docs/api-reference#compress-options
				// Pass true to prevent Infinity from being compressed into 1/0, which may cause performance issues on Chrome.
				keep_infinity: true,
				// Used to delete console in production environment
				drop_console: true,
			},
		},
		// Turning off brotliSize display can slightly reduce packaging time
		// 关闭brotliSize显示可以稍微缩短打包时间
		brotliSize: false,
		// 超过多少警告
		chunkSizeWarningLimit: 1500,
	},
	// 插件
	plugins: [vue()],
});
