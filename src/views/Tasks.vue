<template>
  <div>
    <v-list flat subheader>
          <v-col cols="12">
        <v-text-field
          v-model="task"
          label="Qual a sua tarefa?"
          outlined
          clearable
          @keyup.enter="handleAddTask"
        ></v-text-field>
      </v-col>

      <v-list-item-group v-model="settings" multiple active-class="">
        <div v-for="(item, index) in $store.state.tasks" :key="index">
          <Task :task="item" />
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import Task from "../components/tasks/Task.vue";

export default {
  components: {
    Task,
  },
  data() {
    return {
      
      task: null,
    };
  },
  methods: {
    handleAddTask() {
        this.$store.commit('addTask', this.task)
        this.task = null;
    },
  },
};
</script>
