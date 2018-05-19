<template>
  <div class="home">
    <Users title="API Users" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Users from '@/components/Users.vue'

export default {
  name: 'home',
  components: {
    Users
  }
}
</script>
