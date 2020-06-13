import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import datefilter from '@/filters/date.filter'
import 'materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false

Vue.filter('date', datefilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
