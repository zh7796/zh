import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/word',
    name: 'Word',
    component: () => import( /* webpackChunkName: "about" */ '../views/Word.vue')
  },
  {
    path: '/situ',
    name: 'Situ',
    component: () => import( /* webpackChunkName: "about" */ '../views/Situ.vue')
  }, ,
  {
    path: '/addfather',
    name: 'AddFather',
    component: () => import( /* webpackChunkName: "about" */ '../views/Add/AddFather.vue'),
    redirect: '/add',
    children: [{
      path: '/add',
      name: 'Add',
      component: () => import( /* webpackChunkName: "about" */ '@/views/Add/Add.vue'),
    }, {
      path: '/source',
      name: 'Source',
      component: () => import('../views/Add/Source.vue'),
    }, {
      path: '/classes',
      name: 'Classes',
      component: () => import('../views/Add/Classes.vue'),
    }, {
      path: '/property',
      name: 'Property',
      component: () => import('../views/Add/Property.vue'),
    }, {
      path: '/model',
      name: 'Model',
      component: () => import('../views/Add/Model.vue'),
    },
    {
      path: '/every',
      name: 'Every',
      component: () => import('../views/Add/Every.vue'),
    }, ]
  }
]

const router = new VueRouter({
  routes
})

export default router
