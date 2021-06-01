import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import modules from './module'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules
})
