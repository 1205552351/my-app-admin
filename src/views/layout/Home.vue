<template>
  <div class="home">
    <left-nav />
    <div :class="{ 'main-app': true, 'menu-hide': $store.state.Collapse }">
      <header-nav />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LeftNav from './components/LeftNav.vue';
import HeaderNav from './components/Header.vue';

export default {
  components: {
    LeftNav,
    HeaderNav,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less">
@import url("~@/assets/css/home.less");
</style>
