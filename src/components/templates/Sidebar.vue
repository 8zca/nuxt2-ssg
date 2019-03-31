<template lang="pug">
  v-navigation-drawer(v-model="sidebar.isOpen" app stateless width="220")
    v-toolbar(dark flat color="primary")
      v-list
        v-list-tile(@click="")
          v-list-tile-content
            v-list-tile-title.title #[v-icon.mr-2 data_usage]Vue.js CRM
    v-list
      v-list-tile(v-for="route in routes" :key="route.name" @click="")
        template(v-if="isShow(route)")
          v-list-tile-action
            v-icon {{ route.icon }}
          v-list-tile-content
            v-list-tile-title {{ route.title }}
</template>

<script>
import { mapGetters } from 'vuex'
import routes from '@/router'

export default {
  data () {
    return {
      routes: [],
      drawer: true
    }
  },
  computed: {
    ...mapGetters({
      sidebar: 'app/sidebar'
    })
  },
  mounted () {
    this.routes = routes
  },
  methods: {
    isShow (route) {
      return !(route.show && !route.show)
    }
  }
}
</script>
