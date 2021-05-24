<!--
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年04月07日 21:55:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021年05月24日
-->
<template>
  <div class="not-found">
    <div class="text">
      <span class="animate404">4</span>
      <span class="animate404">0</span>
      <span class="animate404">4</span>
    </div>
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
  setup() { },
});
</script>
<style scoped>
.not-found {
  background: url("../assets/img/404.jpg") no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 900px;
  width: 1650px;
  margin: 0 auto;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
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
@keyframes ani {
  25% {
    margin-top: 50px;
  }
  50% {
    font-size: 250px;
    margin: 50px;
  }
  100% {
    margin-top: 50px;
  }
}
.animate404 {
  animation: ani 3s infinite alternate;
}
</style>
