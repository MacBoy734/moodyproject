import { createRouter, createWebHistory } from 'vue-router'
import HomepageView from '../views/HomepageView.vue'
import AboutView from '../views/AboutView.vue'
import BlogsView from '../views/BlogsView.vue'
import ResourcesView from '../views/ResourcesView.vue'
import FAQSView from '../views/FAQSView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomepageView
    },
    {
      path: '/about',
      name: 'AboutView',
      component: AboutView
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogsView
    },
    {
      path: '/resources',
      name: 'ResourcesView',
      component: ResourcesView
    },
    {
      path: '/FAQS',
      name: 'FAQS',
      component: FAQSView
    }
  ]
})

export default router
