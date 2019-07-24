import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

// 使用插件 Vue.use()
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
