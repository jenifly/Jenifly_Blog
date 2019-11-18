import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import '@/router/prepare'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import '@/assets/themes/style.scss'

Vue.config.productionTip = false
Vue.use(mavonEditor)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
