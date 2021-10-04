<template>
  <div class="container">
    <div class="row text-center mb-3">
      <div class="col-12">
        <div class="title__section">
          Análisis Númerico
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-4 col-12 mb-3">
        <router-link to="/metodo-de-biseccion">
          <div class="card card__admin h-100">
            <img class="card-img-top h-75 mb-3" src="@/assets/img/biseccion.png" alt="biseccion">
            <div class="title__section text-center">Método de Bisección</div>  
          </div>
        </router-link>
      </div>
      <div class="col-lg-4 col-md-4 col-12 mb-3">
        <router-link to="/metodo-de-punto-fijo">
          <div class="card card__admin h-100">
            <img class="card-img-top h-75 mb-3" src="@/assets/img/puntofijo.png" alt="puntofijo">
            <div class="title__section text-center">Método de Punto Fijo</div>  
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {};
  }
};
</script>
