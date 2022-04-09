<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Remover tarefa - {{taskItem.title}}</v-card-title>
        <v-card-text>Tem certeza?</v-card-text>
      
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="handleRemoveTask">
            Sim
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
  props: ["taskItem"],
  data() {
    return {
      dialog: true,
    };
  },
  methods: {
    handleRemoveTask() {
      this.$store.dispatch("removeTak", this.taskItem.id);
            this.$emit("cancelModalRemoveTask");
    },
    handleCancel() {
      this.$emit("cancelModalRemoveTask");
    },
  },
 
};
</script>
