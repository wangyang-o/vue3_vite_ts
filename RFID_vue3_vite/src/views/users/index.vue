<!--
 * @Descripttion: 
 * @Author: wy
 * @Date: 2021年04月22日
 * @LastEditTime: 2021年04月22日
-->
<!--
 * @Author: wy
 * @Date: 2021年04月07日 21:37:16
 * @LastEditTime: 2021年04月21日
-->
<template>
  users
</template>
    
    <script lang="ts">
import { ref, defineComponent } from 'vue';
export default defineComponent({
  name: 'Users',
  props: {},
  setup: () => {
    const count = ref(0);
    return { count };
  },
});
</script>
    
    <style scoped>
</style>
    