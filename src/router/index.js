import { createRouter, createWebHistory } from 'vue-router'
import Items from '@/views/Items'
import calendar from '@/views/calendar'
import Home from '@/views/Home'
import markdown from '@/views/markdown'
import carousel from '@/views/carousel'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Items',
    name: 'Items',
    component: Items
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: calendar


  },
  {
    path: '/markdown',
    name: 'markdown',
    component: markdown


  },
  {
    path: '/carousel',
    name: 'carousel',
    component: carousel


  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
