import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Books from '@/components/Books'
import CreateBook from '@/components/CreateBook'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/books',
      name: 'books',
      component: Books
    },
    {
      path: '/create-book',
      name: 'create-book',
      component: CreateBook
    }
  ]
})
