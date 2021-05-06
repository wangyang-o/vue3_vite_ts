<!--
 * @Descripttion: 
 * @Author: wy
 * @Date: 2021年04月22日
 * @LastEditTime: 2021年04月29日
-->
<template>
  <!-- 查询条件，添加商品 -->
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
              <el-button
                size="small"
                type="warning"
                icon="el-icon-circle-plus"
                @click="drawerIsOpen = !drawerIsOpen"
              >添加商品</el-button>
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

  <el-drawer
    title="我嵌套了 Form !"
    :before-close="handleClose"
    v-model="drawerIsOpen"
    direction="rtl"
    custom-class="demo-drawer"
    ref="drawer"
  >
    <div class="demo-drawer__content">
      <el-form :model="drawerForm">
        <el-form-item label="活动名称">
          <el-input v-model="drawerForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="drawerForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="demo-drawer__footer">
        <el-button @click="cancelForm">取 消</el-button>
        <el-button
          type="primary"
          @click="closeDrawer()"
          :loading="loading"
        >{{ loading ? '提交中 ...' : '确 定' }}</el-button>
      </div>
    </div>
  </el-drawer>
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
  name: 'WarehousingInfo',
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


    const handleClose = () => {
      drawerIsOpen.value = false;
    };
    const drawerIsOpen = ref(false);
    // const drawerRef = ref<HTMLElement | null>(null);
    const loading = ref(false);
    const drawerForm = reactive({ name: '篮球', region: '重庆' });
    const cancelForm = () => {
      loading.value = false;
      drawerIsOpen.value = false;
      // clearTimeout(this.timer);
    }
    const closeDrawer = () => {
      drawerIsOpen.value = false;
    }

    return {
      animateFlag,
      userQueryParams, userData,
      handleClose, drawerIsOpen, drawerForm, loading, cancelForm, closeDrawer
    };
  },
});
</script>

<style scoped></style>
