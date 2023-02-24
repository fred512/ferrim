import Vue from 'vue'
import App from './App.vue'
import 'font-awesome/css/font-awesome.css'
import VueMq from 'vue-mq'
import store from './store/store'
Vue.use(VueMq, {
  breakpoints: {
    xs: 576,
    sm: 768,
    md: 960,
    lg: 1140,
    xl: Infinity
  },
  defaultBreakpoint: 'sm' // customize this for SSR
})
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './config/router'
Vue.use(BootstrapVue);
export const EventBus = new Vue();
 Vue.config.productionTip = true
new Vue({
  store,
  el: '#app',
  router,
  render: h => h(App)
})
