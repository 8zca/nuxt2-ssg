<template>
  <div>
    <div>Dummy User List</div>
    <ul class="list">
      <li v-for="user in data" :key="user.id">
        <nuxt-link :to="`/users/${user.id}`">{{ user.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  async asyncData() {
    const data = await import('~/data/users.json')
    return { data: data.default }
  }
})
export default class Users extends Vue {}
</script>
