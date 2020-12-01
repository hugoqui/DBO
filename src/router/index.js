import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Inicio from '@/components/Inicio'

import About from '@/components/About'
import Donations from '@/components/Donations'
import WhatWeDo from '@/components/WhatWeDo'
import Contact from '@/components/Contact'
import Help from '@/components/Help'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {

    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }

  },
  routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/donations', component: Donations, name: 'Donations' },
    { path: '/about', component: About, name: 'About Us' },
    { path: '/whatwedo', component: WhatWeDo, name: 'What We Do' },
    { path: '/help', component: Help, name: 'Help' },
    { path: '/contact', component: Contact, name: 'Contact' },
  ]
})