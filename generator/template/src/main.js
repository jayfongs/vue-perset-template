/**
 * @author: YouJie
 */

import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

// plugins
<%_ if (options['ui-framework'] === 'element-ui') { _%>
import './plugins/element-ui.js'
<%_ } _%>

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
