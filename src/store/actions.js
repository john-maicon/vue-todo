
import db from '../services/localbase.js';

const actions = {
    async adicionarTarefa({ commit }, task) {
      console.log('sasas', task);
      await commit("addTask", task);
      await commit("getTasks");
    },

    editTask({ commit }, task) {
      db.collection("tasks")
        .doc({ id: task.id })
        .update({
          title: task.title,
        })
        .then(() => {
          
          commit("getTasks");
        });
    },
    concluiTarefa({ commit }, task) {

      db.collection("tasks")
        .doc({ id: task.id })
        .update({
          concluded: !task.concluded,
        })
        .then(() => {
          commit("getTasks");
        });
    },
    removeTak({ commit }, id) {
      db.collection("tasks")
        .doc({ id: id })
        .delete()
        .then(() => {
          commit("getTasks");
        });
    },
};
export default actions