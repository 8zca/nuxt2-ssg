<template>
  <div>
    company: {{ $route.params.id }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Company extends Vue {
  mounted() {
    console.log(this.$route.params.id)
  }
}
</script>
