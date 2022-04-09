<template>
  <div>
    <v-list-item
      :class="{ 'blue lighten-4' : taskItem.concluded }"
      @click="$store.dispatch('concluiTarefa', taskItem)"
    >
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox :input-value="taskItem.concluded"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': taskItem.concluded }"
            >{{ taskItem.title }}</v-list-item-title
          >
        </v-list-item-content>
        <v-list-item-action>
          <TaskMenu :item="taskItem" />
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import TaskMenu from "../tasks/TaskMenu.vue";
export default {
  props: ["item"],
  components: {
    TaskMenu,
  },
  data() {
    return {
      taskItem: null,
    };
  },
    created() {
      // 'clone' the statuses so we don't alter the prop when making changes
      this.taskItem = JSON.parse(JSON.stringify(this.item));
    },
};
</script>
