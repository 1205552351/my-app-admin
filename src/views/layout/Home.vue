<template>
  <div class="home">
    <div :class="{ 'menu-list': true, 'menu-list-hide': isCollapse }">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        mode="vertical"
        :collapse="isCollapse"
        :collapse-transition="isCollapseTransition"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div :class="{ 'main-app': true, 'menu-hide': isCollapse }">
      <div class="main-header">
        <div class="icon">
          <i class="el-icon-s-unfold" v-if="isShowicon" @click="handleShow"></i>
          <i class="el-icon-s-fold" v-else @click="handleShow"></i>
        </div>
        <div class="breadcrumb">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动</el-breadcrumb-item>
            <el-breadcrumb-item>活动</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <ul class="user-info">
          <li><el-avatar> user </el-avatar></li>
          <li>个人信息</li>
          <li>退出</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      isShowicon: true,
      isCollapse: false,
      isCollapseTransition: false,
    };
  },
  methods: {
    handleShow() {
      this.isShowicon = !this.isShowicon;
      this.isCollapse = !this.isCollapse;
      this.isCollapseTransition = !this.isCollapseTransition;
    },
  },
};
</script>

<style scoped lang="less">
@import url("~@/assets/css/home.less");
</style>
