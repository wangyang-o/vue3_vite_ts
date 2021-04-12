<!--
 * @Descripttion: 
 * @Author: wy
 * @Date: 2021年04月07日 21:37:16
 * @LastEditTime: 2021年04月12日
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