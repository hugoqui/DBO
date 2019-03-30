<template>
  <div id="app">
    <navbar> </navbar>
    <home> </home>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue"
import Home from"./Home.vue"
export default {
  components: {
    Navbar , Home
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>

