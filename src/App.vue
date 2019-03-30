<template>
  <div id="app">
    <navbar> </navbar>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue"
export default {
  components: {
    Navbar 
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

