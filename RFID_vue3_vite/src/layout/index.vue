<!--
 * @Descripttion: 
 * @Author: wy
 * @Date: 2021年04月21日
 * @LastEditTime: 2021年04月21日
-->
<!--
 * @Author: wy
 * @Date: 2021年04月07日 21:37:16
 * @LastEditTime: 2021年04月21日
-->

<template>
  <!-- layout111111111111111111 -->

  <Sidenav :sidelist="sidelist">
    <router-view></router-view>
  </Sidenav>
</template>

<script lang="ts">
import { toRefs, defineComponent, reactive } from "vue";
import Sidenav from "@/layout/components/sidenav.vue";
import { Sidelist } from "./types";
export default defineComponent({
  name: "Layout",
  props: {},
  components: {
    Sidenav,
  },
  setup: () => {
    const sidelist = reactive<Sidelist[]>([
      {
        id: 1,
        icon: "el-icon-menu",
        title: "控制面板",
        path: "/",
      },
      {
        id: 2,
        icon: "el-icon-user-solid",
        title: "用户信息",
        path: "/",
      },
      {
        id: 3,
        icon: "el-icon-chat-dot-round",
        title: "权限管理",
        path: "/",
      },
      {
        id: 4,
        icon: "el-icon-coin",
        title: "入库信息管理",
        path: "/",
      },
      {
        id: 5,
        icon: "el-icon-s-opportunity",
        title: "客户列表",
        path: "/",
      },
      {
        id: 6,
        icon: "el-icon-s-order",
        title: "产品列表",
        path: "/",
      },
      {
        id: 7,
        icon: "el-icon-thumb",
        title: "价格管理",
        path: "/",
      },
      {
        id: 8,
        icon: "el-icon-document-copy",
        title: "产品类别",
        path: "/",
      },
      {
        id: 9,
        icon: "el-icon-present",
        title: "存货管理",
        path: "/",
      },
      {
        id: 10,
        icon: "el-icon-s-tools",
        title: "工具管理",
        path: "/",
      },
    ]);
    return { sidelist };
  },
});
</script>

<style scoped>
</style>
