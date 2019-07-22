<template lang="pug">
  v-navigation-drawer(v-model="sidebar.isOpen" app stateless width="220")
    v-toolbar(dark flat color="primary")
      v-list
        v-list-tile(@click="")
          v-list-tile-content
            v-list-tile-title.title #[v-icon.mr-2 data_usage] Dashboard
    v-list
      template(v-for="route in routes")
        template(v-if="isShow(route)")
          template(v-if="hasOneChild(route)")
            v-list-tile
              v-list-tile-action
                v-icon {{ route.children[0].icon }}
              v-list-tile-content
                v-list-tile-title {{ route.children[0].title }}
          template(v-else)
            v-list-group(:prepend-icon="route.icon")
              template(v-slot:activator)
                v-list-tile
                  v-list-tile-content
                    v-list-tile-title {{ route.title }}
              v-list-tile(v-for="child in route.children" :key="route.name")
                v-list-tile-action
                  v-icon {{ child.icon }}
                v-list-tile-content
                  v-list-tile-title {{ child.title }}
</template>

<script>
import { mapGetters } from 'vuex'
import { routes } from '@/router'

export default {
  data () {
    return {
      routes: routes
    }
  },
  computed: {
    ...mapGetters({
      sidebar: 'app/sidebar'
    })
  },
  methods: {
    isShow (route) {
      return route.show !== false
    },
    hasOneChild (route) {
      return route.children.length === 1
    }
  }
}
</script>
