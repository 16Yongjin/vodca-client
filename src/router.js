import Vue from 'vue'
import Router from 'vue-router'
import List from '@/views/List'
import Review from '@/views/Review'
import Home from '@/views/Home'
import AddLang from '@/views/AddLang'
import AddVoca from '@/views/AddVoca'
import Make from '@/views/Make'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/voca/:id',
      name: 'ListWithId',
      props: true,
      component: List
    },
    {
      path: '/voca/:id/review',
      name: 'ListReview',
      props: true,
      component: Review
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add',
      name: 'AddLang',
      component: AddLang
    },
    {
      path: '/add/:lang',
      name: 'AddVoca',
      props: true,
      component: AddVoca
    },
    {
      path: '/make',
      name: 'Make',
      component: Make
    }
  ]
})

export default router
