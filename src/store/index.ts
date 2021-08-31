import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);//把 store 绑定到 Vue.prototype上

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state,n:number) {
      state.count += n;
    }
  },

});


export default store;