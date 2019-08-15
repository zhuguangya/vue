import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Admin from '@/components/Admin'
import Index from '@/components/Index'
import Show from '@/components/Show'
import Login from '@/components/Login'
import Member from '@/components/Member'
import Product from '@/components/Product'
import Buycar from '@/components/Buycar'
import Buytwo from '@/components/Buytwo'
import Buytree from '@/components/Buytree'
import Memberaddress from '@/components/Memberaddress'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/d',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/c',
      name: 'Index',
      component: Index
    },
    {
      path: '/Show',
      name: 'Show',
      component: Show
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Member',
      name: 'Member',
      component: Member
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    },
    {
      path: '/Buycar',
      name: 'Buycar',
      component: Buycar
    },
    {
      path: '/Buytwo',
      name: 'Buytwo',
      component: Buytwo
    },
    {
      path: '/Memberaddress',
      name: 'Memberaddress',
      component: Memberaddress
    },
    {
      path: '/Buytree',
      name: 'Buytree',
      component: Buytree
    }
  ]
})
