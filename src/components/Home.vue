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
            DBO Ministries is working with the children, youth and communities of Chimaltenango, Antigua and Quiche, focusing on fundamental development providing nutrition, education, healthcare, human formation, counseling and evangelism. We have decicated ourselves to working in the streets and in áreas of high risk covering basic human needs that all have, but aren´t always met because of scarce resources. 
          </p>

          <a class="btn btn-warning text-white btn-lg" href="https://lb.benchmarkemail.com//listbuilder/signupnew?UOpPXfYpHY4tJnE673dETP5pwVnAjsSIXaL3uIi4JVPtO5iNRn8gS049TyW7spdJ" target="_blank">
            Subscribe to our monthly newsletter!
          </a >
        </div>
      </div>
    </div>

    <!-- map section -->
    <div class="mt-5 mb-5 header parallax map-container" style="padding: 3rem;background-image: linear-gradient(to bottom,rgba(0, 0, 0, 0.52),rgba(0, 0, 0, 0.73)),url('https://blog.compassion.com/wp-content/uploads/2011/04/Easter-in-Guatemala-feature.jpg');">
      <div class="container">
        <div class="row">
          <div class="col-md-5 offset-md-1">
            <h1 class="text-center text-white">Where we work</h1>
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
            The visión of DBO Ministries is to achieve fundamental and spiritual development in people of our society. Focusing on physical, spiritual and emotional needs of those living in extreme poverty, in the streets and in áreas of high risk. 
          </center>
        </div>

        <div class="col-sm" v-scroll-reveal.reset="{delay: 650, duration: 1000, opacity: 0, distance: '100px',}">
          <img width="150" src="images/mision.png" class="mb-3" />
          <br />
          <strong>MISSION</strong>
          <br />
          <center class="mt-2">
            We are a Christ-centered ministry seeking through our actions to transform and empower the lives of those most in need and rejected by conventional society. Actions that reflect the Word of God charged with love, power, dedication, passion, service and example. 
          </center>
        </div>

        <div class="col-sm" v-scroll-reveal.reset="{delay: 1250,duration: 1000,opacity: 0,distance: '100px',}">
          <img width="150" src="images/meaning.png" class="mb-3" />
          <br />
          <strong>What does DBO mean?</strong>
          <br />
          <center class="mt-2">
            A family made up of friends serving God and our neighbors with the visión of being able to show His kindness through service to those who do not know. What we represent is a proposal for change, service and love.             
          </center>
        </div>
      </div>
    </div>


    <!-- how your support impact -->
    <div class="mt-5 header parallax map-container text-white" style="height:auto;padding: 3rem;background-image: linear-gradient(to bottom,rgba(0, 0, 0, 0.52),rgba(0, 0, 0, 0.73)),url('https://www.savethechildren.org/content/dam/global/images/countries/guatemala/guatemala-girls-m173492-hero.jpg/_jcr_content/renditions/cq5dam.thumbnail.1700.1700.jpg');">
      <div class="row">
        <div class="col-12 text-center mt-5 mb-5">          
          <h1 class="text-capitalize">How does your help make an impact?</h1>
        </div>
      </div>

      <div class="row text-center">
        <div class="col-md-4 zoom">          
          <img src="images/nutricion.jpg" class="img-fluid rounded-circle mb-3" alt="DBO"> <br>
          <h5 class="mt-3 bold text-uppercase"> Nutrition </h5>
          <p>
             During this year(2020) the percentage of malnutrition in Guatemala has gone up approximately 200%according to statistics from the ministry of public health. In reality, these are not cases that relate to the rural áreas of the country, mainly the urba centers. 
          </p>
        </div>

        <div class="col-md-4 zoom">           
          <img src="images/education.jpg" class="img-fluid rounded-circle mb-3" alt="DBO"> <br>
          <h5 class="mt-3 bold"> Education </h5>
          <p>
            Faced with the current problems, school dropout has been an important factor, data from the ministry of education says that somewhere around 35% of children have dropped out of school. Children have been affected by the lack of opportunities and the national reality.
          </p>
        </div>

        <div class="col-md-4 zoom">
          <img src="images/family.jpg" class="img-fluid rounded-circle mb-3" alt="DBO"> <br>
          <h5 class="mt-3 bold"> Family </h5>
          <p>
            The households in Guatemala in the last 3 years approximately registered 25,000; the latent pain and unofficial disintegration of marriages that separate, but do not divorce is one of the great conflicts which are also one of the main risk factors for children to be involved in gangs.
          </p>
        </div>

        <div class="col-md-4 zoom">
            <img src="images/answer.jpg" class="img-fluid rounded-circle mb-3" alt="DBO"> <br>
            <h5 class="mt-3 bold"> Our Response </h5>
            <p>
              When we identify these needs we can´t sit down and not answer the call. Our call and misión impel us to work each and every day to love and serve God as well as our neighbors. 
            </p>
        </div>

        <div class="col-md-4 zoom">
          <img src="images/contribution.jpg" class="img-fluid rounded-circle mb-3" alt="DBO"> <br>
            <h5 class="mt-3 bold"> Your contribution </h5>
            <p>
              Your contribution can make a difference and promote help for at risk youth who through DBO can receive an opportunity to study, recieve food or form a solid circle of friends who can lead them to know Jesus.
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
        content: "",
      },
    };
  },
  mounted() {
    this.showInfoDeparment("guatemala");
  },
  methods: {
    showInfoDeparment(args) {
      switch (args) {
        case "quiche":
          this.info = {
            title: "Quiché",
            content:
              "A department located in the northwest part of the country with a population of more tan 800,000. With 4 Mayan languages and Spanish spoken, it is one of the multicultural departments in Guatemala. Like Chimaltenango, it is deeply affected by malnutrition, extreme poverty and illiteracy.",
          };
          break;
        case "sacatepequez":
          this.info = {
            title: "Sacatepequez",
            content:
              "One of the most internationally recognized sites. Antigua, Guatemala´s greatest economic force is tourism, with a population of 330,469. Many people live on the streets in the main square. It has a long history which is reflected in its architecture and care. It has been declared a natural heritage. ",
          };
          break;
        case "chimaltenango":
          this.info = {
            title: "Chimaltenango",
            content:
              "A deprtment located approximately 50 kilometers from Guatemala City, with a popultaion of almost 700,000 inhabitants in 16 municipalities. One of the departments greatly affected by armed conflicto, with the highest migration in the country. Much of its population is affected by poverty, malnutrition, violence and divided families ",
          };
          break;
        default:
          this.info = {
            title: "The country of Guatemala",
            content:
              "Land of Eternal Spring is one of the countries affected by the distribution of wealth, since it is known that 75% of it is in the hands of 25 families, with an illiteracy rate of 18% that is equivalent to more tan 2.5 million people. In the midst of its natural wealth, it is hard to realice that these rates are so high. Therefore, these needs warrant a strong response, it is here where DBO Ministries answers the call to serve each and every day. ",
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

.carousel-control-prev-icon {
  height: 4rem;
  width: 4rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e");
  background-size: 70%;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 50%;
}
.carousel-control-next-icon {
  height: 4rem;
  width: 4rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e");
  background-size: 70%;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 50%;
}

.carousel-inner {
  height: 100vh;
}

@media screen and (max-width: 600px) {
  .map-container {
    height: auto;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
</style>
