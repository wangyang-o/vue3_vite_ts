<!--
 * @Author: wy
 * @Date: 2021年04月07日 21:37:16
 * @LastEditTime: 2021年04月24日
-->


<template>
  <div class="m-1">
    <el-row :gutter="12">
      <el-col :span="6">
        <el-card shadow="hover" :body-style="bodyStyle">
          <template #header>
            <div class="card-header">
              <span>用户数</span>
              <el-tag type="success">
                <i class="el-icon-s-opportunity"></i>
              </el-tag>
            </div>
          </template>
          <div class="card-body_number">222 个</div>
          <div class="card-body_text">不要等待机会，而要创造机会。</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" :body-style="bodyStyle">
          <template #header>
            <div class="card-header">
              <span>产品数</span>
              <el-tag type="danger">
                <i class="el-icon-s-flag"></i>
              </el-tag>
            </div>
          </template>
          <div class="card-body_number">222 个</div>
          <div class="card-body_text">不要等待机会，而要创造机会。</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" :body-style="bodyStyle">
          <template #header>
            <div class="card-header">
              <span>存货量</span>
              <el-tag type="warning">
                <i class="el-icon-present"></i>
              </el-tag>
            </div>
          </template>
          <div class="card-body_number">222 个</div>
          <div class="card-body_text">不要等待机会，而要创造机会。</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" :body-style="bodyStyle">
          <template #header>
            <div class="card-header">
              <span>剩余存货量</span>
              <el-tag type="warning">
                <i class="el-icon-present"></i>
              </el-tag>
            </div>
          </template>
          <div class="card-body_number">222 个</div>
          <div class="card-body_text">不要等待机会，而要创造机会。</div>
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
          <v-chart style="width:100%;height:300px" :option="option" :updateOptions="{lazyUpdate: true}" />

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
          <v-chart style="width:100%;height:300px" :option="option1" lazyUpdate />

        </el-card>
      </el-col>

    </el-row>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from 'vue';
export default defineComponent({
  name: 'Dashboard',
  props: {},
  setup: () => {
    const cardIInfo = reactive([
      {
        title: '用户数',
        icon: 'el-icon-s-opportunity',
        type: 'success',
        content: '不要等待机会，而要创造机会。',
      },
      {
        title: '客户数',
        icon: 'el-icon-s-flag',
        type: 'danger',
        content: '',
      },
      {
        title: '存货量',
        icon: 'el-icon-present',
        type: 'warning',
        content: '',
      },
    ]);
    const bodyStyle = {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    };

    const loadingOptions = reactive({});
    const option = reactive({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)',
          },
        },
      ],
    });
    const option1 = reactive({
      // backgroundColor: '#2c343c',
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      series: [
        {
          name: '面积模式',
          type: 'pie',
          radius: [20, 140],
          roseType: 'area',
          itemStyle: {
            borderRadius: 5,
          },
          data: [
            { value: 30, name: 'rose 1' },
            { value: 28, name: 'rose 2' },
            { value: 26, name: 'rose 3' },
            { value: 24, name: 'rose 4' },
            { value: 22, name: 'rose 5' },
            { value: 20, name: 'rose 6' },
            { value: 18, name: 'rose 7' },
            { value: 16, name: 'rose 8' },
          ],
        },
      ],
    });
    return { cardIInfo, bodyStyle, option, option1, loadingOptions };
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
