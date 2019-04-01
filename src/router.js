import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/templates/Layout.vue'

Vue.use(Router)

// ログイン後はchildrenを持つ
export const routes = [
  {
    path: '/login',
    show: false,
    component: () => import('@/components/pages/login/index.vue')
  },
  {
    path: '/',
    component: Layout,
    children: [{
      path: '',
      name: 'dashboard',
      component: () => import('@/components/pages/dashboard/index.vue'),
      icon: 'dashboard',
      title: 'ダッシュボード'
    }]
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
