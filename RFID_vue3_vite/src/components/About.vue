<!--
 * @Author: wy
 * @Date: 2021年04月07日 
 * @LastEditors: wy
 * @LastEditTime: 2021年04月08日
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
