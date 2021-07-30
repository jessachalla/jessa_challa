import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import IntroductionPage from '@/views/IntroductionPage.vue'
import ExperiencePage from '@/views/ExperiencePage.vue'
import GalleryPage from '@/views/GalleryPage.vue'
import NewsPage from '@/views/NewsPage.vue'
import ContactPage from '@/views/ContactPage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: IntroductionPage
    }, {
      path: '/experience',
      name: 'experience',
      component: ExperiencePage
    }, {
      path: '/gallery',
      name: 'gallery',
      component: GalleryPage
    }, {
      path: '/news',
      name: 'news',
      component: NewsPage
    }, {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    }
  ]
})
