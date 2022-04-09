<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-icon left color="blue darken-2">mdi-pencil</v-icon>
          <v-list-item-title @click="edit">Editar</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-icon left color="red darken-2">mdi-trash-can</v-icon>
          <v-list-item-title @click="remove">Remover</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <ModalEdit
      v-if="modalEdit"
      :item="taskItem"
      @cancelModalEdit="cancelModalEdit"
    />
    <ModalRemove
      v-if="modalRemove"
      :taskItem="taskItem"
      @cancelModalRemoveTask="cancelModalRemoveTask"
    />
  </div>
</template>

<script>
import ModalEdit from "../Modal/ModalEdit.vue";
import ModalRemove from "../Modal/ModalRemove.vue";
export default {
  props: ["item"],
  components: { ModalEdit, ModalRemove },
  data() {
    return {
      modalEdit: false,
      modalRemove: false,
      taskItem: null,
    };
  },
  methods: {
    edit() {
      this.modalEdit = true;
    },
    remove() {
      this.modalRemove = true;
    },
    cancelModalEdit() {
      this.modalEdit = false;
    },
    cancelModalRemoveTask() {
      this.modalRemove = false;
    },
  },
  created() {
    this.taskItem = this.item
    // // 'clone' the statuses so we don't alter the prop when making changes
    // this.taskItem = JSON.parse(JSON.stringify(this.item));
    //  console.log(this.taskItem, this.item);
  },
};
</script>
