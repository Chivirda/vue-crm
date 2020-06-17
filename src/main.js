import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import datefilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', datefilter)

const firebaseConfig = {
  apiKey: "AIzaSyBH1wEc3EiVY6kLGx8uIGYljptMKyOY1mA",
  authDomain: "vue-crm-fc0ac.firebaseapp.com",
  databaseURL: "https://vue-crm-fc0ac.firebaseio.com",
  projectId: "vue-crm-fc0ac",
  storageBucket: "vue-crm-fc0ac.appspot.com",
  messagingSenderId: "470032414681",
  appId: "1:470032414681:web:fff0293991f193e5e98bc8",
  measurementId: "G-FMB1FKXME3"
}

firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

