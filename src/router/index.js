import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [

    { path: 'login', name: 'denglu', component: login }
  ]
})

export default router
