<template lang="pug">
  v-navigation-drawer(v-model="sidebar.isOpen" app stateless width="220")
    v-toolbar(dark flat color="primary")
      v-list
        v-list-tile(@click="")
          v-list-tile-content
            v-list-tile-title.title V-MC-Dashboard
    v-list
      v-list-tile(v-for="route in routes" :key="route.name" @click="" v-if="isShow(route)")
        template(v-if="isOneChild(route)")
          v-list-tile-action
            v-icon {{ route.children[0].icon }}
          v-list-tile-title {{ route.children[0].title }}
        template(v-else)
          v-list-group(prepend-icon="route.icon")
            template(v-slod:activator)
              v-list-tile
                v-list-tile-title {{ child.title }}
            v-list-tile(v-for="child in route.children" :key="child.name" v-if="isShow(child)")
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
      return typeof route.show === 'undefined' || route.show
    },
    isOneChild (route) {
      console.log(route.children)
      return route.children.length === 1
    }
  }
}
</script>
