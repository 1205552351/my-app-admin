import Vue from 'vue';
import Vuex from 'vuex';
import { setCookie, getCookie, removeCookie } from '@/util/userinfo';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Showicon: true,
    Collapse: false,
    CollapseTransition: false,
    user: getCookie(),
    menuRole: [],
  },
  mutations: {
    changeShowIcon(state) {
      state.Showicon = !state.Showicon;
    },
    changeCollapse(state) {
      state.Collapse = !state.Collapse;
    },
    changeCollapseTransition(state) {
      state.CollapseTransition = !state.CollapseTransition;
    },
    setUserInfo(state, userInfo) {
      state.user = userInfo;
    },
    logout(state) {
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: '',
      };
    },
    changMenu(state, roles) {
      state.menuRole = roles;
    },
  },
  actions: {
    changeShowIcon({ commit }) {
      commit('changeShowIcon');
    },
    changeCollapse({ commit }) {
      commit('changeCollapse');
    },
    changeCollapseTransition({ commit }) {
      commit('changeCollapseTransition');
    },
    setUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo);
      setCookie(userInfo);
    },
    logout({ commit }) {
      commit('logout');
      removeCookie();
    },
    changMenu({ commit }, roles) {
      commit('changMenu', roles);
    },
  },
  modules: {
  },
});
