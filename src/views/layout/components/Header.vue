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
        <el-breadcrumb-item
          :to="{ path: router.path }"
          v-for="router in currentRoute"
          :key="router.name"
        >
          {{ router.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <ul class="user-info">
      <li>
        <el-avatar> {{ $store.state.user.username }} </el-avatar>
      </li>
      <li>个人信息</li>
      <li @click="login">退出</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentRoute: this.$router.currentRoute.matched,
    };
  },
  watch: {
    $route: 'changeRoute',
  },
  methods: {
    handleShow() {
      this.$store.dispatch('changeShowIcon');
      this.$store.dispatch('changeCollapse');
      this.$store.dispatch('changeCollapseTransition');
      // this.isShowicon = !this.isShowicon;
      // this.isCollapse = !this.isCollapse;
      // this.isCollapseTransition = !this.isCollapseTransition;
    },
    changeRoute() {
      this.currentRoute = this.$router.currentRoute.matched;
    },
    login() {
      this.$store.dispatch('logout');
      this.$router.push({
        name: 'Login',
      });
    },
  },
};
</script>
