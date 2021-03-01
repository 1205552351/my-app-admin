import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Showicon: true,
    Collapse: false,
    CollapseTransition: false,
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
  },
  modules: {
  },
});
