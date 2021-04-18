<!--
 * @Author: wy
 * @Date: 2021年04月07日 21:37:16
 * @LastEditTime: 2021年04月18日
-->
<template>
 
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    return { count };
  },
});
</script>

<style scoped>
</style>
