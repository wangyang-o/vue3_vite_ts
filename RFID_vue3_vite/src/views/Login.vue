<!--
 * @Author: wy
 * @Date: 2021年04月07日 21:37:16
 * @LastEditTime: 2021年05月07日
-->
<template>
  <div class="login-container">
    <div class="login-left"></div>
    <div class="login-form">
      <div class="login-title">智慧数字化仓储管理系统</div>
      <el-form :model="loginForm" status-icon :rules="rules" ref="loginRef" label-width="100px">
        <el-form-item label="用户账号:" prop="userName" style="width:300px">
          <el-input type="text" v-model="loginForm.userName" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item label="用户密码:" prop="password" style="width:300px">
          <el-input type="password" v-model="loginForm.password" placeholder="密码"></el-input>
        </el-form-item>
        <!-- <el-form-item></el-form-item> -->
      </el-form>
      <el-button style="width:200px" type="primary" round @click="submitlogin()">登录</el-button>

      <transition name="el-zoom-in-center">
        <div class="regester">没有账号？？</div>
      </transition>
    </div>
  </div>
</template>
<script lang="ts">

import { watch, defineComponent, ref, reactive } from "vue";
import { toLogin } from '@/api/login';
import { ElNotification } from 'element-plus';
import router from '../router';

// interface loginInf {
//   userName: string;
//   password: string;
// }
export default defineComponent({
  name: "Login",
  setup: (props, context) => {
    const loginForm = reactive({ userName: 'wy', password: '12345' });
    const loginRef = ref<HTMLElement | null>(null);

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
      password: [
        { required: true, message: "请输入用户密码", trigger: "blur" },
        {
          min: 3,
          max: 30,
          message: "长度在 3 到 30 个字符",
          trigger: "blur",
        },
      ],
    }
    const submitlogin = async () => {
      const res: any = await toLogin(loginForm);
      if (res.code === 200) {
        router.push('/');
        ElNotification({
          type: 'success',
          message: res.msg,
          duration: 1000,
        });
      } else if (res.code === 0) {
        ElNotification({
          type: 'error',
          message: res.msg,
          duration: 1000,
        });
      }
    }
    return { loginForm, loginRef, submitlogin, rules };
  },
});
</script>

<style scoped>
.login-container {
  background: url("@/assets/img/login.png") no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  height: 100vh;
  width: 100vw;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.login-form {
  width: 20vw;
  height: 50vh;
  background: #ecf0f1;
  border: solid 1px #3498db;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  /* vertical-align: center; */
  justify-content: center;
  align-items: center;
}
.login-title:first-child {
  /* 自身居中 */
  /* align-self: center; */
  margin-bottom: 50px;
  font-size: 30px;
  text-shadow: 2px 2px 2px #2c3e50;
}
.login-left {
  width: 25vw;
  height: 45vh;
  background: url("@/assets/img/loginLeft.png") no-repeat;
  background-size: contain;
}
.regester {
  color: #3498db;
  font-size: 15px;
  margin-top: 20px;
  cursor: pointer;
}
</style>
