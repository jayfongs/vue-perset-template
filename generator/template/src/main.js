/**
 * @author: YouJie
 */

import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

// css
import 'normalize.css'
import '@/assets/scss/index.scss'

// plugins
<%_ if (options.application === 'mobile') { _%>
import 'lib-flexible'
import './plugins/vconsole'
<%_ } _%>
<%_ if (options['ui-framework'] === 'element-ui') { _%>
import './plugins/element-ui'
<%_ } _%>


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
