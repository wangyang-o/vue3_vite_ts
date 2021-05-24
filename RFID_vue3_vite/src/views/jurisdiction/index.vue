<!--
 * @Descripttion: 
 * @Author: wy
 * @Date: 2021年04月22日
 * @LastEditTime: 2021年05月24日
-->

<template>
  <!-- 查询条件，添加 -->
  <el-card class="m-1">
    <el-skeleton :rows="0" animated :loading="animateFlag">
      <template #default>
        <el-form @submit.native.prevent :inline="true">
          <el-row type="flex">
            <el-col :span="5">
              <el-input
                clearable
                @keyup.enter="searchDescirption"
                @clear="searchDescirption"
                size="small"
                v-model="descirption"
                placeholder="权限描述"
              ></el-input>
            </el-col>
            <el-col :span="17">
              <el-button
                type="primary"
                size="small"
                @click="searchDescirption"
                icon="el-icon-search"
              >搜索</el-button>
            </el-col>
          </el-row>
        </el-form>
      </template>
    </el-skeleton>
  </el-card>
  <!-- 表格 -->
  <el-card class="m-1">
    <el-table size="small" :data="tableData" style="width: 100%" empty-text="没有数据了...">
      <el-table-column align="center" type="index" :index="indexMethod" label="序号"></el-table-column>
      <el-table-column align="center" prop="id" label="权限ID"></el-table-column>
      <el-table-column align="center" prop="permissionName" label="权限名称"></el-table-column>
      <el-table-column align="center" prop="descirption" label="权限描述"></el-table-column>
      <el-table-column align="center" prop="createTime" label="创建时间"></el-table-column>
      <el-table-column align="center" prop="updateTime" label="更新时间"></el-table-column>
    </el-table>
    <el-pagination
      v-if="pagingHidden"
      @current-change="handleCurrentChange"
      :page-size="size"
      :current-page="current"
      background
      layout="prev, pager, next"
      :total="count"
      class="m-1"
      style="text-align: center;"
    ></el-pagination>
  </el-card>
</template>
<script lang="ts">
import { ref, defineComponent, toRefs, reactive, onMounted } from 'vue';
import { getPermissionList, getInstanceById } from '@/api/permission';
import { ElNotification } from 'element-plus';
interface queryParamsInf {
  descirption: string;
  size: number;
  current: number;
  field: string;
}
export default defineComponent({
  name: 'permissionList',
  props: {},
  setup: () => {
    // 骨架图动画
    const animateFlag = ref(true);
    setTimeout(() => {
      animateFlag.value = false;
    }, 500);
    // 加载按钮开关
    const loading = ref(false);
    // 查询参数
    const queryParams = reactive<queryParamsInf>({
      descirption: '',
      current: 1,
      size: 10,
      field: 'createTime',
    });
    // 列表数据
    const tableData = ref([]);
    // 列表数据总个数total
    const count = ref(0);
    // 分页组件是否显示
    const pagingHidden = ref(true);
    // 获取列表数据
    const permissionList = async () => {
      const { data }: any = await getPermissionList(queryParams);
      tableData.value = data.records;
      count.value = data.total;
    }

    // 根据姓名搜索
    const searchDescirption = () => {
      queryParams.current = 1;
      pagingHidden.value = true;
      permissionList();
    }
    // 自定义table序号
    const indexMethod = (index: number) => {
      return (queryParams.current - 1) * queryParams.size + index + 1;
    }
    // 控制当前分页页码数
    const handleCurrentChange = (val: number) => {
      queryParams.current = val;
      permissionList();
    }


    // 初始化table
    permissionList();
    return {
      animateFlag, ...toRefs(queryParams), tableData, count, loading,
      searchDescirption, pagingHidden,
      handleCurrentChange, indexMethod
    };
  },
});
</script>

<style scoped></style>
