<template functional>
  <div>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" :to="item.to">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar dark color="primary" clipped-left fixed app>
      <v-toolbar-side-icon
        @click.stop="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase white--text">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn flat to="/">Home</v-btn>

        <v-menu
        v-if="props.loggedIn"
        auto
        offset-y
        bottom
    >
        <v-avatar slot="activator" class="ml-2 mr-5">
          <img :src="props.profile.picture" />
        </v-avatar>
        <v-list>
          <v-list-tile @click="props.logout">
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile>
        </v-list>

        </v-menu>
        <v-btn
        class="mr-5"
        v-else
        flat
        @click="props.login"
        >Login</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "dashboard", to: "/" },
        { title: "About", icon: "question_answer", to: "/about" }
      ]
    };
  }
};
</script>