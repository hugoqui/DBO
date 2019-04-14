<template>
    <div>
        <div class="header parallax">
            <button> DONAR </button>            
            <div class="container">
                <div class="row">
                    <blockquote style="margin-top:50px;" class="col-md-6 offset-md-3">
                        Y el Rey responderá y les dirá: De cierto os digo que en cuanto lo hicisteis 
                        a uno de estos mis hermanos más pequeños, a mí me lo hicisteis. 
                        <br> <strong>Mateo 25:40 </strong>
                    </blockquote> 
                </div>            
            </div>
        </div>           
        
        <div class="text-center">
            <img alt="Logo DBO" style="height:130px; margin:20px;" class="img-fluid" src="images/black_logo.png">
        </div>
        

        <div class="container">
            <div class="row">
                <p class="sub-title gray-text col-md-8 offset-md-2" style="margin-top:3rem; margin-bottom:3rem"> 
                    <center>
                        <b>
                            Asociación DBO Ministerios se ha dedicado principalmente al trabajo en calles y        
                            áreas de riesgo, nunca se ha pensado en menguar la ayuda brindada al prójimo,        
                            ya que todo está fundamentado en la base bíblica de Mateo 25: 36 - 40.
                        </b>
                    </center>
                </p>
            </div>            
        </div>
           
        <div class="container" align="center" bottom="middle">
            <div class="row">
                <div class="col-sm">
                <img width="203px" height="202px" src="images/vision.jpeg">
                <br>
                    <center>VISIÓN</center>
                    <br>
                    <center>  
                        Alcanzar el desarrollo integral y
                        espiritual en personas de diferentes
                        condiciones, dificultades y
                        necesidades físicas, materiales y
                        emocionales de nuestra sociedad. 
                    </center>
                </div>
                <div class="col-sm">
                <img width="204px" height="203px" src="images/mision.jpeg">                
                <br>
                    <center>MISIÓN</center>
                    <br>
                    <center>
                        Somos un Ministerio Cristocéntrico
                        que busca transformar y
                        empoderar vidas de los más
                        necesitados y rechazados por la
                        sociedad convencional.
                    </center>
                </div>
                <div class="col-sm">
                <img width="207" height="202" src="images/quienessomos.jpeg">
                <br>
                    <center>¿QUIÉNES SOMOS?</center> 
                    <br>
                    <center>
                        Asociación DBO está conformada por un grupo personas voluntarias, 
                        quienes son encargados de coordinar las actividades que realiza 
                        cada uno de los ministerios.
                    </center>
                </div>
            </div>
        </div>
      
    </div>
</template>

<style >
    .header {
        height: 500px;
        padding-top:200px;
        background-image: url('/images/home.jpg');
        background-size: cover;
        text-align:center;
    }

    .header button {
        padding:20px;
        background: rgba(255,255,255,0.4);
        border: solid 2px #fff;
        width:300px;
        color:#fff;      
      
    }
    .header blockquote{
        color: #fff;        
        text-shadow: 2px 2px 3px #000;
    }
    
   .gray-text {
       color: #6F6F6F;
   }

   .sub-title {
       font-size: 18px;
   }

   .parallax { 
        /* Set a specific height */
        height: 500px; 

        /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
