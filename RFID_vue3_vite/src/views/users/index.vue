<!--
 * @Descripttion: 
 * @Author: wy
 * @Date: 2021年04月22日
 * @LastEditTime: 2021年04月26日
-->
<!--
 * @Author: wy
 * @Date: 2021年04月07日 21:37:16
 * @LastEditTime: 2021年04月21日
-->
<template>
  <el-card class="m-1">
    <el-skeleton :rows="5" animated :loading="animateFlag">
  <template #default>
    <div>
      1111
    </div>
  </template>
    </el-skeleton>
  </el-card>
</template>
    
    <script lang="ts">
import { ref, defineComponent } from 'vue';
import { animateFlag } from '@/utils/enterAnimation';

export default defineComponent({
  name: 'Users',
  props: {},
  setup: () => {
    const count = ref(0);
   
    return { animateFlag };
  },
});
</script>
    
    <style scoped>
</style>
    