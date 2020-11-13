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

html,body{overflow-x: hidden;   scroll-behavior: smooth;}

.bg-yellow{background: #FFC11C;}
.yellow {color:#FFC11C}

.bg-white {background: #ffffff;}
.white {color: #ffffff !important;}

.bg-dark {background: #202020 !important;}
.dark {color: #202020 !important;}

.bg-black {background: #000;}
.black {color: #000;}

.bold{font-weight: bold;}


</style>
