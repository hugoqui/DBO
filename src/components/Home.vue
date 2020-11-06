<template>
  <div>
    <!-- carousel -->
    <div id="carouselExampleSlidesOnly"  class="carousel slide carousel-fade" data-ride="carousel" >

      <ol class="carousel-indicators">
        <li style="width:15px; height:15px; border-radius:50%" data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li style="width:15px; height:15px; border-radius:50%" data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li style="width:15px; height:15px; border-radius:50%" data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li style="width:15px; height:15px; border-radius:50%" data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol>


      <div class="carousel-inner">
        <div class="carousel-item active">
          <!-- <img src="images/bg1.jpg"  alt="..." /> -->
          <div style="background-image:url(images/bg1.jpg); background-size:cover; height:100vh"/>
        </div>
        <div class="carousel-item">
          <div style="background-image:url(images/bg2.jpg); background-size:cover; height:100vh"/>
        </div>
        <div class="carousel-item">
          <div style="background-image:url(images/bg3.jpg); background-size:cover; height:100vh"/>
        </div>
        <div class="carousel-item">
          <div style="background-image:url(images/bg4.jpg); background-size:cover; height:100vh"/>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <!-- passion. love bar -->
    <div class="container-fluid border">
      
      <div class="row text-center dark bold bg-dark p-3" style="height: 4rem; font-size:1.2rem">
        <div class="col yellow m-2">AMOR</div>
        <div class="col yellow m-2">PASION</div>
        <div class="col yellow m-2">SERVICIO</div>
      </div>
    </div>

    <!-- newsletter -->
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-7">
          <iframe
            class="w-100"
            height="300"
            src="https://www.youtube.com/embed/8zZu_CHZ_ZE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="col-md-5">
          <p class="dark">
            DBO ministerios está trabajando con la niñez, juventud y comunidad de Chimaltenango, Antigua Guatemala y Quiche, enfocando nuestra función en el desarrollo integral proveyendo alimentación, educación, salud, formación humana, consejería y evangelismo.
          </p>
          <p>
            Nos hemos dedicado principalmente al trabajo en calles y áreas de riesgo cubriendo necesidades básicas y humanas que todos necesitas, pero no todos poseen. 
          </p>

          <button class="btn btn-warning text-white btn-lg">
            Suscríbete a Nuestro Boletín de Noticias!
          </button>
        </div>
      </div>
    </div>

    <!-- map section -->
    <div class="mt-5 mb-5 header parallax map-container" style="padding: 3rem;background-image: linear-gradient(to bottom,rgba(0, 0, 0, 0.52),rgba(0, 0, 0, 0.73)),url('https://blog.compassion.com/wp-content/uploads/2011/04/Easter-in-Guatemala-feature.jpg');">
      <div class="container">
        <div class="row">
          <div class="col-md-5 offset-md-1">
            <h1 class="text-center text-white">Donde Trabajamos</h1>
            <map-vue class="" @showinfo="showInfoDeparment($event)" />
          </div>
          <div class="col-md-5 text-white">
            <h3 class="mt-5">{{ info.title }}</h3>
            <p>{{ info.content }}</p>
          </div>
        </div>
      </div>
    </div>


    <!-- mission vision meaning -->
    <div class="container" align="center" bottom="middle">
      <div class="row">
        <div class="col-sm" v-scroll-reveal.reset="{delay: 150, duration: 1000, opacity: 0, distance: '100px',}">
          <img width="150" src="images/vision.png" class="mb-3" />
          <br />
          <strong>VISION</strong>
          <br />
          <center class="mt-2">
            To achieve integral and spiritual development in people of our
            society with different living conditions, difficulties, physical,
            emotional and spiritual needs.
          </center>
        </div>

        <div class="col-sm" v-scroll-reveal.reset="{delay: 650, duration: 1000, opacity: 0, distance: '100px',}">
          <img width="150" src="images/mision.png" class="mb-3" />
          <br />
          <strong>MISION</strong>
          <br />
          <center class="mt-2">
            We are a Christ-centered ministry that seeks through our actions to
            transform and empower the lives of those most in need with love,
            power, dedication, passion, service and example.
          </center>
        </div>

        <div class="col-sm" v-scroll-reveal.reset="{delay: 1250,duration: 1000,opacity: 0,distance: '100px',}">
          <img width="150" src="images/meaning.png" class="mb-3" />
          <br />
          <strong>QUÉ SIFNIFICA DBO</strong>
          <br />
          <center class="mt-2">
            Una familia integrada por amigos sirviendo a Dios y al prójimo con la visión de poder mostrar su bondad por medio doe servicio a quienes no lo conocen! Lo que representa es una propuesta de cambio, servicio y amor. 
            <!-- Una oportunidad para las grandes necesidades de la humanidad. Promueve el menaje de Jesucristo como su principal bandera! -->
          </center>
        </div>
      </div>
    </div>


    <!-- how your support impact -->
    <div class="mt-5 header parallax map-container text-white" style="height:auto;padding: 3rem;background-image: linear-gradient(to bottom,rgba(0, 0, 0, 0.52),rgba(0, 0, 0, 0.73)),url('https://www.savethechildren.org/content/dam/global/images/countries/guatemala/guatemala-girls-m173492-hero.jpg/_jcr_content/renditions/cq5dam.thumbnail.1700.1700.jpg');">
      <div class="row">
        <div class="col-12 text-center mt-5 mb-5">          
          <h1 class="text-capitalize">Como tu Ayuda tiene un Impacto</h1>
        </div>
      </div>

      <div class="row text-center">
        <div class="col-md-4">          
          <img src="images/nutricion.jpg" class="img-fluid rounded-circle mb-3" alt="DBO"> <br>
          <h5 class="mt-3 bold text-uppercase"> Nutrición </h5>
          <p>
              Hasta el día de hoy durante el año el porcentaje de desnutrición en Guatemala ha subido un 200% aproximadamente según estadísticas del ministerio de salud publica. Para la realidad nacional lamentablemente estos no son casos que remiten a las áreas rurales del país si no también se extiende a las áreas urbanas. 
          </p>
        </div>

        <div class="col-md-4">           
          <img src="images/education.jpg" class="img-fluid rounded-circle mb-3" alt="DBO"> <br>
          <h5 class="mt-3 bold"> EDUCACIÓN </h5>
          <p>
            Ante la problemática actual la deserción escolar ha sido un factor importante, con datos que según el mineduc alcanzan casi un 35% de niños que han abandonado el sistema educativo.
            La niñez ha sido vulnerada y afectada por la falta de oportunidades de la realidad nacional.
          </p>
        </div>

        <div class="col-md-4">
          <img src="images/family.jpg" class="img-fluid rounded-circle mb-3" alt="DBO"> <br>
          <h5 class="mt-3 bold"> FAMILIA </h5>
          <p>
            Los hogares en Guatemala en los últimos 3 años aproximadamente se registran 25,000; el dolor latente y la desintegración extraoficial de matrimonios que se separan, pero no divorcian es uno de los grandes conflictos los cuales también son uno de los principales factores de riesgo para que niños sean involucrados en las pandillas.
          </p>
        </div>

        <div class="col-md-4">
            <img src="images/answer.jpg" class="img-fluid rounded-circle mb-3" alt="DBO"> <br>
            <h5 class="mt-3 bold"> NUESTRA RESPUESTA </h5>
            <p>
              Al identificar estas necesidades no podemos quedarnos sin una respuesta nuestro llamado y misión nos impulsa cada día para amar y servir a Dios tanto como al prójimo.
            </p>
        </div>

        <div class="col-md-4">
          <img src="images/contribution.jpg" class="img-fluid rounded-circle mb-3" alt="DBO"> <br>
            <h5 class="mt-3 bold"> TU CONTRIBUCIÓN </h5>
            <p>
              Tu contribución puede hacer la diferencia y promover la ayuda para jóvenes en riesgo, los cuales a través de DBO pueden recibir una oportunidad de estudio, alimento o de un circulo solido de amistades que lo puedan encaminar a conocer a Jesús.
            </p>
        </div>
      </div>
    </div>
    

</div>
</template>

<script>
import MapVue from "@/components/Map.vue";
export default {
  components: {
    MapVue,
  },
  data() {
    return {
      info: {
        title: "",
        content:"",
      },
    };
  },
  mounted(){
    this.showInfoDeparment("guatemala")
  },
  methods: {
    showInfoDeparment(args) {
      switch (args) {
        case "quiche":
          this.info = {
            title: "Quiché",
            content:
              "Departamento situado en el norocidente del país con una población de más de 800,000 personas con 4 idiomas mayas y español es uno de los departamentos multiculturales en Guatemala. Afectado al igual que chimaltenango por la desnutrición, pobreza extrema y analfabetismo.",
          };
          break;
        case "sacatepequez":
          this.info = {
            title: "Sacatepequez",
            content:
              "Uno de los sitios más reconocidos a nivel internacional ya que cuenta con Antigua Guatemala como su mayor fuerza económica a través del turismo, con una población de 330,469 personas es afectada por personas en situación de calle en la plaza principal. Cuenta con una amplia historia la cual se refleja en su arquitectura y cuidado siendo asi declarada patrimonio de la nación.",
          };
          break;
        case "chimaltenango":
          this.info = {
            title: "Chimaltenango",
            content:
              "Departamento situado a aproximadamente 50 kilómetros de la ciudad de Guatemala, con aproximadamente una población de casi 700,000 habitantes en 16 municipios, uno de los departamentos golpeados por el conflicto armado, con mayor migración en el país. Gran parte de su población está afectada por la pobreza, desnutrición, violencia y familias divididas."
          };
          break;
        default:
          this.info = {
            title: "El país de Guatemala",
            content:
              "País de la eterna primavera uno de los países afectados por la distribución de la riqueza, ya que se considera que el 75% de ella se encuentra en manos de 25 familias, con índice de 18% de analfabetismo que equivale a más de 2.5 millones de personas. En medio de su riqueza natural es extraño darnos cuenta que estos índices son tan altos. Por lo tanto las necesidades necesitan una respuesta contundente, es alli donde DBO ministerios respondiendo al llamado del Señor sirve cada día.",
          };
          break;
      }
    },
  },
};
</script>

<style >
.header {
  height: 500px;
  padding-top: 200px;
  background-size: cover;
  background-position-x: left;
  text-align: center;
}

.header button {
  padding: 20px;
  background: rgba(255, 255, 255, 0.6);
  border: solid 2px #fff;
  width: 300px;
  color: #000;
  margin: auto;
  font-weight: bold;
}
.header blockquote {
  color: #fff;
  text-shadow: 0px 0px 3px #000000;
  margin-left: auto;
  margin-right: auto;
}

.parallax {
  /* Set a specific height */
  height: 100vh;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
}

.active {
  font-weight: bold;
  border-bottom: 2px solid #000;
}

.map-container {
  height: 95vh;
}

.carousel-control-prev-icon{
  height: 4rem;
  width: 4rem;
  background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e");
  background-size:70%;
    background-color:rgba(0,0,0,0.8);
    border-radius: 50%;
}
.carousel-control-next-icon{
  height: 4rem;
  width: 4rem;
  background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e");
  background-size:70%;
  background-color:rgba(0,0,0,0.8);
  border-radius: 50%;
}

.carousel-inner{
  height: 90vh;
}

@media screen and (max-width: 600px) {
  .map-container {
    height: auto;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

}

</style>
