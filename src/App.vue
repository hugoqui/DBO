<template>
  <div>    
    <navbar> </navbar>
    <!-- <home> </home> -->
    <router-view/>
    <page-footer></page-footer>
    
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
// import Home from"./components/Home.vue"
import PageFooter from"./components/PageFooter.vue"
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    Navbar ,  PageFooter    
  }
}
</script>

<style>

</style>
