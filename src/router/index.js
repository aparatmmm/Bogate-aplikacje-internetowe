import { createRouter, createWebHistory } from 'vue-router'
import Quiz from '../views/Quiz.vue'
import Home from '../views/Home.vue'
import About_us from '../views/About_us.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz,
    props: route => ({ difficulty: route.query.difficulty })
  },
  {
  path: '/About_us',
  name: 'About us',
  component: About_us
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
