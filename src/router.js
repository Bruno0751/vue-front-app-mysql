import { createRouter, createWebHistory } from 'vue-router'
import IndexX from './components/Index.vue'
import BuscarX from './components/Buscar.vue'

const routes = [
  { path: '/', component: IndexX },
  { path: '/buscar', component: BuscarX }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
