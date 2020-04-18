import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    sum: 0
  },
  actions: {
    setSum({ commit }, sum) {
      commit("setSum", sum);
    }
  },
  mutations: {
    setSum(state, amount) {
      state.sum = amount;
    }
  },
  getters: {
    getValues(state) {
      const values = [];
      let i;
      const { sum } = state;
      for (i = 1; i < 10; i += 1) {
        values.push(parseInt((sum / 10) * i, 10));
      }
      return values;
    }
  }
});

export default store;
