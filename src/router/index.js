import Vue from 'vue'
import VueRouter from 'vue-router'
import PageHome from '../views/PageHome.vue'
import PageSucess from '../views/PageSucess.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageHome
  },
  {
    path: '/sucess',
    name: 'sucess',
    component: PageSucess
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
