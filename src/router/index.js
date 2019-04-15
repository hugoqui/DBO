import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/', component: Home, name: 'Home'
        },
        {
            path: '/about', component: About, name: 'About Us'
        }
    ]
})