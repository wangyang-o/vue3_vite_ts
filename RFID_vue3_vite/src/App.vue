<!--
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年04月07日 21:37:16
 * @LastEditors: wy
 * @LastEditTime: 2021年04月07日 22:07:06
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>