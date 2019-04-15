<template>
    <div>
        <div class="header parallax" style="background-image: url('/images/home.jpg');">
            <div class="offset-md-6 col-md-5">
                <div class="container">
                    <div class="row" style="text-align:center">
                        <button> DONATE </button>            
                        <blockquote style="margin-top:50px;" class=" offset-1 col-10 offset-sm-0">
                            And the King shall answer and say unto them, Verily I say unto you, Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me. 
                            <br> <strong>Matthew 25:40 </strong>
                        </blockquote> 
                    </div>            
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
                            DBO Ministries has mainly worked with homless and people in risk areas.  <br>
                            We have never thought of decreasing the help we give to our neighbor,
                            since this is founded in our biblical base. Matthew 25: 36-40                            
                        </b>
                    </center>
                </p>
            </div>            
        </div>
           
        <div class="container" align="center" bottom="middle">
            <div class="row">
                <div class="col-sm" v-scroll-reveal.reset="{ delay: 150, duration: 1000, opacity:0, distance:'100px' }">
                     <img width="150" src="images/vision.jpeg">
                     <br>
                    <strong>VISION</strong>
                    <br>
                    <center>  
                        To achieve integral and spiritual development in people of our society with different living conditions, difficulties, physical, emotional and spiritual needs. 
                    </center>
                </div>

                <div class="col-sm" v-scroll-reveal.reset="{ delay: 650, duration: 1000, opacity:0, distance:'100px' }">
                    <img width="150" src="images/mision.jpeg">                
                    <br>
                    <strong>MISION</strong>
                    <br>
                    <center>
                        We are a Christ-centered ministry that seeks through our actions to transform and empower the lives of those most in need with love, power, dedication, passion, service and example.
                    </center>
                </div>

                <div class="col-sm" v-scroll-reveal.reset="{ delay: 1250, duration: 1000, opacity:0, distance:'100px' }">
                    <img width="150" src="images/quienessomos.jpeg">
                    <br>
                    <strong>WHO WE ARE</strong> 
                    <br>
                    <center>
                        Association DBO is made up of a team of Directors who coordinate the activities carried out by the Leader of each area of ministry. Each area of ministry has approximately 15-20 volunteers.
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
        background-size: cover;
        background-position-x: left;
        text-align:center;
    }

    .header button {
        padding:20px;
        background: rgba(255,255,255,0.6);
        border: solid 2px #fff;
        width:300px;
        color:#000;      
        margin:auto;
        font-weight: bold;
    }
    .header blockquote{
        color: #fff;        
        text-shadow: 0px 0px 3px #000000;
        margin-left: auto;
        margin-right: auto;
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
        margin:0;
    }

    .active { font-weight: bold; border-bottom: 2px solid #000}
</style>
