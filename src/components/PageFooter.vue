<template>
    <div id="footer" >
        <div class="bg-yellow" style="height:20px"></div>
        <div class="container yellow" style="padding:20px 0px;">
            <div class="row mt-5 mb-5">
                <div class="col-md-3">
                    <h3>QUIENES SOMOS</h3>
                    <router-link to="/" class="pill yellow">Historia</router-link>
                    <router-link to="/" class="pill yellow">Declaración de Fe</router-link>
                    <router-link to="/" class="pill yellow">Nuestro Equipo</router-link>
                    <router-link to="/" class="pill yellow">Misión</router-link>
                    <router-link to="/" class="pill yellow">Visión</router-link>
                    <router-link to="/" class="pill yellow">Testimonios</router-link>
                    <router-link to="/" class="pill yellow">Alianzas</router-link>
                </div>
                
                
                <div class="col-md-3">
                    <h3>QUE HACEMOS</h3>
                    <router-link to="/" class="pill yellow">DBO Kids</router-link>
                    <router-link to="/" class="pill yellow">Sale Antigua</router-link>
                    <router-link to="/" class="pill yellow">Worship Night</router-link>
                    <router-link to="/" class="pill yellow">Desayunos con Amor</router-link>
                    <router-link to="/" class="pill yellow">Becas Escolares</router-link>
                    <router-link to="/" class="pill yellow">Programas de Familias</router-link>
                    <router-link to="/" class="pill yellow">Misión Nuestro Pueblo Nuestra Familia</router-link>
                </div>
                
                <div class="col-md-3">
                    <h3>COMO AYUDAR</h3>
                    <router-link to="/" class="pill yellow">Voluntariado</router-link>
                    <router-link to="/" class="pill yellow">Forma parte del Equipo</router-link>
                    <router-link to="/" class="pill yellow">Asóciese con Nosotros</router-link>                    
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
                        DBO Ministries is a registered nonprofit organization. All donations are tax deductible in full or in part. <br>
                        © Copyright 2020. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    #footer{
        /* margin-top: 80px;         */
        background: #111;        
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
