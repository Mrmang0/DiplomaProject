import Vue from 'vue'
import Router from 'vue-router'
import NewsPage from '@/components/news/NewsPage'
import Teachers from '@/components/teachers/TeachersPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'news',
      component: NewsPage
    },

    {
      path: '/teachers',
      component: Teachers
    }
  ]
})
