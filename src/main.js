// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import { routes } from './routes';
Vue.use(VueRouter);
const router = new VueRouter({  routes});
Vue.config.productionTip = true

/**   LIBRARIES */


/**   COMPONENTS  -  Name convention: funkyMonkey   */



import NewTemplate from './components/NewTemplate'
Vue.component('NewTemplate',NewTemplate)


import funkyMonkey from './components/funkyMonkey'
Vue.component('funkyMonkey',funkyMonkey)

import lodash from './components/lib_objects/lodash.vue'
Vue.component('lodash',lodash)

const app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

