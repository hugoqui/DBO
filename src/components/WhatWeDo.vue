<template>
  <div>
        <!-- kids -->
        <div class="container " >
            <div class="row " style="margin-top:8rem"> 
                <div class="col-12">
                    <h1 class="bold mt-3 text-center mb-3">DBO Kids</h1>
                </div>
                <div class="col-md-6 text-dark ">
                    <p>
                        Every Saturday morning we open our ministry home to 50-70 children who come from at risk areas, homes with extreme poverty and different backgrounds. Working with them involves motivating and inspiring them to have a personal relationship with Jesus. We strive to create a place where they feel loved and cared for. We do this through welcome, games, worship time, small group time and snack time. Our goal is to support them with nutritional and educational resources while encouraging the personal dreams of each child. Our prayer is that each child will remember the truths they learn with us, come to know Christ as their Savior, know that they are never alone and that they are so so loved. 
                    </p>                    
                </div>

                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-6" v-for="n in 4" :key="n">
                            <img :src="'images/kids'+n+'.jpg'" alt="DBO" class="m-1 img-thumbnail    img-fluid">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <hr>
        <div id="antigua" style="height:10vh"/>
        <!-- antigua -->
        <div class="container " >
            <div class="row " style="margin-top:3rem"> 
                <div class="col-12">
                    <h1 class="bold mt-3 text-center mb-3">Antigua</h1>
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-6" v-for="n in 4" :key="n">
                            <img :src="'images/antigua'+n+'.jpg'" alt="DBO" class="m-1 img-thumbnail    img-fluid">
                        </div>
                    </div>
                </div>
                <div class="col-md-6 text-dark ">
                    <p>
                        Every Friday night we go to the Park in Antigua, Guatemala to share with the children, youth and adults who live and work in the streets. We have been working with and tracking their different needs for more than 2 years. Our primary purpose is to share the love that we have received from our good Father and replicate it in the way that He does, without prejudice and discrimination, showing grace and mercy. We do this through a moment of praise, evangelism, prayer and at the end sharing a hot meal. Sharing brotherly love with hugs, smiles and a genuine love for each person. This fulfils our call to serve the least of these. 
                    </p>
                </div>                
            </div>
        </div>

        <hr>
        <div id="worship" style="height:10vh"/>
        <!-- worship -->
        <div class="container " >
            <div class="row " style="margin-top:3rem"> 
                <div class="col-12">
                    <h1 class="bold mt-3 text-center mb-3">Monday  Night Worship</h1>
                </div>
                <div class="col-md-6 text-dark ">
                    <p>
                        On Monday nights we provide an open space for children, youth and adults who work as shoe shiners in the streets, live in extreme poverty and lack acceptance in society. Our primary goal is to reach this population, change their surroundings and provide a Christian circle of friendship different from what they experience every day providing them love and hope through praise, worship, lesson and food. We hope that through this they see and know Jesus and his grace and mercy. We hope that this is a place where they feel confident and accepted. 
                    </p>
                </div>

                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-6" v-for="n in 4" :key="n">
                            <img :src="'images/wp'+n+'.jpg'" alt="DBO" class="m-1 img-thumbnail    img-fluid">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr>
        <div id="breakfast" style="height:10vh"/>
        <!-- breakfast -->
        <div class="container " >
            <div class="row " style="margin-top:3rem"> 
                <div class="col-12">
                    <h1 class="bold mt-3 text-center mb-3">Breakfasts With Love </h1>
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-6" v-for="n in 4" :key="n">
                            <img :src="'images/bk'+n+'.jpg'" alt="DBO" class="m-1 img-thumbnail    img-fluid">
                        </div>
                    </div>
                </div>
                <div class="col-md-6 text-dark ">
                    <p>
                        Every Sunday morning our ministry serves a nutritious breakfast to people who live 
                        and work in the streets. The majority of them come from dysfunctional families and homes with scarce resources. Our main focus is on children, youth and adults who work as shoe shiners in the park. Our primary goal is to make the love of God known. We believe that his mercy can reach their lives so that they may know Jesus as their only love and Savior

                    </p>
                </div>                
            </div>
        </div>

        <hr>
        <div id="family" style="height:10vh"/>
        <!-- family -->
        <div class="container " >
            <div class="row " style="margin-top:3rem"> 
                <div class="col-12">
                    <h1 class="bold mt-3 text-center mb-3">Family/Child Sponsorships</h1>
                </div>
                <div class="col-md-6 text-dark ">
                    <p>
                        DBO currently has 5 children sponsored through our ministry. These children attend the school of another ministry in the area. We pay their tuition and receive their report cards. This sponsorship also includes monthly food and vitamins. We deliver the food to their families once a month. On this home visit we visit with the family, ask questions, and pray. We are committed to making sure the needs of these children and their families are covered. This area of ministry is one of the most important to us. We are invested in the lives of these families and they trust us. Again, we pray that they see Jesus in us. 
                    </p>
                </div>     
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-6" v-for="n in 4" :key="n">
                            <img :src="'images/family'+n+'.jpg'" alt="DBO" class="m-1 img-thumbnail    img-fluid">
                        </div>
                    </div>
                </div>                           
            </div>
        </div>

        <hr>
        <div id="sponsor" style="height:10vh"/>
        <!-- sponsor -->
        <div class="container " >
            <div class="row " style="margin-top:3rem"> 
                <div class="col-12">
                    <h1 class="bold mt-3 text-center mb-3">Becas Escolares </h1>
                </div>
                <div class="col-md-6 text-center">
                    <h1 class="mt-5">BECAS  ESCOLARES</h1>
                    <!-- <div class="row">
                        <div class="col-md-6" v-for="n in 4" :key="n">
                            <img :src="'images/family'+n+'.jpg'" alt="DBO" class="m-1 img-thumbnail    img-fluid">
                        </div>
                    </div> -->
                </div>
                <div class="col-md-6 text-dark ">
                    <p>
                       En DBO Ministerios creemos en el fortalecimiento del área educativa de jóvenes y niños por lo cual nuestra implementación se realiza de la siguiente manera: Cubrir matrícula y mensualidades de los establecimientos educativos. Brindando seguimiento al rendimiento educativo de los beneficiarios.
                    </p>
                    <p>
                        El apoyo incluye alimentos y vitaminas mensuales. Esto se realiza a través del proyecto de visitas a familias. 
                    </p>
                    <p>
                        <b>Metodología: </b> En alianza con Mi especial tesoro, en los últimos años se ha realizado apoyo de becas académicas contribuyendo al desarrollo académico de nuestra ciudad.
                    </p>
                </div>                
            </div>
        </div>

        <hr>
        <div id="people" style="height:10vh"/>
        <!-- people -->
        <div class="container " >
            <div class="row " style="margin-top:3rem"> 
                <div class="col-12">
                    <h1 class="bold mt-3 text-center mb-3">Misión Nuestro Pueblo, Nuestra Familia </h1>
                </div>
                <div class="col-md-6 text-dark pt-5">
                    <p>
                        En DBO ministerios, Aldea Labor de falla, Chimaltenango y aldea Pacajá II, Quiche. Worship Night a mediano plazo con un equipo de jóvenes que han mostrado pasión por las áreas no alcanzadas por el evangelio. 
                    </p>
                    <p>
                        <b>Metodología: </b>Actividades con niños, bolsas de alimentos, jornada médica y dental.
                    </p>
                </div>     
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-6" v-for="n in 4" :key="n">
                            <img :src="'images/people'+n+'.jpg'" alt="DBO" class="m-1 img-thumbnail    img-fluid">
                        </div>
                    </div>
                </div>                           
            </div>
        </div>

  </div>
</template>

<script>
export default {
  watch: {
    $route: function (val) {
      this.$nextTick(() => {
        if (this.$route.hash) {
          const el = document.querySelector(this.$route.hash);
          el && el.scrollIntoView();
          // setTimeout(() => {
          //     let y = window.scrollY
          //     y = y -1
          //     window.scrollTo(0,y)
          // }, 300);
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

<style>
</style>