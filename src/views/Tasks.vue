<template>
  <div>
      <ListTasks />
      <div
      v-if="!$store.state.tasks.length"
       class="mt-16 animate__animated animate__backInLeft">
      <center>  <v-icon size="100" color="primary">mdi-check</v-icon>
      <div class="text-h5 primary--text">
        Nenhuma tarefa
      </div>
      </center>
      </div>
  </div>
</template>

<script>
import ListTasks from "../components/tasks/ListTasks.vue";

export default {
  components: {
    ListTasks,
  },
  data() {
    return {
      task: null,
    };
  },
  created() {
    this.$store.commit("getTasks");
  },

};
</script>
