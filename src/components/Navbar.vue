<template>
<div> 
  <nav class="navbar navbar-expand-lg navbar-light bg-yellow fixed-top " >
    <a class="navbar-brand" href="#"><img alt="Logo DBO" style="height:65px" src="images/black_logo.png"></a>
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
        <li class="nav-item">
          <router-link active-class="active" class="nav-link" to="about">QUIENES SOMOS</router-link>          
        </li>
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
          <a class="nav-link yellow text-warning" href="#" >DONACIONES</a>
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

<style>
  .nav-item{ margin-left: 20px; margin-right: 20px}
  .nav-link { font-family:Arial;}
</style>
