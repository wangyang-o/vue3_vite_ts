<!--
 * @Author: wy
 * @Date: 2021年04月07日 21:37:16
 * @LastEditTime: 2021年04月26日
-->


<template>
  <div class="m-1">
    <el-row :gutter="12">
      <el-col :span="6">
        <el-card shadow="hover" class="animate__animated animate__flipInX" style="animation-delay:0.25s" :body-style="bodyStyle">
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
        <el-card shadow="hover" class="animate__animated animate__flipInX" style="animation-delay:0.5s" :body-style="bodyStyle">
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
        <el-card shadow="hover" class="animate__animated animate__flipInX" style="animation-delay:0.5s" :body-style="bodyStyle">
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
        <el-card shadow="hover" class="animate__animated animate__flipInX" style="animation-delay:1s" :body-style="bodyStyle">
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
import echarts from '@/utils/echarts';

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
    const pieRef = ref<HTMLElement | null>(null);
    const barRef = ref<HTMLElement | null>(null);
    const treeRef = ref<HTMLElement | null>(null);
    const gaugeRef = ref<HTMLElement | null>(null);
    
    // const option1 = reactive();
    onMounted(() => {
      //感叹号非空断言
      const pieChart = echarts.init(pieRef.value!);
      pieChart.setOption({
        // backgroundColor: '#2c343c',
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        series: [
          {
            name: '面积模式',
            type: 'pie',
            radius: [20, 130],
            roseType: 'area',
            itemStyle: {
              borderRadius: 5,
            },
            data: [
              { value: 30, name: 'rose 1' },
              { value: 28, name: 'rose 2' },
              { value: 26, name: 'rose 3' },
              { value: 50, name: 'rose 4' },
              { value: 22, name: 'rose 5' },
              { value: 40, name: 'rose 6' },
              { value: 28, name: 'rose 7' },
              { value: 16, name: 'rose 8' },
            ],
          },
        ],
      });
      const barChart = echarts.init(barRef.value!);
      barChart.setOption({
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

      const treeChart = echarts.init(treeRef.value!);
      const data2 = {
        name: 'flare',
        children: [
          {
            name: 'flex',
            children: [{ name: 'FlareVis', value: 4116 }],
          },
          {
            name: 'scale',
            children: [
              { name: 'IScaleMap', value: 2105 },
              { name: 'LinearScale', value: 1316 },
              { name: 'LogScale', value: 3151 },
              { name: 'OrdinalScale', value: 3770 },
            ],
          },
          {
            name: 'display',
            children: [{ name: 'DirtySprite', value: 8833 }],
          },
        ],
      };
      treeChart.setOption({
        series: {
          type: 'tree',
          name: 'tree2',
          data: [data2],

          symbolSize: 7,

          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
          },

          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left',
            },
          },

          expandAndCollapse: true,

          emphasis: {
            focus: 'descendant',
          },

          animationDuration: 550,
          animationDurationUpdate: 750,
        },
      });
      const gaugeChart = echarts.init(gaugeRef.value!);
      gaugeChart.setOption({
        series: [
          {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 1,
            center: ['50%', '65%'],
            splitNumber: 8,
            axisLine: {
              lineStyle: {
                width: 6,
                color: [
                  [0.25, '#FF6E76'],
                  [0.5, '#FDDD60'],
                  [0.75, '#58D9F9'],
                  [1, '#7CFFB2'],
                ],
              },
            },
            pointer: {
              icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
              length: '12%',
              width: 20,
              offsetCenter: [0, '-60%'],
              itemStyle: {
                color: '#7d5fff',
              },
            },
            axisTick: {
              length: 12,
              lineStyle: {
                color: 'inherit',
                width: 2,
              },
            },
            splitLine: {
              length: 20,
              lineStyle: {
                color: 'inherit',
                width: 2,
              },
            },
            axisLabel: {
              color: '#464646',
              fontSize: 20,
              distance: -60,
              formatter: function (value: number) {
                if (value === 0.875) {
                  return '优';
                } else if (value === 0.625) {
                  return '中';
                } else if (value === 0.375) {
                  return '良';
                } else if (value === 0.125) {
                  return '差';
                }
              },
            },
            title: {
              offsetCenter: [0, '70%'],
              fontSize: 20,
            },
            detail: {
              fontSize: 20,
              // offsetCenter: [0, '0%'],
              valueAnimation: true,
              formatter: function (value: number) {
                return Math.round(value * 100) + '分';
              },
              color: 'inherit',
            },
            data: [
              {
                value: 0.89,
                name: '平均评价',
              },
            ],
          },
        ],
      });
    });

    // const option = reactive();
    // const option1 = reactive();

    return {
      pieRef,
      barRef,
      treeRef,
      gaugeRef,
      cardIInfo,
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
