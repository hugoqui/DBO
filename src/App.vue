<template>
  <div>    
    <navbar> </navbar>
    
    <a style="position:fixed; bottom:1rem; width:100px; height:100px; background:#111; right:1rem; border-radius:50%; padding-top:40px; z-index:9; border:solid #ffc11c"
      class="yellow text-center"
     href="https://donorbox.org/dbo-ministries-1" target="_blank">DONATE</a>

    <router-view/>
    <page-footer></page-footer>
    
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
// import Home from"./components/Home.vue"
import PageFooter from "./components/PageFooter.vue";
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "app",
  components: {
    Navbar,
    PageFooter,
  },
};
</script>

<style>
html,
body {
  overflow-x: hidden;
  /* scroll-behavior: smooth; */
}

.bg-yellow {
  background: #ffc11c;
}
.yellow {
  color: #ffc11c;
}

.bg-white {
  background: #ffffff;
}
.white {
  color: #ffffff !important;
}

.bg-dark {
  background: #202020 !important;
}
.dark {
  color: #202020 !important;
}

.bg-black {
  background: #000;
}
.black {
  color: #000;
}

.bold {
  font-weight: bold;
}

.zoom > img {
  transition: all 300ms;
}
.zoom:hover > img {
  transform: scale(1.1);
}

.zoom2 {
  transition: all 500ms;
}
.zoom2:hover {
  transform: scale(1.1);
}
</style>
