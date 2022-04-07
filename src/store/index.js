import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
     
    ],
  },
  mutations: {
    addTask(state, title){
      if (title) {
        state.tasks.push({
          id: new Date().getTime(),
          title,
          concluded: false,
        });
      }
    },
    removeTask(state, id){
      state.tasks = state.tasks.filter(item => item.id !== id)
    }
  },
  actions: {},
  modules: {},
});
