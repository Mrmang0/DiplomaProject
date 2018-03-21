import Vue from 'vue'
import Router from 'vue-router'
import NewsPage from '@/components/news/NewsPage'
import Teachers from '@/components/teachers/TeachersPage'
import TeacherItemDetails from '@/components/teachers/TeacherItemDetails'

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
    },
    
    {
      path: '/teachers/:id',
      props: true,
      component: TeacherItemDetails
    }
  ]
})
