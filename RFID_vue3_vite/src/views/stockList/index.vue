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
          </el-row>
        </el-form>
      </template>
    </el-skeleton>
  </el-card>
  <!-- 表格 -->
  <el-card class="m-1">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item
        v-for="(imgUrl,index) in imgList"
        :key="imgUrl"
        style="box-shadow: 0 5px 15px -5px rgba(0,0,0,.5);"
      >
        <img class="carousel-img" :src="'src/assets/img/' + imgUrl" />
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
    // imgList
    const imgList = reactive(['store1.jpg', 'store2.jpg', 'store3.jpg', 'store4.jpg', 'store5.png']);
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

    // 初始化table
    productList();
    return {
      animateFlag, ...toRefs(queryParams), tableData, count, loading, imgList,
      searchproductName, pagingHidden, handleCurrentChange, indexMethod
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
