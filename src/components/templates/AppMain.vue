<template lang="pug">
  v-content(class="wrapper")
    v-container(fluid grid-list-lg)
      transition(name="fade-transform" mode="out-in")
        router-view
</template>

<style lang="scss" scoped>
.wrapper {
  margin-top: 58px;
}
</style>
