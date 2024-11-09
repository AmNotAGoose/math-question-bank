import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from '../components/HomePage.vue'

const routes = [
  { path: '/app', component: HomePage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
