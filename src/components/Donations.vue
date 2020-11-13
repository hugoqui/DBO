<template>
  <main class="mb-5">
      <div class=" parallax header" 
            style="background:url(images/donation-bg.jpg); background-size:cover; " >
          
          <h1 class="text-center text-white display-3" style="margin-top:10rem; text-shadow:0px 0px 16px #000">
              DONACIONES
            </h1>
      </div>

    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <img src="images/black_logo.png"  class="m-5" alt="DBO" height="200">
            </div>
        </div>

        <div class="row m-3">     
            <div class="col-md-6">
                <div class="row">
                    <div class="col">
                        <span :class="amount==20 ?'active':''" class="m-1 btn btn-outline-dark opts"  @click="amount=20">$20.00</span>
                        <span :class="amount==50 ?'active':''" class="m-1 btn btn-outline-dark opts"  @click="amount=50">$50.00</span>
                        <span :class="amount==100?'active':''" class="m-1 btn btn-outline-dark opts" @click="amount=100">$100.00</span>
                        <span :class="amount==250?'active':''" class="m-1 btn btn-outline-dark opts" @click="amount=250">$250.00</span>
                        <span :class="amount==500?'active':''" class="m-1 btn btn-outline-dark opts" @click="amount=500">$500.00</span>
                    </div>                    
                </div>
            </div>

        </div>

        <div class="row m-3">
            <div class="col-md-5">                
                <div class="input-group mt-4" >
                    <div class="input-group-prepend" >
                        <span class="input-group-text" style="font-size:2rem">$</span>
                    </div>
                    <input type="number" v-model="amount" class="form-control text-right" style="font-size:2rem; font-weight:bold;">
                    <div class="input-group-append">
                        <span class="input-group-text" style="font-size:2rem">USD</span>
                    </div>
                </div>
            </div>
            <div class="col-md-5 offset-md-1">
                <label>Frecuencia</label>                
                <select class="form-control" v-model="frequency">                    
                    <option value="una vez" selected>Una vez</option>
                    <option value="mensual">Mensual</option>
                </select>
            </div>
        </div>

        <div class="row m-3 mb-5">
            <div class="col-12 mt-5">
                <h1 class="text-center yellow">Propósito</h1>
            </div>
            
            <div class="col-md-4 text-center mt-4" v-for="item in propuses" :key="item.id">
                <div :class="porpuse==item.name?'p-active':''" @click="porpuse=item.name"
                     class="m-1 shadow bg-light opts" style="height:8rem; border-radius:1rem">
                    <h4 class="p-1 pt-5 ">{{item.title}}</h4>
                </div>
            </div>
           
        </div>
    </div>

  </main>
</template>

<script>
export default {
    data(){
        return {
            amount:20,
            porpuse:'kids',
            frequency: 'una vez',
            propuses: [
                {name: "kids", title: "DBO Kid's"},
                {name: "antigua", title: "Sale Antigua"},
                {name: "desayunos", title: "Desayunos\n con Amor"},
                {name: "cultos", title: "Cultos"},
                {name: "familias", title: "Apoyo a Familias"},
                {name: "pueblo", title: "Nuestro Pueblo"},
                {name: "becas", title: "Becas Escolares"},
                {name: "administrativo", title: "Gastos Administrativos"},
                {name: "clinicas", title: "Clínicas"},
                {name: "inlges", title: "Clases de Inglés"},
            ]
        }
    }

}
</script>

<style lang="css" scoped>
.p-active{
    background: #333 !important;
    color:#FFC11C;
    border: 4px solid #ffc11c;    
}
.opts{
    transition:all 600ms;
}
</style>