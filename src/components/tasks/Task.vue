<template>
  <div>
    <v-list-item
      :class="{ 'blue lighten-4': task.concluded }"
      @click="task.concluded = !task.concluded"
    >
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox :input-value="task.concluded"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': task.concluded }"
            >{{ task.title }}</v-list-item-title
          >
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click.stop="handleRemoveTaks(task.id)">
            <v-icon color="red lighten-1">mdi-trash-can</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  props: ["task"],
  methods:{
    handleRemoveTaks(id){
      this.$store.commit('removeTask', id)
    }
  }
};
</script>
