import Vue from 'vue'
import VueRouter from 'vue-router'
import Library from '../views/Library.vue'
import BookView from '../views/BookView.vue'
import ReadingList from '../views/ReadingList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Library',
    component: Library
  },
  {
    path: '/books/:id',
    name: 'About',
    component: BookView
  },
  {
    path: '/ReadingList',
    name: 'ReadingList',
    component: ReadingList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
