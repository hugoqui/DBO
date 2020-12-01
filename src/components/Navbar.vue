<template>
<div> 
  <nav class="navbar navbar-expand-lg navbar-light bg-yellow fixed-top " >
    <a class="navbar-brand" href="/"><img alt="Logo DBO" style="height:65px" src="images/black_logo.png"></a>
    <button ref="toggle" class="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav mr-auto"></div>
      <form class="form-inline my-2 my-lg-0">
      <ul class="navbar-nav mr-auto">        
        <li class="nav-item">
          <router-link @click="$refs.toggle.click()" active-class="active" class="nav-link" to="/" exact>HOME</router-link>          
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" :class="isAbout?'active':''" href="#" id="navbarDropdown" role="button" 
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            WHO WE ARE
          </a>
          <div class="dropdown-menu">
            <router-link @click="$refs.toggle.click()" class="dropdown-item" active-class="dropdown-item-active" to="about" exact>ABOUT US</router-link>
            <router-link @click="$refs.toggle.click()" class="dropdown-item" active-class="dropdown-item-active" to="about#history">HISTORY</router-link>
            <router-link @click="$refs.toggle.click()" class="dropdown-item" active-class="dropdown-item-active" to="about#faith">DECLARATION OF FAITH</router-link>
            <router-link @click="$refs.toggle.click()" class="dropdown-item" active-class="dropdown-item-active" to="about#team">OUT TEAM</router-link>
            <router-link @click="$refs.toggle.click()" class="dropdown-item" active-class="dropdown-item-active" to="about#vision">VISION</router-link>
            <router-link @click="$refs.toggle.click()" class="dropdown-item" active-class="dropdown-item-active" to="about#mission">MISSION</router-link>
            <router-link @click="$refs.toggle.click()" class="dropdown-item" active-class="dropdown-item-active" to="about#mission">TESTIMONIES</router-link>
            <router-link @click="$refs.toggle.click()" class="dropdown-item" active-class="dropdown-item-active" to="about#alliance">PARTNERSHIPS</router-link>            
          </div>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" :class="isWhat?'active':''" href="#" id="navbarDropdown" role="button" 
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            WHAT WE DO
          </a>
          <div class="dropdown-menu">
            <router-link @click="$refs.toggle.click()" class="dropdown-item text-capitalize" active-class="dropdown-item-active" to="whatwedo" exact>DBO Kids</router-link>
            <router-link @click="$refs.toggle.click()" class="dropdown-item text-capitalize" active-class="dropdown-item-active" to="whatwedo#antigua" exact>Antigua</router-link>
            <router-link @click="$refs.toggle.click()" class="dropdown-item text-capitalize" active-class="dropdown-item-active" to="whatwedo#worship" exact>Worship Night</router-link>
            <router-link @click="$refs.toggle.click()" class="dropdown-item text-capitalize" active-class="dropdown-item-active" to="whatwedo#breakfast" exact>Breakfast with love</router-link>
            <router-link @click="$refs.toggle.click()" class="dropdown-item text-capitalize" active-class="dropdown-item-active" to="whatwedo#family" exact>Family Programs</router-link>
            <router-link @click="$refs.toggle.click()" class="dropdown-item text-capitalize" active-class="dropdown-item-active" to="whatwedo#sponsor" exact>School Scolarships</router-link>
            <router-link @click="$refs.toggle.click()" class="dropdown-item text-capitalize" active-class="dropdown-item-active" to="whatwedo#people" exact>Miission our Community, Our Family</router-link>
                      
          </div>
        </li>
        
        <li class="nav-item">
          <router-link class="nav-link" to="help">HOW YOU CAN HELP</router-link>          
        </li>
        
        <li class="nav-item">
          <router-link class="nav-link" to="contact">CONTACT US</router-link>          
        </li>
        <li class="nav-item border bg-dark pl-2 pr-2" style="border-radius:16px">
          <a class="nav-link yellow text-warning" href="https://donorbox.org/dbo-ministries-1" target="_blank">DONATE</a>
          <!-- <router-link class="nav-link yellow text-warning" to="donations" >DONACIONES</router-link> -->
        </li>
        
      </ul>
        <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
        <img src="https://assets.stickpng.com/images/580b585b2edbce24c47b282a.png" width="40" alt="">
        <img src="https://images.vexels.com/media/users/3/164649/isolated/preview/010f55d9bb5f8a28c3620583482d89ed-icono-de-idioma-de-bandera-de-estados-unidos-c--rculo-by-vexels.png" width="35" alt="">
      </form>

    </div>
  </nav>
</div>
</template>

<script>
export default {
  watch: {
    $route: function (val) {
      if (val.name == "About Us") {
        this.isAbout = true;
      } else {
        this.isAbout = false;
      }

      if (val.name == "What We Do") {
        this.isWhat = true;
      } else {
        this.isWhat = false;
      }

      if (val.name == "Help") {
        this.isHelp = true;
      } else {
        this.isHelp = false;
      }
    },
  },
  data() {
    return {
      isAbout: false,
      isWhat: false,
      isHelp: false,
    };
  },
};
</script>

<style>
.nav-item {
  margin-left: 20px;
  margin-right: 20px;
}
.nav-link,
.dropdown-item {
  font-family: Arial;
}
.dropdown-menu,
.dropdown-item {
  background: #111 !important;
  color: #ffc11c !important;
}

.dropdown-item-active {
  font-weight: bold;
}

@media all and (min-width: 992px) {
  .navbar .nav-item .dropdown-menu {
    display: none;
  }
  /* .navbar .nav-item:hover .nav-link{ color: #fff;  } */
  .navbar .nav-item:hover .dropdown-menu {
    display: block;
  }
  .navbar .nav-item .dropdown-menu {
    margin-top: 0;
  }
}
</style>
