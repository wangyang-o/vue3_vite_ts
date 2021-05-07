<!--
 * @Descripttion: 
 * @Author: wy
 * @Date: 2021年04月22日
 * @LastEditTime: 2021年05月07日
-->

<template>
  <!-- 查询条件，添加用户 -->
  <el-card class="m-1">
    <el-skeleton :rows="0" animated :loading="animateFlag">
      <template #default>
        <el-form @submit.native.prevent :inline="true">
          <el-row type="flex">
            <el-col :span="5">
              <el-input
                clearable
                @keyup.enter="searchUserName"
                @clear="searchUserName"
                size="small"
                v-model="userName"
                placeholder="用户名称"
              ></el-input>
            </el-col>
            <el-col :span="17">
              <el-button
                type="primary"
                size="small"
                @click="searchUserName"
                icon="el-icon-search"
              >搜索</el-button>
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
    <el-table size="small" :data="userData" style="width: 100%" empty-text="没有数据了...">
      <el-table-column type="index" :index="indexMethod" label="序号"></el-table-column>
      <el-table-column prop="userName" label="姓名"></el-table-column>
      <el-table-column prop="userPhone" label="电话"></el-table-column>
      <el-table-column prop="userSex" label="性别"></el-table-column>
      <el-table-column prop="createTime" label="创建时间"></el-table-column>
      <el-table-column prop="userAge" label="年龄（岁）"></el-table-column>
      <el-table-column align="right">
        <template #header>
          <el-input
            v-model="keyword"
            clearable
            @keyup.enter.native="searchByKeyword"
            @clear="searchUserName"
            size="mini"
            placeholder="输入关键字搜索"
          />
        </template>
        <template #default="scope">
          <el-button size="mini" @click="handleEdit(scope.$index)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row type="flex" justify="center">
      <el-col :span="6">
        <el-pagination
          v-if="pagingHidden"
          @current-change="handleCurrentChange"
          :page-size="pageSize"
          :current-page="pageNum"
          background
          layout="prev, pager, next"
          :total="count"
          class="m-1"
        ></el-pagination>
      </el-col>
    </el-row>
  </el-card>
</template>

<script lang="ts">
import { ref, defineComponent, toRefs, reactive, onMounted } from 'vue';
import { getUserList, fuzzySearch } from '@/api/users';
interface queryParamsInf {
  userName: string;
  pageSize: number;
  pageNum: number;
}
interface userDataInf {
  userName: string;
  userPhone: string;
  userAge: number;
  userSex: string;
  role: string;
}
export default defineComponent({
  name: 'userList',
  props: {},
  setup: () => {
    const animateFlag = ref(true);
    const queryParams = reactive<queryParamsInf>({
      userName: '',
      pageNum: 1,
      pageSize: 10,
    });
    const keyword = ref('');
    const userData = ref([]);
    const count = ref(0);
    const pagingHidden = ref(true);
    const userList = async () => {
      const { data, code }: any = await getUserList(queryParams);
      userData.value = data.data;
      count.value = data.count;
    }
    const handleEdit = (id: number) => {

    }
    const handleDelete = (id: number) => {

    }
    const searchUserName = () => {
      queryParams.pageNum = 1;
      pagingHidden.value = true;
      userList();
    }
    const searchByKeyword = async () => {
      pagingHidden.value = false;
      const { data, code }: any = await fuzzySearch({ keyword: keyword.value });
      userData.value = data.data;
    }
    // 自定义序号
    const indexMethod = (index: number) => {
      return (queryParams.pageNum - 1) * queryParams.pageSize + index + 1;
    }
    const handleCurrentChange = (val: number) => {
      queryParams.pageNum = val;
      userList();
    }

    userList();
    setTimeout(() => {
      animateFlag.value = false;
    }, 500);
    return {
      animateFlag, ...toRefs(queryParams), userData, count,
      searchUserName, searchByKeyword, keyword, pagingHidden,
      handleEdit, handleDelete, handleCurrentChange, indexMethod
    };
  },
});
</script>

<style scoped></style>
