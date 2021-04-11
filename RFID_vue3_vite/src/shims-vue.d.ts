/*
 * @Descripttion: 
 * @Author: wy
 * @Date: 2021年04月07日
 * @LastEditTime: 2021年04月11日
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

