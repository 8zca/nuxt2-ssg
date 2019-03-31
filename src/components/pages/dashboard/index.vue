<template lang="pug">
  v-layout(row wrap)
    v-flex(xs12)
      h1 Dashboard
    v-flex(xs12)
      v-layout(row wrap)
        v-flex(d-flex xs6 md4)
          v-card(color="red lighten-1" flat dark)
            v-layout
              v-flex(xs4)
                v-card-text
                  v-icon(size="70") thumb_up
              v-flex(xs8)
                v-card-title.display-2(primary) 25%
                v-card-text DAILY ACTIVE USERS
        v-flex(d-flex xs6 md4)
          v-card(color="red lighten-1" falt dark)
            v-layout
              v-flex(xs4)
                v-card-text
                  v-icon(size="70") thumb_down
              v-flex(xs8)
                v-card-title.display-2(primary) 10%
                v-card-text MONTHLY ACTIVE USERS
        v-flex(d-flex xs6 md4)
          v-card(color="green lighten-1" flat dark)
            v-layout
              v-flex(xs4)
                v-card-text
                  v-icon(size="70") account_circle
              v-flex(xs8)
                v-card-title.display-2(primary) 70%
                v-card-text ACTIVE HOTELS
</template>
