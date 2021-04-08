<!--
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年04月08日 10:52:45
 * @LastEditors: wy
 * @LastEditTime: 2021年04月08日 16:05:00
-->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年04月07日 21:55:46
 * @LastEditors: wy
 * @LastEditTime: 2021年04月07日 22:04:05
-->
<template>
  <div class="not-found">
    <div class="text">404</div>
    <div class="warning">没有找到该页面哦，亲！</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "404",
  data(): { msg: string } {
    return {
      msg: "404",
    };
  },
  setup() {},
});
</script>
<style scoped>
.not-found {
  background: url("../assets/img/404.jpg") no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}
.not-found:after {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  background-color: black;
  opacity: 0.1;
  z-index: 1;
  width: 100%;
  height: 100%;
}
.text {
  color: #ecf0f1;
  font-size: 200px;
}
.warning {
  color: #95a5a6;
  font-size: 30px;
}
</style>
