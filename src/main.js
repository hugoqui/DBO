import Vue from 'vue'
import Router from 'vue-router';
import App from './App.vue'

import Home from './components/Home.vue'

Vue.config.productionTip = false

export default new Router({
  routes: [
      { path: '/', component: Home }
  ]
});

new Vue({
  routes,
  render: h => h(App),
}).$mount('#app')
