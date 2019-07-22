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
  },
  {
    path: '/user',
    component: Layout,
    title: 'ユーザ管理',
    icon: 'account_circle',
    children: [
      {
        path: '',
        name: 'userSearch',
        component: () => import('@/components/pages/dashboard/index.vue'),
        title: 'ユーザ検索'
      }, {
        path: 'create',
        name: 'userCreate',
        component: () => import('@/components/pages/dashboard/index.vue'),
        title: 'ユーザ作成'
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
