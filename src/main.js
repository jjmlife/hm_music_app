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
  Image,
  Switch,
  Sticky
} from 'vant'

import './icons'
import '@/assets/styles/normal.css'
import '@/assets/styles/global.scss'
import NavBar from '@/components/common/nav-bar/index.js'

Vue.config.productionTip = false

Vue.use(Icon)
Vue.use(Button)
Vue.use(Swipe)
Vue.use(SwipeCell)
Vue.use(SwipeItem)
Vue.use(Search)
Vue.use(Image)
Vue.use(Switch)
Vue.use(Sticky)

Vue.use(NavBar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
