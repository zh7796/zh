import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HoistingOperation from '@/views/Add/HoistingOperation.vue'
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
<<<<<<< HEAD
  }, 
=======
  },
  {
    path:'/HoistingOperation',
    name:'HoistingOperation',
    component:HoistingOperation,
  } ,
>>>>>>> 20a47a4d195cc3673b1331a32a1594cbb93cad05
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
    }, ]
  }
]

const router = new VueRouter({
  routes
})

export default router
