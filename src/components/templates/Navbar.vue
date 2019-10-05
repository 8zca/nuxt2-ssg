<template lang="pug">
  div
    v-toolbar(app fixed flat dark color="primary")
      v-app-bar-nav-icon(@click.stop='toggleSidebar')
      v-spacer
      v-toolbar-items
        v-btn(text to="/") Home
        v-btn(text to="/about") About
        v-btn(text to="/logout")
          v-icon(small) exit_to_app
          | &nbsp;ログアウト
        v-btn(text fab small outline) K
</template>

<script>
export default {
  methods: {
    toggleSidebar () {
      this.$store.dispatch('app/toggleSidebar')
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  display: inline-flex;
  width: 32px;
  height: 32px;
  align-items: center;
  align-self: center;
  justify-content: center;
  border-radius: 16px;
  border: 1px solid;
  border-color: inherit;
  margin: 0 16px;
}
</style>
