<template>
  <div>
    <!-- carousel -->
    <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade" data-ride="carousel" >
      <div class="carousel-inner" style="height: 100vh">
        <div class="carousel-item active">
          <img src="images/bg1.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="images/bg2.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="images/bg3.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="images/bg4.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleSlidesOnly"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleSlidesOnly"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <!-- passion. love bar -->
    <div class="container-fluid border">
      <!-- <div class="text-center m-3">
        <img
          alt="Logo DBO"
          style="height: 130px; margin: 20px"
          class="img-fluid"
          src="images/black_logo.png"
        />
      </div> -->
      <div class="row text-center dark bold bg-dark p-3" style="height: 4rem">
        <div class="col yellow m-2">LOVE</div>
        <div class="col yellow m-2">PASSION</div>
        <div class="col yellow m-2">SERVICE</div>
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
            DBO ministries is working with the children, youth and community of
            Chimaltenango, Antigua Guatemala and Quiche, focusing our function
            on integral development by providing food, education, health, human
            formation, counseling and evangelism. <br />
            <br />
            We have mainly dedicated ourselves to work in streets and risk
            areas, covering basic and human needs that everyone needs, but not
            everyone has.
            <br />
            <b> Matthew 25: 36-40</b>
          </p>

          <button class="btn btn-warning text-white btn-lg">
            SUSCRIBE TO OUR NEWSLETTER
          </button>
        </div>
      </div>
    </div>

    <!-- map section -->
    <div class="mt-5 mb-5 header parallax map-container" style="padding: 3rem;background-image: linear-gradient(to bottom,rgba(0, 0, 0, 0.52),rgba(0, 0, 0, 0.73)),url('https://blog.compassion.com/wp-content/uploads/2011/04/Easter-in-Guatemala-feature.jpg');">
      <div class="container">
        <div class="row">
          <div class="col-md-5 offset-md-1">
            <h1 class="text-center text-white">Where We Work</h1>
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
          <img width="150" src="images/vision.jpeg" />
          <br />
          <strong>VISION</strong>
          <br />
          <center>
            To achieve integral and spiritual development in people of our
            society with different living conditions, difficulties, physical,
            emotional and spiritual needs.
          </center>
        </div>

        <div class="col-sm" v-scroll-reveal.reset="{delay: 650, duration: 1000, opacity: 0, distance: '100px',}">
          <img width="150" src="images/mision.jpeg" />
          <br />
          <strong>MISION</strong>
          <br />
          <center>
            We are a Christ-centered ministry that seeks through our actions to
            transform and empower the lives of those most in need with love,
            power, dedication, passion, service and example.
          </center>
        </div>

        <div class="col-sm" v-scroll-reveal.reset="{delay: 1250,duration: 1000,opacity: 0,distance: '100px',}">
          <img width="150" src="images/quienessomos.jpeg" />
          <br />
          <strong>WHAT DOES DBO MEAN</strong>
          <br />
          <center>
            A family, made up of many people with a vision of power through
            service, establish relationships with people from children,
            adolescents, youth and adults. What it represents is a proposal for
            change, service and love for others. An opportunity for the great
            needs of humanity. It promotes the message of Jesus Christ as its
            main banner.
          </center>
        </div>
      </div>
    </div>


    <!-- how your support impact -->
    <div class="mt-5 header parallax map-container text-white" style="height:auto;padding: 3rem;background-image: linear-gradient(to bottom,rgba(0, 0, 0, 0.52),rgba(0, 0, 0, 0.73)),url('https://www.savethechildren.org/content/dam/global/images/countries/guatemala/guatemala-girls-m173492-hero.jpg/_jcr_content/renditions/cq5dam.thumbnail.1700.1700.jpg');">
      <div class="row">
        <div class="col-12 text-center mt-5 mb-5">          
          <h1 class="text-capitalize">How your support has an impact</h1>
        </div>
      </div>

      <div class="row text-center">
        <div class="col-md-4">          
          <img src="https://www.hopeoflifeintl.org/wp-content/uploads/2015/06/circle1.png" class="img-fluid rounded-circle" alt="DBO"> <br>    
          <h5 class="mt-3 bold"> NUTRITION </h5>
          <p>
              Until today, during the year the percentage of malnutrition in
              Guatemala has risen by approximately 200% according to statistics
              from the Ministry of Public Health. Unfortunately, for the
              national reality, these are not cases that refer to rural areas of
              the country but also extend to urban areas.
          </p>
        </div>

        <div class="col-md-4">           
          <img src="https://www.hopeoflifeintl.org/wp-content/uploads/2015/06/circle1.png" class="img-fluid rounded-circle" alt="DBO"> <br>    
          <h5 class="mt-3 bold"> EDUCATION </h5>
          <p>
              Faced with the current problem, school dropout has been an
              important factor, with data that according to the mineduc reach
              almost 35% of children who have dropped out of the educational
              system. Children have been violated and affected by the lack of
              opportunities in the national reality.
          </p>
        </div>

        <div class="col-md-4">
          <img src="https://www.hopeoflifeintl.org/wp-content/uploads/2015/06/circle1.png" class="img-fluid rounded-circle" alt="DBO"> <br>    
            <h5 class="mt-3 bold"> FAMILY </h5>
            <p>
                Households in Guatemala in the last 3 years have approximately
                25,000; the latent pain and unofficial disintegration of marriages
                that separate, but do not divorce is one of the great conflicts
                which are also one of the main risk factors for children to be
                involved in gangs.  
            </p>
        </div>

        <div class="col-md-6">
            <img src="https://www.hopeoflifeintl.org/wp-content/uploads/2015/06/circle1.png" class="img-fluid rounded-circle" alt="DBO"> <br>    
            <h5 class="mt-3 bold"> OUR ANSWER </h5>
            <p>
                By identifying these needs we cannot remain without an answer, our
                call and mission prompts us each day to love and serve God as well
                as our neighbor.
            </p>
        </div>

        <div class="col-md-6">
          <img src="https://www.hopeoflifeintl.org/wp-content/uploads/2015/06/circle1.png" class="img-fluid rounded-circle" alt="DBO"> <br>    
            <h5 class="mt-3 bold"> YOUR CONTRIBUTION </h5>
            <p>
                Your contribution can make a difference and promote help for young
                people at risk, who through DBO can receive an opportunity to
                study, food or a solid circle of friends that can guide them to
                know Jesus
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
        title: "Guatemala",
        content:
          "DBO Ministries has mainly worked with homless and people in risk areas.",
      },
    };
  },
  methods: {
    showInfoDeparment(args) {
      switch (args) {
        case "quiche":
          this.info = {
            title: "Quiché",
            content:
              "Quiché is a department of Guatemala. It is in the heartland of the K'iche' people, to the north-west of Guatemala City. The capital is Santa Cruz del Quiché.",
          };
          break;
        case "sacatepequez":
          this.info = {
            title: "Sacatepequez",
            content:
              "Sacatepéquez is one of the 22 departments of Guatemala. The name comes from Sacatepéquez, a city from November 21, 1542 until July 29, 1773 when it was destroyed by the 1773 Guatemalan Earthquake. Sacatepéquez means grasshill in the Nahuatl language.",
          };
          break;
        case "chimaltenango":
          this.info = {
            title: "Chimaltenango",
            content:
              "Located to the east are Guatemala Department, home to Guatemala City, and Sacatepéquez Department, while also bordered by Quiché Department and Baja Verapaz Department to the north, Escuintla Department and Suchitepéquez Department to the south, and Sololá Department to the west. The capital of Chimaltenango is located about 54 kilometers away from Guatemala City.",
          };
          break;
        default:
          this.info = {
            title: "Chimaltenango",
            content:
              "Located to the east are Guatemala Department, home to Guatemala City, and Sacatepéquez Department, while also bordered by Quiché Department and Baja Verapaz Department to the north, Escuintla Department and Suchitepéquez Department to the south, and Sololá Department to the west. The capital of Chimaltenango is located about 54 kilometers away from Guatemala City.",
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

@media screen and (max-width: 600px) {
  .map-container {
    height: auto;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
</style>
