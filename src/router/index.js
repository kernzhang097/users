import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Add from '@/views/Add'
import Details from '@/views/Details'
import Edit from '@/views/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit
    }
  ],
  mode: 'history'
})
