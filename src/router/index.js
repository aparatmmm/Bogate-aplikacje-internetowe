import { createRouter, createWebHistory } from 'vue-router'
import Quiz from '../views/Quiz.vue'
import Home from '../views/Home.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
