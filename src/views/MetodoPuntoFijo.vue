<template>
  <div class="container">
    <div class="row text-center mb-3">
      <div class="col-12">
        <div class="title__section">
          Método de Punto Fijo
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card card__admin p-5">
          <div class="title__section mb-3 text-center">Algoritmo 2.2</div>  
          <form @submit.stop.prevent="submit">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-4 col-12 mb-2">
                <div
                  class="form__group"
                  id="group_iteraciones"
                  :class="
                    validationForm($v.formFields.iteraciones, field.iteraciones)
                  "
                >
                  <label>Número de iteraciones</label>
                  <div class="form__group--input">
                    <input
                      type="text"
                      class="form__input"
                      v-model="$v.formFields.iteraciones.$model"
                      @blur="$v.formFields.iteraciones.$touch()"
                    />
                    <i class="form__validation--state fas fa-times-circle"> </i>
                  </div>
                  <small
                    class="form__error"
                    v-if="!submitted && !$v.formFields.iteraciones.required"
                  >
                    Campo requerido.
                  </small>
                </div>
              </div>
              <div class="col-12 text-center mt-3 mb-3">
                <b-button variant="success" @click="submit"> Generar </b-button>
              </div>
            </div>
          </form>

          <div class="row" v-if="items.length > 0">
            <div class="col-12">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Iteración</th>
                      <th scope="col">P(n)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in items" :key="index">
                      <th scope="row">{{ item.n }}</th>
                      <td>{{ item.p }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { customComponentActions } from "@/mixins/actions";
export default {
  name: "Home",

  mixins: [customComponentActions],

  data() {
    return {
      formFields: {
        iteraciones: "",
      },
      field: {
        iteraciones: "iteraciones",
      },
      items: [],
      submitted: false,
    };
  },

  validations: {
    formFields: {
      iteraciones: {
        required,
      },
    },
  },

  methods: {
    submit() {
      const me = this;
      me.submitted = true;
      // Metodo de libreria vuelidate
      me.$v.$touch();
      if (me.$v.$invalid) {
        me.submitted = false;
      } else {
        me.items = [];
        let b = 1.5 //b = p_0
        let tol = (10)**(-4);
        let n = 10;
        let i = 1;
        let p;

        for(i; i <= n; i++){
          p = me.g(b);

          if(Math.abs(p - b) < tol){
            console.log(p);
          }

          b = p;
          
          let item = {
            n: i,
            p: p,
          };

          me.items.push(item);
        }
      }
    },
    g(x) {
      return (1/2)*(10 - x**3)**(1/2);
    },
    reset(){
      const me = this;
      me.formFields.iteraciones = "";
      me.submitted = false;
      me.$v.formFields.$reset();
    }
  },
};
</script>
