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

import funkyMonkey from './components/funkyMonkey'
Vue.component('funkyMonkey',funkyMonkey)

import lodash from './components/lib_objects/lodash.vue'
Vue.component('lodash',lodash)

import DataCachePage from './components/DataCachePage'
Vue.component('DataCachePage',DataCachePage)

import DataTools from './components/DataToolsMixin/DataTools.vue'
Vue.component('DataTools',DataTools)

import BlockPage from './components/Block/BlockPage.vue'
Vue.component('BlockPage',BlockPage)

import Block from './components/Block/Block.vue'
Vue.component('Block',Block)

import BlockItem from './components/Block/BlockItem.vue'
Vue.component('BlockItem',BlockItem)

import PageComponentClass from './components/PageComponentClass/PageComponentClass.vue'
Vue.component('PageComponentClass',PageComponentClass)


import FormInputPage from './components/FormInput/FormInputPage.vue'
Vue.component('FormInputPage',FormInputPage)



const app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

