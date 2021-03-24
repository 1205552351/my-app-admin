<template>
  <div :class="{ 'menu-list': true, 'menu-list-hide': $store.state.Collapse }">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      mode="vertical"
      :collapse="$store.state.Collapse"
      :collapse-transition="$store.state.CollapseTransition"
    >
      <el-submenu
        v-for="router in menuRole"
        :key="router.name"
        :index="router.name"
      >
        <template slot="title">
          <i :class="router.meta.class"></i>
          <span>{{ router.meta.title }}</span>
        </template>
        <el-menu-item
          v-for="children in router.children"
          :key="children.name"
          :index="children.name"
        >
          <router-link :to="{ name: children.name }" tag="div">
            {{ children.meta.title }}
          </router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: this.$store.state.menuRole,
    };
  },
  computed: {
    menuRole() {
      return this.$store.state.menuRole.filter((r) => r.meta.hidden === false);
    },
  },
};
</script>
