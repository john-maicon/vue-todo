import db from '@/services/localbase'

const mutations = {
    getTasks(state) {
      console.log('opaaa');
      db.collection("tasks")
        .get()
        .then((tasksDB) => {
          state.tasks = tasksDB;
        });
    },
    addTask(state, title) {
      db.collection("tasks").add({
        id: new Date().getTime(),
        title,
        concluded: false,
      });
    },
}
export default  mutations