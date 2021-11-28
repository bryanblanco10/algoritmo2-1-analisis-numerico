<template>
  <div class="container">
    <div class="row text-center mb-3">
      <div class="col-12">
        <div class="title__section">
          Parcial tercer corte (Spline cúbico natural)
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card card__admin p-2">
          <div class="title__section mb-3 text-center">Algoritmo 3.4</div>
          <div class="row">
            <div class="col-12 mb-2">
              <div class="title">Coeficientes</div>
              <div v-for="(item, index) in coefficients" :key="index">
                <div><strong>{{ item.title }}</strong> : {{ item.values }}</div>
              </div>
            </div>
            <div class="col-12 mb-2">
              <div class="title">Polimonios</div>
              <div v-for="(item, index) in polynomials" :key="index">
                <div><strong>{{ item.title }}</strong> : {{ item.values }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coefficients: [],
      polynomials: [],
    };
  },

  mounted() {
    this.loadAlgoritmo()
  },

  methods: {
    loadAlgoritmo() {
      const me = this;
      const n = 4;
      const k = n - 1;
      let x = [0, 1, 2, 3]
      let a = [me.f(x[0]), me.f(x[1]), me.f(x[2]), me.f(x[3])]
      let h = [0, 0, 0]
      let alpha = [0, 0, 0]
      let l = [0, 0, 0, 0]
      let u = [0, 0, 0, 0]
      let z = [0, 0, 0, 0]
      let c = [0, 0, 0, 0]
      let b = [0, 0, 0, 0]
      let d = [0, 0, 0, 0]
      let aj = [0, 0, 0]
      let bj = [0, 0, 0]
      let cj = [0, 0, 0]
      let dj = [0, 0, 0]

      for(let i = 0; i < k; i++) {
        h[i] = x[i + 1] - x[i]
      }

      for(let i = 1; i < k; i++) {
        alpha[i] = ((3/h[i])*(a[i+1]-a[i])) - ((3/h[i-1])*(a[i]-a[i-1]))
      }

      l[0] = 1

      for(let i = 1; i < k; i++) {
        l[i] = 2*(x[i+1] - x[i-1]) - (h[i-1]*u[i-1])
        u[i] = h[i]/l[i]
        z[i] = (alpha[i] - h[i-1]*z[i-1])/l[i]
      }

      l[k] = 1

      for(let j = 2; j >= 0; j--) {
        c[j] = z[j] - u[j]*c[j+1]
        b[j] = ((a[j+1]-a[j])/h[j])-((h[j]*(c[j+1] + 2*c[j]))/3)
        d[j] = (c[j+1]-c[j])/3*h[j]
      }

      for(let i = 0; i < k; i++) {
        aj[i] = a[i]
      }

      for(let i = 0; i < k; i++) {
        bj[i] = b[i]
      }

      for(let i = 0; i < k; i++) {
        cj[i] = c[i]
      }

      for(let i = 0; i < k; i++) {
        dj[i] = d[i]
      }

      me.coefficients.push(
        {
          title: 'aj',
          values: aj,
        },
        {
          title: 'bj',
          values: bj,
        },
        {
          title: 'cj',
          values: cj,
        },
        {
          title: 'dj',
          values: dj,
        }
      )
      
      for(let i = 0; i < k; i++) {
        me.polynomials.push(
          {
            title: `S${i}`,
            values: `${aj[i]} + ${bj[i]}(x - ${x[i]}) + ${cj[i]}(x - ${x[i]})^2 + ${dj[i]}(x - ${x[i]})^3`
          }
        )
      }

    },
    f(x) {
      return Math.exp(x)
    },
  },
};
</script>
