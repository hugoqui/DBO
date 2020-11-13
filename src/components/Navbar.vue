<template>
<div> 
  <nav class="navbar navbar-expand-lg navbar-light bg-yellow fixed-top " >
    <a class="navbar-brand" href="/"><img alt="Logo DBO" style="height:65px" src="images/black_logo.png"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav mr-auto"></div>
      <form class="form-inline my-2 my-lg-0">
      <ul class="navbar-nav mr-auto">        
        <li class="nav-item">
          <router-link active-class="active" class="nav-link" to="/" exact>INICIO</router-link>          
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" :class="isAbout?'active':''" href="#" id="navbarDropdown" role="button" 
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            QUIENES SOMOS
          </a>
          <div class="dropdown-menu">
            <router-link class="dropdown-item" active-class="dropdown-item-active" to="about" exact>ACERCA DE DBO</router-link>
            <router-link class="dropdown-item" active-class="dropdown-item-active" to="about#history">HISTORIA</router-link>
            <router-link class="dropdown-item" active-class="dropdown-item-active" to="about#faith">DECLARACIÓN DE FE</router-link>
            <router-link class="dropdown-item" active-class="dropdown-item-active" to="about#alliance">DECLARACIÓN DE FE</router-link>
            
          </div>
        </li>


        <!-- <li class="nav-item">
          <router-link active-class="active" class="nav-link" to="about">QUIENES SOMOS</router-link>          
        </li> -->

        <li class="nav-item">
          <a class="nav-link" href="#">QUE HACEMOS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">COMO AYUDAR</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CONTACTO</a>
        </li>
        <li class="nav-item border bg-dark pl-2 pr-2" style="border-radius:16px">
          <router-link class="nav-link yellow text-warning" to="donations" >DONACIONES</router-link>
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
  watch:{
    $route:function(val){
      if (val.name=="About Us") {
        this.isAbout = true
      } else {
        this.isAbout = false
      }

    }
  },
  data(){
    return{
      isAbout:false,
    }
  }
}
</script>

<style>
  .nav-item{ margin-left: 20px; margin-right: 20px}
  .nav-link, .dropdown-item { font-family:Arial;}
  .dropdown-menu, .dropdown-item{background: #FFC11C !important; color:#111 !important}

  .dropdown-item-active{
    font-weight: bold;
  }
</style>
