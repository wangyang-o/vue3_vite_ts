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
                @keyup.enter="searchproductName"
                @clear="searchproductName"
                size="small"
                v-model="productName"
                placeholder="货物名称"
              ></el-input>
            </el-col>
            <el-col :span="17">
              <el-button
                type="primary"
                size="small"
                @click="searchproductName"
                icon="el-icon-search"
              >搜索</el-button>
            </el-col>
            <!-- <el-col :span="2">
              <el-button
                size="small"
                type="warning"
                @click="addOrUpdate('add')"
                icon="el-icon-circle-plus"
              >添加货物</el-button>
            </el-col>-->
          </el-row>
        </el-form>
      </template>
    </el-skeleton>
  </el-card>
  <!-- 表格 -->
  <el-card class="m-1">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <img class="carousel-img" src="@/assets/img/404.jpg" />
      </el-carousel-item>
    </el-carousel>
    <el-table size="small" :data="tableData" style="width: 100%" empty-text="没有数据了...">
      <el-table-column align="center" type="index" :index="indexMethod" label="序号"></el-table-column>
      <el-table-column align="center" prop="productName" label="商品名称"></el-table-column>
      <el-table-column align="center" prop="productClass" label="存货量"></el-table-column>
      <el-table-column align="center" prop="priceCode" label="商品价格（元）"></el-table-column>
      <el-table-column align="center" prop="createTime" label="创建时间"></el-table-column>
      <el-table-column align="center" prop="createUser" label="创建人"></el-table-column>
      <el-table-column align="center" prop="updateTime" label="更新时间"></el-table-column>
      <el-table-column align="center" prop="updateUser" label="更新人"></el-table-column>
      <!-- <el-table-column align="center" label="操作">
        <template #default="scope">
          <el-button size="mini" @click="handleEdit(scope.row.id)">编辑</el-button>
          <el-popconfirm
            confirmButtonText="确定"
            cancelButtonText="点错了"
            icon="el-icon-info"
            iconColor="red"
            :title="'确定删除 ' + scope.row.productName + ' 的所有信息吗？'"
            trigger="click"
            @confirm="handleDelete(scope.row.id)"
          >
            <template #reference>
              <el-button size="mini" type="danger">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>-->
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
  <!-- 添加 -->
  <el-drawer
    :title="addOrUpdateFlag === 'add' ? '添加货物' : '修改货物'"
    :before-close="handleDrawerClose"
    v-model="drawerIsOpen"
    direction="rtl"
  >
    <div class="mx-5">
      <el-form
        ref="drawerFormRef"
        :model="drawerForm"
        status-icon
        label-position="top"
        :rules="rules"
      >
        <el-form-item label="姓名:" prop="productName">
          <el-input v-model="drawerForm.productName" autocomplete="off" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="年龄:" prop="age">
          <el-input v-model="drawerForm.age" autocomplete="off" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="电话:" prop="iphone">
          <el-input v-model="drawerForm.iphone" autocomplete="off" placeholder="请输入电话"></el-input>
        </el-form-item>
        <el-form-item label="性别:" prop="sex">
          <el-select v-model="drawerForm.sex" clearable style="width:100%" placeholder="请选择年龄">
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
import { getProductList, deleteProduct, putProduct, getInstanceById } from '@/api/product';
import { ElNotification } from 'element-plus';
interface queryParamsInf {
  productName: string;
  size: number;
  current: number;
  field: string;
}
export default defineComponent({
  name: 'productList',
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
      productName: '',
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
    const productList = async () => {
      const { data }: any = await getProductList(queryParams);
      tableData.value = data.list;
      count.value = data.total;
    }
    // 编辑功能
    const handleEdit = async (productId: string) => {
      addOrUpdate('edit');
      const { code, data }: any = await getInstanceById(productId);
      if (code === 0) {
        drawerForm.value = data;
      }
    }
    // 删除功能
    const handleDelete = async (productId: number) => {
      const { code, msg }: any = await deleteProduct({ ids: productId });
      if (code === 0) {
        searchproductName()
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
    // 根据姓名搜索
    const searchproductName = () => {
      queryParams.current = 1;
      pagingHidden.value = true;
      productList();
    }
    // 自定义table序号
    const indexMethod = (index: number) => {
      return (queryParams.current - 1) * queryParams.size + index + 1;
    }
    // 控制当前分页页码数
    const handleCurrentChange = (val: number) => {
      queryParams.current = val;
      productList();
    }
    // Drawer相关
    const drawerIsOpen = ref(false);
    // 添加还是修改
    const addOrUpdateFlag = ref('');
    const addOrUpdate = (flag: string) => {
      drawerIsOpen.value = !drawerIsOpen.value;
      addOrUpdateFlag.value = flag;
    }
    // Drawer表单节点
    const drawerFormRef = ref<HTMLElement | null>(null);
    // Drawer表单数据
    const drawerForm = ref({ productName: '', sex: '', age: '', iphone: '' });
    // 验证规则
    const rules = {
      productName: [
        { required: true, message: "请输入货物姓名", trigger: "blur" },
        {
          min: 2,
          max: 30,
          message: "长度在 3 到 30 个字符",
          trigger: "blur",
        },
      ],
      sex: { required: true, message: "请选择性别", trigger: "blur" },
      age: { required: true, message: "请输入年龄", trigger: "blur" },
      iphone: { max: 20, required: true, message: "请输入电话", trigger: "blur" },

    }
    // 关闭drawer
    const handleDrawerClose = () => {
      (drawerFormRef.value as any).resetFields();
      loading.value = false;
      drawerIsOpen.value = false;
      delete (drawerForm.value as any).id;
    }
    const submitDrawer = () => {
      (drawerFormRef.value as any).validate(async (valid: boolean) => {
        if (!valid) return;
        loading.value = true;
        if (addOrUpdateFlag.value === 'add') {
          const { code, msg }: any = await putProduct(drawerForm.value);
          if (code === 0) {
            handleDrawerClose();
            searchproductName();
            ElNotification({
              type: 'success',
              message: msg,
              duration: 1000, position: 'bottom-right'
            });
          } else {
            ElNotification({
              type: 'error',
              message: msg,
              duration: 1000, position: 'bottom-right'
            });
          }
        } else {

          const { code, msg }: any = await putProduct(drawerForm.value);
          console.log('edit');
          if (code === 0) {
            handleDrawerClose();
            searchproductName();
            ElNotification({
              type: 'success',
              message: msg,
              duration: 1000, position: 'bottom-right'
            });
          } else {
            ElNotification({
              type: 'error',
              message: msg,
              duration: 1000, position: 'bottom-right'
            });
          }
        }


      })

    }
    // 初始化table
    productList();
    return {
      animateFlag, ...toRefs(queryParams), tableData, count, loading,
      searchproductName, pagingHidden,
      drawerForm, handleDrawerClose, drawerIsOpen, submitDrawer, rules, drawerFormRef,
      addOrUpdate, addOrUpdateFlag,
      handleEdit, handleDelete, handleCurrentChange, indexMethod
    };
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
