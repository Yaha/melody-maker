import Vue from 'vue'
import Router from 'vue-router'
import Maker from '@/app/maker/components/Maker'
import Documentation from '@/app/pages/components/Documentation'
import About from '@/app/pages/components/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'maker',
      component: Maker
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: Documentation
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
