<template lang="pug">
  v-app
    v-container(fluid)
      v-layout(wrap)
        v-flex(xs12 sm4 offset-sm4)
          div(class="login-form")
            v-card-text.text-xs-center
              h1.headline Vuetify-MC-Dashboard
            v-card-text
              form
                v-text-field(
                  v-model="email"
                  :error-messages="emailErrors"
                  label="Eメール"
                  placeholder="your_email@sora.flights"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()")
                v-text-field(
                  v-model="password"
                  :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                  :error-messages="passwordErrors"
                  label="パスワード"
                  placeholder="*****"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  @input="$v.password.$touch()"
                  @blur="$v.password.$touch()"
                  @click:append="showPassword = !showPassword")
                v-btn(@click="submit" color="primary" block large) ログイン
</template>

<script>
export default {
  data () {
    return {
      showPassword: false
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  margin-top: 32px;
  padding: 16px;
  border: 1px solid map-get($grey, lighten-2);
  border-radius: 4px;
}
</style>
