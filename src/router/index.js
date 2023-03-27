import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

let title = " | Sill Landscaping"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "Home" + title,
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: "About Us" + title
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: "Contact Us" + title
      },
    }
  ]
})

router.beforeEach((to, from) => {  document.title = to.meta?.title ?? 'Default Title'})

export default router
