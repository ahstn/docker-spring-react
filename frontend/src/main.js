import Vue from 'vue'
import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'

import ApiService from '@/common/api.service'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

ApiService.init()
Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
