import Vue from 'vue'
import Vuex from 'vuex'

import Counter from './counter'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    Counter
  }
})

export default store
