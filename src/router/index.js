import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import header from '../views/layouts/header.vue'
import footer from '../views/layouts/footer.vue'

Vue.use(VueRouter)

const routes = [
  {
    
      path: '/login',
      name: 'login',
      components: {default: Login}
    },

  
  ]

const router = new VueRouter({
  routes
})

export default router
