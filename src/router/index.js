import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';
import getMenuRoute from '@/util/permission';
import Home from '../views/layout/Home.vue';
import Login from '../views/layout/Login.vue';

Vue.use(VueRouter);
const ayncRouterMap = [{
  path: '/product',
  name: 'Product',
  redirect: { name: 'ProductList' },
  meta: {
    title: '商品',
    class: 'el-icon-menu',
    hidden: false,
  },
  component: Home,
  children: [{
    path: 'productList',
    name: 'ProductList',
    meta: {
      title: '商品列表',
      hidden: false,
    },
    component: () => import('@/views/page/ProductList.vue'),
  },
  {
    path: 'category',
    name: 'Category',
    meta: {
      title: '添加类目',
      hidden: false,
    },
    component: () => import('@/views/page/ProductAdd.vue'),
  },
  ],
}];
const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/chart',
    meta: {
      title: '首页',
      class: 'el-icon-location',
      hidden: false,
    },
    component: Home,
    children: [{
      path: 'chart',
      name: 'Chart',
      meta: {
        title: '统计',
        hidden: false,
      },
      component: () => import('../views/page/Chart.vue'),
    }],
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      hidden: true,
    },
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      title: '注册',
      hidden: true,
    },
    component: () => import(/* webpackChunkName: "register" */ '../views/layout/Register.vue'),
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: '主页',
      hidden: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});
let isShowMenu = false;
router.beforeEach((to, form, next) => {
  if (to.path !== '/login') {
    if (store.state.user.appkey && store.state.user.username && store.state.user.role) {
      if (!isShowMenu) {
        const menuRoutes = getMenuRoute(store.state.user.role, ayncRouterMap);
        store.dispatch('changMenu', routes.concat(menuRoutes)).then(() => {
          router.addRoutes(menuRoutes);
          next();
        });
        isShowMenu = true;
      }

      return next();
    }
    return next('/login');
  }
  return next();
});
export default router;
