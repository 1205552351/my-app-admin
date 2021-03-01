<template>
  <div class="login">
    <el-form
      :model="loginForm"
      status-icon
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="loginForm"
    >
      <el-form-item label="邮箱" prop="email">
        <el-input
          type="text"
          v-model="loginForm.email"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="loginForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')"
          >提交</el-button
        >
        <el-button @click="registerForm">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from '@/api/user';

export default {
  data() {
    const emailReg = new RegExp(
      '^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$',
    );
    const validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱！！！'));
      } else if (!emailReg.test(value)) {
        callback(new Error('邮箱格式不正确！！！'));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        email: '',
        pass: '',
      },
      rules: {
        email: [{ validator: validateEmail, trigger: 'blur' }],
        pass: [{ validator: validatePass, trigger: 'blur' }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api
            .login(this.loginForm)
            .then((res) => {
              this.$router.push({
                name: 'Home',
              });
            })
            .catch((error) => {
              this.$message.error('邮箱或密码错误！！！');
            });
          return true;
        }
        return false;
      });
    },
    registerForm() {
      this.$router.push({
        name: 'Register',
      });
    },
  },
};
</script>

<style scoped lang="less">
@import url("~@/assets/css/login.less");
</style>
