<template lang="pug">
  v-layout(row wrap)
    v-flex(xs12)
      h1 Dashboard
    v-flex(xs12)
      v-layout(row wrap)
        v-flex(d-flex xs6 md3 v-for="row in summary" :key="row.title")
          v-card(color="grey lighten-4")
            v-card-text
              div.sm-title {{ row.title }}
              div.sm-value {{ row.value }}
</template>

<script>
export default {
  data () {
    return {
      summary: [
        { title: 'Today Transaction Count', value: 1234 },
        { title: 'Weekly Transaction Count', value: 9999 },
        { title: 'Today Transaction Total Amount', value: 12340000 },
        { title: 'Weekly Transaction Total Amount', value: 99990000 }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sm-title {
  font-size: 11px;
  margin-bottom: 8px;
}
.sm-value {
  font-size: 18px;
  text-align: right;
}
</style>
