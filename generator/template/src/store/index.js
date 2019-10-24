/**
 * @author: YouJie
 */

import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger'
import state from './state'
import mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'

Vue.use(Vuex)

const debug = process.env.VUE_APP_VUEX_LOGGER === 'true'

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: debug,
  plugins: debug ? [logger()] : []
})
