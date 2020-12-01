<template>
    <div id="footer" >
        <div class="bg-yellow" style="height:20px"></div>
        <div class="container yellow" style="padding:20px 0px;">
            <div class="row mt-5 mb-5">
                <div class="col-md-3">
                    <h3>WHO WE ARE</h3>
                    <router-link to="/about" class="pill yellow">About Us</router-link>
                    <router-link to="/about#history" class="pill yellow">History</router-link>
                    <router-link to="/about#faith" class="pill yellow">Declaration of Fatih</router-link>
                    <router-link to="/about#team" class="pill yellow">Our Team</router-link>
                    <router-link to="/about#vision" class="pill yellow">Vision</router-link>
                    <router-link to="/about#mission" class="pill yellow">Mission</router-link>
                    <router-link to="/about#mission" class="pill yellow">Testimonies</router-link>
                    <router-link to="/about#alliance" class="pill yellow">Partnerships</router-link>
                </div>
                
                
                <div class="col-md-3">
                    <h3>WHAT WE DO</h3>
                    <router-link to="/whatwedo#" class="pill yellow">DBO Kids</router-link>
                    <router-link to="/whatwedo#antigua" class="pill yellow"> Antigua</router-link>
                    <router-link to="/whatwedo#worship" class="pill yellow">Worship Night</router-link>
                    <router-link to="/whatwedo#breakfast" class="pill yellow">Breakfast with love</router-link>
                    <router-link to="/whatwedo#family" class="pill yellow">Family Programs</router-link>
                    <router-link to="/whatwedo#sponsor" class="pill yellow">School Scolarships</router-link>
                    <router-link to="/whatwedo#people" class="pill yellow">Mission our Community, Our Family</router-link>
                </div>
                
                <div class="col-md-3">
                    <h3>HOW CAN YOU HELP</h3>
                    <router-link to="/help#volunteer" class="pill yellow">Volunteering</router-link>
                    <router-link to="/help#team" class="pill yellow">Become part of our team</router-link>
                    <router-link to="/help#aliance" class="pill yellow">Partner with us</router-link>                    
                </div>

                <div class="col-md-3">
                    <p style="padding:10px">
                        <a href="https://www.facebook.com/dboministerios" class="yellow" target="_blank">
                            <i class="mr-4 fab fa-facebook fa-2x"></i>
                        </a>
                        <a href="https://www.instagram.com/dbo_ministerios/" class="yellow" target="_blank">
                            <i class="mr-4 fab fa-instagram fa-2x"></i> 
                        </a>
                        <a href="https://www.youtube.com/channel/UC4bgBXqvnvfd3jFSgPeVLfw" class="yellow" target="_blank">
                            <i class="mr-4 fab fa-youtube fa-2x"></i> 
                        </a>
                        <a href="https://wa.me/50246933937" class="yellow" target="_blank">
                            <i class="mr-4 fab fa-whatsapp fa-2x"></i> 
                        </a>
                        
                        <p class="mt-5">
                            info@dboministries.org <br>
                            +502 7725-4762 <br>                       
                            +502 4693-3937 <br>                       
                            © DBO Ministerios, 2020
                        
                    </p>
                </div>
            </div>
        </div>
        
        <div class="container-fluid" style="background:#888; color:#111; font-size:12px; font-weight:bold">
            <div class="row">
                <div class="col-md-4 offset-md-1  p-3">
                    <span>Financial</span> |
                    <span>Privacy Policy</span> |
                    <span>Sitemap</span> 
                </div>
                <div class="col-md-6 text-right p-3">
                    <span>Numero de Asociación: 34567890</span> |
                    <span>+502 4693 3937</span> |
                    <span>info@dboministries.org</span> 
                </div>
            </div>
            <div class="row">
                <div class="col-12  text-center">
                    <p>
                        <!-- DBO Ministries is a registered nonprofit organization. All donations are tax deductible in full or in part. <br> -->
                        © Copyright 2020. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
#footer {
  /* margin-top: 80px;         */
  background: #111;
}

#footer a:hover {
  color: #fff;
}

.pill {
  display: block;
  margin-top: 1rem;
  min-height: 2rem;
}

.pill:hover {
  color: #ddd;
  text-decoration: none;
}
</style>
