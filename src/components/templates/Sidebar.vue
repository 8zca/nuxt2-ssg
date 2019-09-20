<template lang="pug">
  v-navigation-drawer(v-model="sidebar.isOpen" app stateless width="220")
    v-toolbar(dark flat color="primary")
      v-toolbar-title(@click="") #[v-icon.mr-2 data_usage] Dashboard
    v-list
      v-list-item-group
        template(v-for="route in routes")
          template(v-if="isShow(route)")
            template(v-if="hasOneChild(route)")
              v-list-item
                v-list-item-icon
                  v-icon {{ route.children[0].icon }}
                v-list-item-content
                  v-list-item-title {{ route.children[0].title }}
            template(v-else)
              v-list-group(:prepend-icon="route.icon" value="true")
                template(v-slot:activator)
                  v-list-item-title {{ route.title }}
                v-list-item(v-for="child in route.children" :key="route.name")
                  v-list-item-title {{ child.title }}
                  v-list-item-icon
                    v-icon {{ child.icon }}
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
