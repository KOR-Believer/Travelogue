import Vue from 'vue'
import Router from 'vue-router'
//import auth from './auth'
import login from './components/login.vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
//   scrollBehavior () {
//     return {
//       x: 0,
//       y: 0
//     }
//   },
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/logout',
      beforeEnter (to, from, next) {
        //auth.logout()
        next('/')
      }
    }
  ]
})