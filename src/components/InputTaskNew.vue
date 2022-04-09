<template>
  <div>
    <v-col cols="12">
      <v-text-field
        v-model="task"
        label="Qual a sua tarefa?"
        outlined
        clearable
        @keyup.enter="handleAddTask"
      ></v-text-field>
    </v-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: null,
    };
  },
  methods: {
    handleAddTask() {
      this.$store.dispatch("adicionarTarefa", this.task);
      this.task = null;
    },
  },
};
</script>
