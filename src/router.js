import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import ExperiencePage from '@/views/ExperiencePage.vue'
import CommunityPage from '@/views/CommunityPage.vue'
// import GalleryPage from '@/views/GalleryPage.vue'
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
      path: '/about',
      name: 'about',
      component: AboutPage
    }, {
      path: '/experience',
      name: 'experience',
      component: ExperiencePage
    // }, {
    //   path: '/gallery',
    //   name: 'gallery',
    //   component: GalleryPage
    }, {
      path: '/community',
      name: 'Community',
      component: CommunityPage
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