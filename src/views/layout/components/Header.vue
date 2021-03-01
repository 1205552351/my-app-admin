<template>
  <div class="main-header">
    <div class="icon">
      <i
        class="el-icon-s-unfold"
        v-if="$store.state.Showicon"
        @click="handleShow"
      ></i>
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
</template>
<script>
export default {
  methods: {
    handleShow() {
      this.$store.dispatch('changeShowIcon');
      this.$store.dispatch('changeCollapse');
      this.$store.dispatch('changeCollapseTransition');
      // this.isShowicon = !this.isShowicon;
      // this.isCollapse = !this.isCollapse;
      // this.isCollapseTransition = !this.isCollapseTransition;
    },
  },
};
</script>
