<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="390">
      <v-card>
        <v-card-title class="text-h5"> Editar  </v-card-title>
        <v-card-text
          >Informe o nova tarefa</v-card-text
        >
        <v-text-field
          v-model="taskCurrent.title"
          class="px-4"
          label="Tarefa"
          outlined
          clearable
          @keyup.enter="handleEditTask"
        ></v-text-field>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="handleEditTask">
            Salvar
          </v-btn>
          <v-btn color="red darken-1" text @click="handleCancel">
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      dialog: true,
      taskCurrent: null,
    };
  },
  methods: {
    handleEditTask() {
      this.$store.dispatch("editTask", this.taskCurrent);
      this.$emit("cancelModalEdit");

      
    },
    handleCancel() {
      // this.taskCurrent = null;

      this.$emit("cancelModalEdit");
    },
  },
  created() {
    // this.taskCurrent = this.item
    // 'clone' the statuses so we don't alter the prop when making changes
    this.taskCurrent = JSON.parse(JSON.stringify(this.item));

  },
};
</script>
