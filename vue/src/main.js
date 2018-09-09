import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// bootstrap integration
import BootstrapVue from 'bootstrap-vue'

// font awesome integration
import './icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('fai', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  BootstrapVue,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
