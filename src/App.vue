<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-img
        src="https://picsum.photos/1920/1080?random"
        alt=""
        dark
        class="pt-5 text-center"
      >
       <v-avatar>
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
        size="100"
      >
    </v-avatar>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6"> John </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-img>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="{ name: item.url }"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      dark
      color="#6A76AB"
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>


    <center>
      <v-app-bar-title>
       
        <InputTaskNew />
      </v-app-bar-title>
    </center>



   <v-spacer></v-spacer>
    <!--
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import InputTaskNew from '../src/components/InputTaskNew.vue'
export default {
  components:{
    InputTaskNew
  },
  data: () => ({
    drawer: true,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", url: "dashboard" },
      { title: "Tarefas", icon: "mdi-image", url: "tasks" },
      { title: "Sobre", icon: "mdi-help-box", url: "about" },
    ],
  }),
};
</script>
