<!--
 * @Descripttion: 
 * @Author: wy
 * @Date: 2021年04月22日
 * @LastEditTime: 2021年04月28日
-->

<template>
  <!-- 查询条件，添加用户 -->
  <el-card class="m-1">
    <el-skeleton :rows="0" animated :loading="animateFlag">
      <template #default>
        <el-form :inline="true" :model="userQueryParams">
          <el-row type="flex">
            <el-col :span="5">
              <el-input size="small" v-model="userQueryParams.userName" placeholder="用户名称"></el-input>
            </el-col>
            <el-col :span="17">
              <el-button type="primary" size="small" icon="el-icon-search">搜索</el-button>
            </el-col>
            <el-col :span="2">
              <el-button size="small" type="warning" icon="el-icon-circle-plus">添加用户</el-button>
            </el-col>
          </el-row>
        </el-form>
      </template>
    </el-skeleton>
  </el-card>
  <!-- 用户表格 -->
  <el-card class="m-1">
    <el-table :data="userData" style="width: 100%">
      <el-table-column prop="userName" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column prop="gender" label="性别"></el-table-column>
      <el-table-column prop="role" label="角色"></el-table-column>
    </el-table>
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
  name: 'StockList',
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

<style scoped></style>
