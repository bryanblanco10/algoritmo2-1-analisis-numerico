import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/metodo-de-biseccion',
    name: "metodoBiseccion",
    component: () =>
      import(/* webpackChunkName: "metodoBiseccion"*/ "@/views/MetodoBiseccion"),
  },

  {
    path: '/metodo-de-punto-fijo',
    name: "metodoPuntoFijo",
    component: () =>
      import(/* webpackChunkName: "metodoPuntoFijo"*/ "@/views/MetodoPuntoFijo"),
  },

  {
    path: '/parcial-metodo-de-newton',
    name: "metodoNewton",
    component: () =>
      import(/* webpackChunkName: "metodoNewton"*/ "@/views/Parcial"),
  },

  {
    path: '/parcial-spline-cubico-natural',
    name: "spline-cubico-natural",
    component: () =>
      import(/* webpackChunkName: "spline-cubico-natural"*/ "@/views/Parcial3"),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
