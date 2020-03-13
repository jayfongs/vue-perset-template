import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const title = process.env.VUE_APP_TITLE

/**
 * redirect                       侧边栏一级菜单设置后显示
 * hidden                         如果设置 true，当前路由不会在侧边栏中显示（默认值：false）
 * meta: {
 *  icon: 'iconfont class'        侧边栏中的图标
 *  permissions: ['admin.index']  权限控制页面显示
 *  breadcrumb: true              如果设置将隐藏当前面包屑（默认值：false）
 *  activeMenu: '/users/'         如果设置路径，侧边栏将显示设置路径的高亮
 *  clickBreadcrumb: true         如果设置将不能点击当前面包屑跳转（默认值：false）
 *  auth: false                   是否需要登录才能访问
 *  keepAlive: false              是否缓存组件
 *  lastMatched: {                如果设置，将在面包屑倒数第二个菜单出现
 *    path: '/users/'             指定菜单的路径
 *    meta: {
 *      title: '用户列表'          指定菜单的名称
 *    }
 *  }
 * }
 */

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
