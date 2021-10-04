<template>
  <div class="container">
    <div class="row text-center mb-3">
      <div class="col-12">
        <div class="title__section">
          Método de Bisección
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card card__admin p-5">
          <div class="title__section mb-3 text-center">Algoritmo 2.1</div>  
          <form @submit.stop.prevent="submit">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-4 col-12 mb-2">
                <div
                  class="form__group"
                  id="group_inferior"
                  :class="
                    validationForm($v.formFields.inferior, field.inferior)
                  "
                >
                  <label>Extremo inferior del intervalo</label>
                  <div class="form__group--input">
                    <input
                      type="text"
                      class="form__input"
                      v-model="$v.formFields.inferior.$model"
                      @blur="$v.formFields.inferior.$touch()"
                    />
                    <i class="form__validation--state fas fa-times-circle"> </i>
                  </div>
                  <small
                    class="form__error"
                    v-if="!submitted && !$v.formFields.inferior.required"
                  >
                    Campo requerido.
                  </small>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-12 mb-2">
                <div
                  class="form__group"
                  id="group_superior"
                  :class="
                    validationForm($v.formFields.superior, field.superior)
                  "
                >
                  <label>Extremo superior del intervalo</label>
                  <div class="form__group--input">
                    <input
                      type="text"
                      class="form__input"
                      v-model="$v.formFields.superior.$model"
                      @blur="$v.formFields.superior.$touch()"
                    />
                    <i class="form__validation--state fas fa-times-circle"> </i>
                  </div>
                  <small
                    class="form__error"
                    v-if="!submitted && !$v.formFields.superior.required"
                  >
                    Campo requerido.
                  </small>
                </div>
              </div>
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
        inferior: "",
        superior: "",
        iteraciones: "",
      },
      field: {
        inferior: "inferior",
        superior: "superior",
        iteraciones: "iteraciones",
      },
      items: [],
      submitted: false,
    };
  },

  validations: {
    formFields: {
      inferior: {
        required,
      },
      superior: {
        required,
      },
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
        let a = parseInt(me.formFields.inferior); //Extremo inferior del intervalo;
        let b = parseInt(me.formFields.superior); //Extremo superior del intervalo;
        let n = parseInt(me.formFields.iteraciones); //Número de iteraciones
        let tol = 10 ** -4; //Error permitido en 0,0001
        let i = 1;
        let p = "";
        let FA = me.f(a);

        for (i; i <= n; i++) {
          p = a + (b - a) / 2;
          let FP = me.f(p);
          if (FP == 0 || (b - a) / 2 < tol) {
            console.log(p);
          } else if (FA * FP > 0) {
            a = p;
            FA = FP;
          } else if (FA * FP < 0) {
            b = p;
            let FB = FP;
            console.log(FB);
          }

          let item = {
            n: i,
            p: p,
          };

          me.items.push(item);

          console.log(me.items);
        }
      }
    },
    f(x) {
      return x ** 3 + 4 * x ** 2 - 10;
    },
    reset(){
      const me = this;
      me.formFields.inferior = me.formFields.superior = me.formFields.iteraciones = "";
      me.submitted = false;
      me.$v.formFields.$reset();
      me.items = [];
    }
  },
};
</script>
