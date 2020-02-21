import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const title = process.env.VUE_APP_TITLE

const router = new Router({
  mode: process.env.VUE_APP_ROUTER_MODE,
  base: process.env.BASE_URL,
  routes: []
})

router.beforeEach((to, from, next) => {
  // 设置页面title
  if (to.meta.title) {
    document.title = `${to.meta.title} - ${title}`
  }

  next()
})

export default router
