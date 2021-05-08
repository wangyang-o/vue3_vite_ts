<!--
 * @Descripttion: 
 * @Author: wy
 * @Date: 2021年04月22日
 * @LastEditTime: 2021年05月08日
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
              <el-button
                size="small"
                type="warning"
                @click="addOrUpdate('add')"
                icon="el-icon-circle-plus"
              >添加用户</el-button>
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
          <el-button size="mini" @click="handleEdit(scope.row.userId)">编辑</el-button>
          <el-popconfirm
            confirmButtonText="确定"
            cancelButtonText="点错了"
            icon="el-icon-info"
            iconColor="red"
            :title="'确定删除 ' + scope.row.userName + ' 的所有信息吗？'"
            trigger="click"
            @confirm="handleDelete(scope.row.userId)"
          >
            <template #reference>
              <el-button size="mini" type="danger">删除</el-button>
            </template>
          </el-popconfirm>
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
  <!-- 添加 -->
  <el-drawer title="添加用户" :before-close="handleDrawerClose" v-model="drawerIsOpen" direction="rtl">
    <div class="mx-5">
      <el-form
        ref="drawerFormRef"
        :model="drawerForm"
        status-icon
        label-position="top"
        :rules="rules"
      >
        <el-form-item label="姓名:" prop="userName">
          <el-input v-model="drawerForm.userName" autocomplete="off" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="年龄:" prop="userAge">
          <el-input v-model="drawerForm.userAge" autocomplete="off" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="电话:" prop="userPhone">
          <el-input v-model="drawerForm.userPhone" autocomplete="off" placeholder="请输入电话"></el-input>
        </el-form-item>
        <el-form-item label="性别:" prop="userSex">
          <el-select v-model="drawerForm.userSex" clearable style="width:100%" placeholder="请选择年龄">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-row :gutter="10">
        <el-col :span="12">
          <el-button style="width:100%" @click="handleDrawerClose">取 消</el-button>
        </el-col>
        <el-col :span="12">
          <el-button
            style="width:100%"
            type="primary"
            @click="submitDrawer()"
            :loading="loading"
          >{{ loading ? '提交中 ...' : '确 定' }}</el-button>
        </el-col>
      </el-row>
    </div>
  </el-drawer>
</template>

<script lang="ts">
import { ref, defineComponent, toRefs, reactive, onMounted } from 'vue';
import { getUserList, fuzzySearch, addUser, updateUser, deleteUser, getUserById } from '@/api/users';
import { ElNotification } from 'element-plus';
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
    const loading = ref(false);
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
    const updateUserInfo = ref({
    })
    const handleEdit = async (userId: number) => {

      addOrUpdate('edit');
      const { code, data }: any = await getUserById({ userId });
      drawerForm.value = data;
      console.log(drawerForm.value);

    }
    const handleDelete = async (userId: number) => {
      console.log(userId);
      const { code, msg }: any = await deleteUser({ userId });
      if (code === 200) {
        searchUserName()
        ElNotification({
          title: '提示',
          type: 'success',
          message: msg,
          duration: 1000,
        });
      } else {
        ElNotification({
          title: '错误',
          type: 'error',
          message: msg,
          duration: 1000,
        });
      }
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
    // Drawer相关
    const drawerIsOpen = ref(false);
    const addOrUpdateFlag = ref('');
    const drawerFormRef = ref<HTMLElement | null>(null);
    const drawerForm = ref({ userName: '', userSex: '', userAge: '', userPhone: '' });
    const rules = {
      userName: [
        { required: true, message: "请输入用户姓名", trigger: "blur" },
        {
          min: 2,
          max: 30,
          message: "长度在 3 到 30 个字符",
          trigger: "blur",
        },
      ],
      userSex: { required: true, message: "请选择性别", trigger: "blur" },
      userAge: { required: true, message: "请输入年龄", trigger: "blur" },
      userPhone: { max: 20, required: true, message: "请输入电话", trigger: "blur" },

    }
    const handleDrawerClose = () => {
      (drawerFormRef.value as any).resetFields();
      loading.value = false;
      drawerIsOpen.value = false;

    }
    const addOrUpdate = (flag: string) => {
      drawerIsOpen.value = !drawerIsOpen.value;
      addOrUpdateFlag.value = flag;
    }
    const submitDrawer = () => {
      (drawerFormRef.value as any).validate(async (valid: boolean) => {
        if (!valid) return;
        loading.value = true;
        if (addOrUpdateFlag.value === 'add') {
          const { code, msg }: any = await addUser(drawerForm.value);
          if (code === 200) {
            (drawerFormRef.value as any).resetFields();
            loading.value = false;
            drawerIsOpen.value = false;
            searchUserName();
            ElNotification({
              type: 'success',
              message: msg,
              duration: 1000,
            });
          } else {
            ElNotification({
              type: 'error',
              message: msg,
              duration: 1000,
            });
          }
        } else {
          const { code, msg }: any = await updateUser(drawerForm.value);
          if (code === 200) {
            (drawerFormRef.value as any).resetFields();
            loading.value = false;
            drawerIsOpen.value = false;
            searchUserName();
            ElNotification({
              type: 'success',
              message: msg,
              duration: 1000,
            });
          } else {
            ElNotification({
              type: 'error',
              message: msg,
              duration: 1000,
            });
          }
        }


      })

    }
    // 
    userList();
    setTimeout(() => {
      animateFlag.value = false;
    }, 500);
    return {
      animateFlag, ...toRefs(queryParams), userData, count, loading,
      searchUserName, searchByKeyword, keyword, pagingHidden,
      drawerForm, handleDrawerClose, drawerIsOpen, submitDrawer, rules, drawerFormRef,
      addOrUpdate,
      handleEdit, handleDelete, handleCurrentChange, indexMethod
    };
  },
});
</script>

<style scoped></style>
