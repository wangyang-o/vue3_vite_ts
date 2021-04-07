<!--
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年04月07日 21:55:46
 * @LastEditors: wy
 * @LastEditTime: 2021年04月07日 22:04:05
-->
<template>
  <h1>{{ msg }}</h1>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "About",
  data(): { msg: string } {
    return {
      msg: "About Page",
    };
  },
  setup() {},
});
</script>
