<template lang="pug">
  v-layout(row wrap)
    v-flex(xs12)
      h1 Dashboard
    v-flex(xs12)
      v-layout(row wrap)
        v-flex(d-flex xs6 md4 v-for="row in summary" :key="row.title")
          v-card(color="red lighten-1" flat dark)
            v-layout
              v-flex(xs4)
                v-card-text
                  v-icon(size="70")
              v-flex(xs8)
                v-card-title.display-2(primary) {{ row.value }}
                v-card-text {{ row.value }}
</template>

<script>
export default {
  data () {
    return {
      summary: [
        { title: 'Today Transaction Count', value: 1234 },
        { title: 'Weekly Transaction Count', value: 9999 },
        { title: 'Today Transaction Total Amount', value: 12340000 },
        { title: 'Weekly Transaction Total Amount', value: 12340000 }
      ]
    }
  }
}
</script>
