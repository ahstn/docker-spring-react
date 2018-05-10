<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-if="users" v-for="(user, index) in users" v-bind:key="index">
      <span>{{ user.email }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_USERS } from '../store/user.mutations'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
</style>
