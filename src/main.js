import Vue from 'vue';
import ElementUI from 'element-ui';
import VCharts from 'v-charts';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/reset.css';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VCharts);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
