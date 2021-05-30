import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Icon,
  Button,
  Swipe,
  SwipeCell,
  SwipeItem,
  Search,
  Image
} from 'vant'

import './icons'
import '@/assets/styles/normal.css'

Vue.config.productionTip = false

Vue.use(Icon)
Vue.use(Button)
Vue.use(Swipe)
Vue.use(SwipeCell)
Vue.use(SwipeItem)
Vue.use(Search)
Vue.use(Image)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
