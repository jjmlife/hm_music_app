import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Icon,
  Button,
  Swipe,
  SwipeCell,
  SwipeItem
} from 'vant'

import './icons'

Vue.config.productionTip = false

Vue.use(Icon)
Vue.use(Button)
Vue.use(Swipe)
Vue.use(SwipeCell)
Vue.use(SwipeItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
