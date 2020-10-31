<template>
<div> 
  <nav class="navbar navbar-expand-lg navbar-dark bg-white fixed-top " >
    <a class="navbar-brand" href="#"><img alt="Logo DBO" style="height:65px" src="images/black_logo.png"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav mr-auto"></div>
      <ul class="navbar-nav mr-auto">        
        <li class="nav-item">
          <router-link active-class="active" class="nav-link" to="/" exact>HOME</router-link>          
        </li>
        <li class="nav-item">
          <router-link active-class="active" class="nav-link" to="about">ABOUT US</router-link>          
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">HOW CAN I HELP?</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">WHAT WE DO</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CONTACT</a>
        </li>
        <li class="nav-item border bg-yellow">
          <a class="nav-link" href="#">DONATIONS</a>
        </li>
        
      </ul>
      
    </div>
  </nav>
</div>
</template>

<style>
  .nav-item{ margin-left: 20px; margin-right: 20px}
  .nav-link {color: #000 !important; font-family:Arial;}
</style>
