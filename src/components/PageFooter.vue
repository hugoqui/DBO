<template>
    <div id="footer" >
        <div class="bg-yellow" style="height:20px"></div>
        <div class="container yellow" style="padding:20px 0px;">
            <div class="row mt-5 mb-5">
                <div class="col-md-3">
                    <h3>IMPACT</h3>
                    <router-link to="/" class="pill yellow">Child Rescue</router-link>
                    <router-link to="/" class="pill yellow">Clean Water</router-link>
                    <router-link to="/" class="pill yellow">Container Shipping</router-link>
                    <router-link to="/" class="pill yellow">Total Village Transformation</router-link>
                </div>
                
                
                <div class="col-md-3">
                    <h3>ABOUT</h3>
                    <router-link to="/" class="pill yellow">Our Mission</router-link>
                    <router-link to="/" class="pill yellow">Our Strategy</router-link>
                    <router-link to="/" class="pill yellow">Our Leadership</router-link>
                    <router-link to="/" class="pill yellow">Our Story</router-link>
                </div>
                
                <div class="col-md-3">
                    <h3>SPONSOR</h3>
                    <router-link to="/" class="pill yellow">Child Sponsorship</router-link>
                    <router-link to="/" class="pill yellow">Sponsorship FAQ's</router-link>
                    <router-link to="/" class="pill yellow">How it works</router-link>                    
                </div>

                <div class="col-md-3">
                    <p style="padding:10px">
                        <i class="mr-4 fab fa-facebook fa-2x"></i>
                        <i class="mr-4 fab fa-youtube fa-2x"></i> 
                        <i class="mr-4 fab fa-paypal fa-2x"></i> <br>

                        <p class="mt-5">
                            +502 34567890 <br>                       
                            © DBO Ministerios, 2020
                        </p>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    #footer{
        /* margin-top: 80px;         */
        background: #000000;        
    }

    .pill {
        display: block;
        margin-top: 1rem;
        min-height: 2rem;
    }

    .pill:hover{
        color:#ddd;
        text-decoration: none;
    }
</style>
