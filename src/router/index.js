import Vue from 'vue'
import VueRouter from 'vue-router'
import Meal from '../components/Meal.vue'
import PageNotFound from '../components/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Meal',
    component: Meal
  },
  {
    path:'/:catchAll(.*)',
    name:"NotFound",
    component:PageNotFound
  }
 
  
]

const router = new VueRouter({
  routes
})

export default router
