<template>
  <div>
    <div class="parallax text-white" style="height:100vh ;background-image: linear-gradient(to bottom,rgba(0, 0, 0, 0.52),rgba(0, 0, 0, 0.73)), url('/images/bg5.jpg'); padding-top:5rem; padding-bottom:2rem;">            
        <div class="row" style="margin-top:20%">
            <div class="col-12 text-center"> <h1 class="display-1">Contáctanos</h1> </div>                                
        </div> 
    </div>

    <div class="container" style="margin-top:0;">
        <div class="row" style="margin-top: -10vh; margin-bottom:3rem" >
            <div class="col-md-8 offset-md-2 shadow p-5 bg-white" > 
                <h2 class="text-center">ESCRÍBENOS CON TUS PREGUNTAS O SOLICITUDES </h2>
                <p class="text-center">Consultas generales</p>
                <form>
                    <div class="row">
                        <div class="col-md-6">
                            <label>Nombre *</label>
                            <input type="text" placeholder="nombre" class="form-control mb-2" required>
                        </div>
                        <div class="col-md-6">
                            <label>Apellido *</label>
                            <input type="text" placeholder="apellido" class="form-control mb-2 required">
                        </div>
                    </div>
                    <label>Email *</label>
                    <input type="text" placeholder="email" class="form-control mb-2" required>
                    <label>Asunto</label>
                    <input type="text" placeholder="asunto" class="form-control mb-2">
                    <label>Mensaje *</label>
                    <textarea type="text" placeholder="mensaje" class="form-control mb-2" required></textarea>
                    
                    <div class="text-right">
                        <button class="btn btn-warning btn-lg" type="submit">ENVIAR</button>
                    </div>
                </form>
            </div>

        </div>        
    </div>

    <div class="container">
        <div class="row mb-3">
            <div class="col">
                <hr class="mt-2 mb-5">
                <h3>TELÉFONO</h3>
                <h4>
                    +502 7725-4762 <br>
                    +502 4693-3937 <br>                       
                </h4>

                <br>
                <h3>CORREO</h3>
                <h4>
                    info@dboministries.org <br>


                </h4>
            </div>
        </div>

    </div>
  </div>   
</template>

<script>
export default {};
</script>

<style scoped>
label {
  font-weight: bold !important;
}
</style>