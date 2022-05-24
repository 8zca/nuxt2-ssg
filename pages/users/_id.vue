<template>
  <div>
    <dl>
      <dt>ID</dt>
      <dd>{{ user.id }}</dd>
      <dt>Name</dt>
      <dd>{{ user.name }}</dd>
    </dl>
    <dl v-if="userDetail">
      <dt>Avatar</dt>
      <dd><img :src="userDetail.avatar" width="50" height="50" /></dd>
      <dt>Job</dt>
      <dd>{{ userDetail.job }}</dd>
      <dt>Skills</dt>
      <dd>{{ userDetail.skill }}</dd>
    </dl>
    <nuxt-link v-if="userDetail" :to="`/companies/${userDetail.company}`">{{ userDetail.company }}</nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  async asyncData({ params, redirect }) {
    const id = params.id
    const data = await import('~/data/users.json')
    const user = data.default.find((user) => user.id === Number(id))
    if (!user) {
      return redirect(302, '/users')
    }

    return { user }
  }
})
export default class User extends Vue {
  id = ''
  userDetail = null

  async mounted() {
    this.userDetail = await this.$axios.$get('https://nuxt2-ssg.free.beeceptor.com/my/api/user')
  }
}
</script>
