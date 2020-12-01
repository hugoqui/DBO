<template>
  <main class="mb-5">
      <div class=" parallax header" 
            style="background:url(images/help.jpg); background-size:cover; " >
          
          <h1 class="text-center text-white display-2" style="margin-top:10%;  text-shadow:0px 0px 16px #000">
              CÓMO AYUDAR
            </h1>
      </div>

      <div class="container">
        <div class="row mt-5 mb-5">
          <div class="col-md-4 text-center">              
              <a href="#volunteer"  style="width:100%; height:8rem; border-radius:1rem; padding-top:3rem;"
              v-scroll-reveal="{delay: 150, duration: 1000, opacity: 0, distance: '100px',}"
              class="shadow m-1 btn btn-lg btn-outline-dark options">VOLUNTARIADO</a>
          </div>
          <div class="col-md-4 text-center" style="border-right:solid; border-left:solid;">              
              <a href="#team"  style="width:100%; height:8rem; border-radius:1rem; padding-top:3rem;"
              v-scroll-reveal="{delay: 350, duration: 1000, opacity: 0, distance: '100px',}"
              class="shadow m-1 btn btn-lg btn-outline-dark options">FORMAR PARTE DEL EQUIPO</a>
          </div>
          <div class="col-md-4 text-center">              
              <a href="#aliance"  style="width:100%; height:8rem; border-radius:1rem; padding-top:3rem;"
              v-scroll-reveal="{delay: 550, duration: 1000, opacity: 0, distance: '100px',}"
              class="shadow m-1 btn btn-lg btn-outline-dark options">ASÓCIESE CON NOSOTROS</a>
          </div>
        </div>
      </div>

      <!-- volunteer -->
      <div id="volunteer" style="height:5vh mt-5"></div>
      <div  class="parallax text-white" style="height:60vh; background-image: linear-gradient(to bottom,rgba(0, 0, 0, 0.52),rgba(0, 0, 0, 0.73)), url('/images/volunteer.jpg'); padding-top:5rem; padding-bottom:2rem;">
          <h1 style="margin-top:10%;" class="text-center">VOLUNTARIADO</h1>
      </div>
      <div class="row">
          <div class="col-md-8 offset-md-2">
            <form>              
              <div class="row mt-5">
                <div class="col-12">
                  <h3>Formulario</h3>
                </div>
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

              <label>Teléfono *</label>
              <input type="text" placeholder="teléfono" class="form-control mb-2" required>
              
              <label>Mensaje *</label>
              <textarea type="text" placeholder="mensaje" class="form-control mb-2" required></textarea>

              <div class="row mt-5">                
                  <div class="col-md-6">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                    <label class="form-check-label" for="defaultCheck1">Recaudaciones </label>

                      <select class="form-control">
                        <option value="" disabled  selected>-- seleccionar</option>
                        <option value="" >Recolectar en tu Iglesia</option>                        
                        <option value="" >Recolectar en tu Colegio</option>                        
                        <option value="" >Recolectar en tu Universidad</option>                        
                        <option value="" >Recolectar en tu Comunidad</option>                        
                      </select>
                      <br>
                      <label>Frequencia </label>
                      <select class="form-control">
                        <option value=""  disabled selected>-- seleccionar</option>
                        <option value="">Mensual</option>
                        <option value="">Bimestral</option>
                        <option value="">Trimestral</option>
                        <option value="">Semestral</option>
                        <option value="">Anual</option>
                      </select>
                  </div>

                  <div class="col-md-6">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                    <label class="form-check-label" for="defaultCheck2">Te gustaría ayudarnos en: </label>

                      
                      <select class="form-control">
                        <option value="" disabled  selected>-- seleccionar</option>
                        <option value="">DBO Kids</option>
                        <option value="">Sale Antigua</option>
                        <option value="">Worship Night</option>
                        <option value="">Desayunos con Amor</option>
                        <option value="">Programas de Familias</option>
                        <option value="">Becas Escolares</option>
                        <option value="">Misión Nuestro Pueblo, Nuestra Familia</option>                        
                      </select>
                      <br>
                      <label>Frequencia </label>
                      <select class="form-control">
                        <option value=""  disabled selected>-- seleccionar</option>
                        <option value="">3 meses</option>
                        <option value="">6 meses</option>
                        <option value="">12 meses</option>
                      </select>
                  </div>
                  
              </div>

              
              <div class="text-right mt-3 mb-5">
                  <button class="btn btn-warning btn-lg" type="submit">ENVIAR</button>
              </div>
            </form>
          </div>
      </div>
      

      <!-- team -->
      <div id="team" style="height:5vh mt-5; mb-5"></div>
      <div  class="parallax text-white" style="height:60vh; background-image: linear-gradient(to bottom,rgba(0, 0, 0, 0.52),rgba(0, 0, 0, 0.73)), url('/images/team_bg.jpg'); padding-top:5rem; padding-bottom:2rem;">
          <h1 style="margin-top:10%;" class="text-center">FORMAR PARTE DEL EQUIPO</h1>
      </div>
      <div class="row">
          <div class="col-md-8 offset-md-2">
            <form>              
              <div class="row mt-5">
                <div class="col-12">
                  <h3>Formulario</h3>
                </div>
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

              <label>Teléfono *</label>
              <input type="text" placeholder="teléfono" class="form-control mb-2" required>
              
              <label>Mensaje *</label>
              <textarea type="text" placeholder="mensaje" class="form-control mb-2" required></textarea>

              <div class="row mt-5">                
                  <div class="col-md-6">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                    <label class="form-check-label" for="defaultCheck1">¿Quieres ayudarnos con tu profesión? </label>
                      <select class="form-control">
                        <option value="" disabled  selected>-- seleccionar</option>
                        <option value="" >Sí</option>                        
                        <option value="" >No</option>                                                                     
                      </select>
                      <br>
                      <label>Detalles </label>
                      <input type="text" class="form-control" placeholder="salud, trabajo social, cocina, etc.">
                  </div>

                  <div class="col-md-6">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                    <label class="form-check-label" for="defaultCheck2">Te gustaría ayudarnos en: </label>

                      
                      <select class="form-control">
                        <option value="" disabled  selected>-- seleccionar</option>
                        <option value="">DBO Kids</option>
                        <option value="">Sale Antigua</option>
                        <option value="">Worship Night</option>
                        <option value="">Desayunos con Amor</option>
                        <option value="">Programas de Familias</option>
                        <option value="">Becas Escolares</option>
                        <option value="">Misión Nuestro Pueblo, Nuestra Familia</option>                        
                      </select>
                      <br>
                      <label>Duración </label>
                      <select class="form-control">
                        <option value=""  disabled selected>-- seleccionar</option>                        
                        <option value="">6 meses</option>
                        <option value="">12 meses</option>
                      </select>
                  </div>
                  
              </div>
              
              <div class="text-right mt-3 mb-5">
                  <button class="btn btn-warning btn-lg" type="submit">ENVIAR</button>                  
              </div>
            </form>
          </div>
      </div>

      <!-- aliance -->
      <div id="aliance" style="height:5vh mt-5"></div>
      <div  class="parallax text-white" style="height:60vh; background-image: linear-gradient(to bottom,rgba(0, 0, 0, 0.52),rgba(0, 0, 0, 0.73)), url('/images/team_bg.jpg'); padding-top:5rem; padding-bottom:2rem;">
          <h1 style="margin-top:10%;" class="text-center">ASÓCIESE CON NOSOTROS</h1>
      </div>
      <div class="row">
          <div class="col-md-8 offset-md-2">
            <form>              
              <div class="row mt-5">
                <div class="col-12">
                  <h3>Formulario</h3>
                </div>

                <div class="col-md-12">
                  <!-- <input class="form-check-input" type="checkbox" value="" id="defaultCheck2"> -->
                  <label class="form-check-label" for="defaultCheck2">Tipo de Asociación: </label>                    
                    <select class="form-control mb-3">
                      <option value="" disabled  selected>-- seleccionar</option>
                      <option value="">Proyecto único (recaudaciones, actividades, etc)</option>                  
                      <option value="">Conexión de Iglesias (grupos juveniles, voluntariado, etc) </option>                  
                      <option value="">Alianza (asociaciones, clinicas médicas, etc)</option>                  
                    </select>                    
                </div>

                  <div class="col-md-6">
                      <label>Nombre de Institución *</label>
                      <input type="text" placeholder="nombre de institución" class="form-control mb-2 required">
                  </div>
                  <div class="col-md-6">
                      <label>Nombre de Contacto *</label>
                      <input type="text" placeholder="nombre" class="form-control mb-2" required>
                  </div>
              </div>

              <label>Email *</label>
              <input type="text" placeholder="email" class="form-control mb-2" required>

              <label>Teléfonos *</label>
              <input type="text" placeholder="teléfonos" class="form-control mb-2" required>
              
              <label>Mensaje *</label>
              <textarea type="text" placeholder="mensaje" class="form-control mb-2" required></textarea>

              <!-- <div class="row mt-5">                
                  <div class="col-md-6">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                    <label class="form-check-label" for="defaultCheck1">¿Quieres ayudarnos con tu profesión? </label>
                      <select class="form-control">
                        <option value="" disabled  selected>-- seleccionar</option>
                        <option value="" >Sí</option>                        
                        <option value="" >No</option>                                                                     
                      </select>
                      <br>
                      <label>Detalles </label>
                      <input type="text" class="form-control" placeholder="salud, trabajo social, cocina, etc.">
                  </div>

                  <div class="col-md-6">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                    <label class="form-check-label" for="defaultCheck2">Te gustaría ayudarnos en: </label>

                      
                      <select class="form-control">
                        <option value="" disabled  selected>-- seleccionar</option>
                        <option value="">DBO Kids</option>
                        <option value="">Sale Antigua</option>
                        <option value="">Worship Night</option>
                        <option value="">Desayunos con Amor</option>
                        <option value="">Programas de Familias</option>
                        <option value="">Becas Escolares</option>
                        <option value="">Misión Nuestro Pueblo, Nuestra Familia</option>                        
                      </select>
                      <br>
                      <label>Duración </label>
                      <select class="form-control">
                        <option value=""  disabled selected>-- seleccionar</option>                        
                        <option value="">6 meses</option>
                        <option value="">12 meses</option>
                      </select>
                  </div>
                  
              </div> -->
              
              <div class="text-right mt-3">
                  <button class="btn btn-warning btn-lg" type="submit">ENVIAR</button>
              </div>
            </form>
          </div>
      </div>
    </main>
</template>

<script>
export default {
  watch: {
    $route: function (val) {
      this.$nextTick(() => {
        if (this.$route.hash) {
          const el = document.querySelector(this.$route.hash);
          el && el.scrollIntoView();
        }
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$route.hash) {
        const el = document.querySelector(this.$route.hash);
        el && el.scrollIntoView();
      }
    });
  },
};
</script>

<style lang="css" scoped>
.options {
  background: #222;
  color: #ffc11c !important;
}
</style>