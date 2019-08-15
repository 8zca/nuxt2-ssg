<template lang="pug">
  v-layout(row wrap)
    v-flex(xs12)
      h1 About
    v-flex(xs12)
      p This is sample page
    v-flex(xs12)
      h2 Transactions
      v-data-table(:headers="transactions.headers" :items="transactions.data" :items-per-page="2")
</template>
