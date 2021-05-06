<!--
 * @Author: wy
 * @Date: 2021年04月07日 21:37:16
 * @LastEditTime: 2021年05月06日
-->


<template>
  <div class="m-1">
    <el-row :gutter="12">
      <el-col :span="6" v-for="(item, index) in cardInfo" :key="item.icon">
        <el-card
          shadow="hover"
          class="animate__animated animate__flipInX"
          :style="{ animationDelay: item.delay }"
          :body-style="bodyStyle"
        >
          <template #header>
            <div class="card-header">
              <span>{{ item.title }}</span>
              <el-tag :type="item.type">
                <i :class="item.icon"></i>
              </el-tag>
            </div>
          </template>
          <div class="card-body_number">222 个</div>
          <div class="card-body_text">{{ item.content }}</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
  <div class="m-1">
    <el-row :gutter="12">
      <el-col :span="12">
        <el-card shadow="hover" :body-style="bodyStyle">
          <template #header>
            <div class="card-header">
              <span>产品分布</span>
              <el-tag type="success">
                <i class="el-icon-s-opportunity"></i>
              </el-tag>
            </div>
          </template>
          <div style="width:100%;height:270px" ref="barRef"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover" :body-style="bodyStyle">
          <template #header>
            <div class="card-header">
              <span>产品数</span>
              <el-tag type="danger">
                <i class="el-icon-s-flag"></i>
              </el-tag>
            </div>
          </template>
          <!-- <v-chart style="width:100%;height:300px" :option="option1" lazyUpdate /> -->
          <div style="width:100%;height:270px" ref="pieRef"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
  <div class="m-1">
    <el-row :gutter="12">
      <el-col :span="14">
        <el-card shadow="hover" :body-style="bodyStyle">
          <template #header>
            <div class="card-header">
              <span>产品分布</span>
              <el-tag type="success">
                <i class="el-icon-s-opportunity"></i>
              </el-tag>
            </div>
          </template>
          <div style="width:100%;height:200px" ref="treeRef"></div>
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card shadow="hover" :body-style="bodyStyle">
          <template #header>
            <div class="card-header">
              <span>用户评价</span>
              <el-tag type="success">
                <i class="el-icon-s-opportunity"></i>
              </el-tag>
            </div>
          </template>
          <div style="width:100%;height:200px" ref="gaugeRef"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, onMounted } from 'vue';
import { randerPie, randerBar, randerTree, randerGauge } from './hooks/eChartsHook';
import { getUserList } from '@/api/users';
export default defineComponent({
  name: 'Dashboard',
  props: {},
  setup: () => {
    const cardInfo = reactive([
      {
        title: '用户数',
        icon: 'el-icon-s-opportunity',
        type: 'success',
        content: '不要等待机会，而要创造机会。',
        delay: '0.2s',
      },
      {
        title: '客户数',
        icon: 'el-icon-s-flag',
        type: 'danger',
        content: '没有什么才能比努力更重要。',
        delay: '0.4s',

      },
      {
        title: '当前存货量',
        icon: 'el-icon-present',
        type: 'warning',
        content: '热情和欲望可以突破一切难关。',
        delay: '0.6s',

      },
      {
        title: '剩余存货量',
        icon: 'el-icon-star-on',
        type: 'default',
        content: '健康的身体是实目标的基石。',
        delay: '0.7s',

      },
    ]);
    const bodyStyle = {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    };
    const pieRef = ref<HTMLElement | null>(null);
    const barRef = ref<HTMLElement | null>(null);
    const treeRef = ref<HTMLElement | null>(null);
    const gaugeRef = ref<HTMLElement | null>(null);
    randerPie(pieRef);
    randerBar(barRef);
    randerTree(treeRef);
    randerGauge(gaugeRef);
    const userList = async () => {
      const res = await getUserList({ pageNum: 1, pageSize: 10, userName: 'wy' });
      console.log(res);
    }
    onMounted(() => {
      userList();
    })
    return {
      pieRef,
      barRef,
      treeRef,
      gaugeRef,
      cardInfo,
      bodyStyle,
    };
  },
});
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
}
/* .card-body_number {
} */
.card-body_text {
  font-size: 15px;
}
</style>
