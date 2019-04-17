import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';

//Register VueResource inside the global view object of Vue
Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App)
})
