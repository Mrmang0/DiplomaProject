import Vue from 'vue'
import Router from 'vue-router'
import NewsPage from '@/components/news/NewsPage'
import Teachers from '@/components/teachers/TeachersPage'
import TeacherItemDetails from '@/components/teachers/TeacherItemDetails'
import MethodPage from '@/components/method-data/MethodPage'
import ProfilePage from '@/components/profile/ProfilePage'

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
    },

    {
      path: '/method-data',
      component: MethodPage
    },

    {
      path: '/profile',
      component: ProfilePage
    }
  ]
})
