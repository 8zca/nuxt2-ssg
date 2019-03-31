<template lang="pug">
  v-app
    sidebar
    navbar
    app-main
</template>

<script>
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import AppMain from './AppMain'

export default {
  components: {
    Sidebar,
    Navbar,
    AppMain
  }
}
</script>
