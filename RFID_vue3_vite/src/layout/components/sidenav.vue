<!--
 * @Author: wy
 * @Date: 2021年04月07日 21:37:16
 * @LastEditTime: 2021年04月21日
-->
<template>
  <div class="sidebar_body">
    <div class="sidebar" :class="{ 'sidebar' : isActive, 'sidebar active': !isActive}">
      <div class="logo_content">
        <div class="logo">
          <i class='bx el-icon-ship'></i>
          <div class="logo_name" :class="{ 'logo_name' : !isActive, 'logo_name logo_name_active': isActive}">SmartStorage</div>
        </div>
        <i class='bx el-icon-s-operation' id="btn" @click="toggle"></i>
      </div>
      <ul class="nav_list">

        <li v-for="item in computedSidelist" :key="item.id">
          <a href="#">
            <i :class='item.icon'></i>
            <span class="links_name">{{item.title}}</span>
          </a>
          <span class="tooltip">{{item.title}}</span>
        </li>
      </ul>
      <div class="profile_content">
        <div class="profile">
          <div class="profile_details">
            <img src="@/assets/img/littlecun.jpg" alt="">
            <div class="name_job">
              <div class="name">欢迎您，xxx</div>
              <div class="job">{{loginTime()}}</div>
            </div>
          </div>
          <i class='bx el-icon-more-outline' id="log_out"></i>
        </div>
      </div>
    </div>
    <div class="home_content">
      <div class="text">
        <slot>nothing</slot>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import { dateFormat } from "@/utils/common";

export default defineComponent({
  name: "Sidenav",
  props: ["sidelist"],

  setup: (props) => {
    //样式切换
    const isActive = ref(false);
    const toggle = () => {
      isActive.value = !isActive.value;
    };
    // 登录时间
    const loginTime = (): string => {
      return dateFormat("YYYY-mm-dd HH:MM", new Date());
    };
    const activePath = ref("/home");
    const computedSidelist = computed(() => {
      return props.sidelist;
    });
    return {
      isActive,
      toggle,
      loginTime,
      computedSidelist,
    };
  },
});
</script>
  
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.sidebar_body {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
}
::selection {
  color: #fff;
  background: #11101d;
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 78px;
  background: #11101d;
  padding: 6px 14px;
  z-index: 99;
  transition: all 0.5s ease;
}
.sidebar.active {
  width: 240px;
}
.sidebar .logo_content .logo {
  color: #fff;
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: all 0.5s ease;
}
.sidebar.active .logo_content .logo {
  opacity: 1;
  pointer-events: none;
}
.logo_content .logo i {
  font-size: 28px;
  margin-right: 5px;
}
.logo_content .logo .logo_name {
  font-size: 20px;
  font-weight: 400;
  width: 300px;
}
.logo_name_active {
  display: none;
}
.sidebar #btn {
  position: absolute;
  color: #fff;
  top: 6px;
  left: 50%;
  font-size: 22px;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  transform: translateX(-50%);
}
.sidebar.active #btn {
  left: 90%;
}
/* .sidebar ul {
  margin-top: 20px;
} */
.sidebar ul li {
  position: relative;
  height: 50px;
  width: 100%;
  margin: 0 5px;
  list-style: none;
  line-height: 50px;
  margin: 5px 0;
}
.sidebar ul li .tooltip {
  position: absolute;
  left: 125px;
  top: 0;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  height: 35px;
  width: 120px;
  background: #fff;
  line-height: 35px;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: 0s;
  opacity: 0;
  pointer-events: none;
  display: block;
}
.sidebar.active ul li .tooltip {
  display: none;
}
.sidebar ul li:hover .tooltip {
  transition: all 0.5s ease;
  opacity: 1;
  top: 50%;
}
.sidebar ul li input {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  border-radius: 12px;
  outline: none;
  border: none;
  background: #1d1b31;
  padding-left: 50px;
  font-size: 18px;
  color: #fff;
  color: transparent;
  text-shadow: 0 0 0 #000;
}
.sidebar ul li .el-icon-search {
  position: absolute;
  z-index: 99;
  color: #fff;
  font-size: 22px;
  transition: all 0.5 ease;
}
.sidebar ul li .el-icon-search:hover {
  background: #fff;
  color: #1d1b31;
}
.sidebar ul li a {
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 12px;
  white-space: nowrap;
  transition: all 0.4s ease;
}
.sidebar ul li a:hover {
  color: #11101d;
  background: #fff;
}
.sidebar ul li i {
  font-size: 18px;
  font-weight: 400;
  height: 50px;
  min-width: 50px;
  border-radius: 12px;
  line-height: 50px;
  text-align: center;
}
.sidebar .links_name {
  font-size: 15px;
  font-weight: 400;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}
.sidebar.active .links_name {
  transition: 0s;
  opacity: 1;
  pointer-events: auto;
}
.sidebar .profile_content {
  position: absolute;
  color: #fff;
  bottom: 0;
  left: 0;
  width: 100%;
}
.sidebar .profile_content .profile {
  position: relative;
  padding: 10px 6px;
  height: 60px;
  background: none;
  transition: all 0.4s ease;
}
.sidebar.active .profile_content .profile {
  background: #1d1b31;
}
.profile_content .profile .profile_details {
  display: flex;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  white-space: nowrap;
  transition: all 0.4s ease;
}
.sidebar.active .profile .profile_details {
  opacity: 1;
  pointer-events: auto;
}
.profile .profile_details img {
  height: 45px;
  width: 45px;
  object-fit: cover;
  border-radius: 12px;
}
.profile .profile_details .name_job {
  margin-left: 10px;
}
.profile .profile_details .name {
  font-size: 15px;
  font-weight: 400;
}
.profile .profile_details .job {
  font-size: 12px;
}
.profile #log_out {
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 50px;
  line-height: 50px;
  font-size: 20px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.4s ease;
  background: #1d1b31;
}
.sidebar.active .profile #log_out {
  left: 88%;
}
.sidebar.active .profile #log_out {
  background: none;
}
.home_content {
  position: absolute;
  height: 100%;
  width: calc(100% - 78px);
  left: 78px;
  background: #e4e9f7;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2px);
  transition: all 0.5s ease;
}
.sidebar.active ~ .home_content {
  z-index: 100;
}
.home_content .text {
  font-size: 25px;
  font-weight: 500;
  color: #1d1b31;
  margin: 12px;
}
.sidebar.active ~ .home_content {
  width: calc(100% - 240px);
  left: 240px;
}
</style>
  