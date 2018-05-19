<template>
  <v-card class="card--flex-toolbar" style="background-color: white">
    <v-toolbar card prominent style="background-color: white">
      <v-toolbar-title class="px-3">{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-btn absolute dark fab bottom left color="yellow">
        <v-icon>add</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text style="height: 75vh;">
      <h1>{{ msg }}</h1>
      <div v-if="users" v-for="(user, index) in users" v-bind:key="index">
        <span>{{ user.email }}</span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_USERS } from '../store/user.mutations'

export default {
  name: 'Users',
  props: {
    msg: String,
    title: String
  },
  computed: {
    ...mapGetters([ 'users' ])
  },
  mounted () {
    this.fetchUsers()
  },
  methods: {
    fetchUsers () {
      this.$store.dispatch(FETCH_USERS, this.listConfig)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

button.btn.btn--absolute.btn--bottom.btn--floating.btn--left {
  left: -28px;
  bottom: -35px;
}
button.btn.btn--absolute.btn--bottom.btn--floating.btn--left.yellow {
  color: rgba(0,0,0,0.54);
}
</style>
