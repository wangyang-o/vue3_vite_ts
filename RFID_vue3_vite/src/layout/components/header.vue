<!--
 * @Descripttion: 
 * @Author: wy
 * @Date: 2021年04月21日
 * @LastEditTime: 2021年04月24日
-->
<template>
  <div class="header-container">
    <div class="header-info_personal">
      <i class="el-icon-back" @click="goBack">返回</i>

    </div>
    <div class="header-info_new">
      <i class="el-icon-full-screen mx-1" @click="goBack"></i>
      <i class="el-icon-refresh  mx-1" @click="goBack"></i>
      <div class="header-img_container  mx-1">
        <img src="@/assets/img/littlecun.jpg" class="mr-1">
        <span>天行</span>
      </div>
      <i class="el-icon-s-tools mx-1" @click="goBack"></i>

    </div>
  </div>
</template>
    
    <script lang="ts">
import { ref, defineComponent } from 'vue';
export default defineComponent({
  name: 'Header',
  props: {},
  setup: () => {
    const goBack = () => {
      console.log('goback');
    };
    return { goBack };
  },
});
</script>
    
<style scoped>
.header-container {
  display: flex;
  background-color: #fff;
  align-items: center;
  padding: 5px;
  justify-content: space-between;
}

.header-info_personal {
  display: flex;
}
.header-info_new {
  display: flex;
  align-items: center;
}
.header-info_new > i:hover {
  background-color: #efefef;
  cursor: pointer;
}
.el-icon-back {
  cursor: pointer;
  font-size: 20px;
}
.header-img_container {
  display: flex;
  cursor: pointer;
  align-items: center;
}
.header-img_container:hover {
  background-color: #efefef;
}
.header-img_container > img {
  width: 30px;
  height: 30px;
  border: 1px solid #dfe6e9;
  border-radius: 50%;
}
.header-img_container > span {
  font-size: 19px;
}
</style>
    