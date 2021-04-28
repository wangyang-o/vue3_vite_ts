<!--
 * @Descripttion: 
 * @Author: wy
 * @Date: 2021年04月22日
 * @LastEditTime: 2021年04月28日
-->
<template>
  <!-- 查询条件，添加用户 -->
  <el-card class="m-1">
    <!-- <el-skeleton :rows="0" animated :loading="animateFlag">
      <template #default></template>
    </el-skeleton>-->
    <el-form :inline="true" :model="userQueryParams">
      <el-row type="flex">
        <el-col :span="5">
          <el-input size="small" v-model="userQueryParams.userName" placeholder="用户名称"></el-input>
        </el-col>
        <el-col :span="16">
          <el-button type="primary" size="small" icon="el-icon-search">搜索</el-button>
        </el-col>
        <el-col :span="3">
          <el-button size="small" type="warning" icon="el-icon-circle-plus">添加用户</el-button>
        </el-col>
      </el-row>
    </el-form>
  </el-card>
  <!-- 产品列表 -->
  <el-card class="m-1">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <img class="carousel-img" src="@/assets/img/404.jpg" />
      </el-carousel-item>
    </el-carousel>

    <el-row type="flex" justify="center">
      <el-col :span="19">
        <el-space wrap v-for="(o, index) in 5" :key="o">
          <el-card
            class="animate__animated"
            :class="{ animate__slideInLeft: o < 3, animate__slideInRight: o > 3 }"
            :body-style="{ padding: '0px' }"
          >
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom">
                <time class="time">这是产品</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-space>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="6">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </el-col>
    </el-row>
  </el-card>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from 'vue';

interface userQueryParamsInf {
  userName: string;
}
interface userDataInf {
  userName: string;
  phone: string;
  age: number;
  gender: string;
  role: string;
}
export default defineComponent({
  name: 'ProductList',
  props: {},
  setup: () => {
    const animateFlag = ref(true);
    const userQueryParams = reactive<userQueryParamsInf>({
      userName: '',
    });
    const userData = reactive<userDataInf[]>([{
      userName: 'wy',
      phone: '185262728',
      age: 18,
      gender: 'man',
      role: 'superAdmin',
    }, {
      userName: 'wy',
      phone: '185262728',
      age: 18,
      gender: 'man',
      role: 'superAdmin',
    }, {
      userName: 'wy',
      phone: '185262728',
      age: 18,
      gender: 'man',
      role: 'superAdmin',
    }])
    setTimeout(() => {
      animateFlag.value = false;
    }, 500);
    return { animateFlag, userQueryParams, userData };
  },
});
</script>

<style scoped>
.carousel-img {
  background-size: cover;
  height: 100%;
  width: 100%;
}
</style>
