<!--
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年04月07日 21:37:16
 * @LastEditors: wy
 * @LastEditTime: 2021年04月08日 13:33:15
-->
<template>
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
* {
  margin: 0;
  padding: 0;
}
</style>