<template>
  <div id="app">
    <navbar> </navbar>
    <home> </home>
    <page-footer></page-footer>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue"
import Home from"./Home.vue"
import PageFooter from"./PageFooter.vue"
export default {
  components: {
    Navbar , Home, PageFooter
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

