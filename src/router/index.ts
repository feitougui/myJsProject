import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children:[
            // javascript
    {
      path: '/javascriptList',
      name: 'javascriptList',
      component: ()=>import('../views/javascriptList.vue'),
      meta:{title:'javascript'}
    },
    // css
    {
      path: '/cssList',
      name: 'cssList',
      component: ()=>import('../views/cssList.vue'),
      meta:{title:'css'}
    },
    // vue
    {
      path: '/vueList',
      name: 'vueList',
      component: ()=>import('../views/vueList.vue'),
      meta:{title:'vue'}
    },
      ]
    },

  ]
})

export default router
