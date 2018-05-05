import Vue from 'vue'
import Router from 'vue-router'
import Isinput from '@/components/Isinput'
import Register from '@/components/Register'
import Login from '@/components/Login'
import LoginSuccess from '@/components/LoginSuccess'
import RegisterSuccess from '@/components/RegisterSuccess'
import SubmitSuccess from '@/components/SubmitSuccess'
import AllMyNotes from '@/components/AllMyNotes'
import MyNoteDetail from '@/components/MyNoteDetail'
import EditNote from '@/components/EditNote'
import PageNotFound from '@/components/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Isinput',
      component: Isinput
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/submitsuccess',
      name: 'SubmitSuccess',
      component: SubmitSuccess,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/registersuccess',
      name: 'RegisterSuccess',
      component: RegisterSuccess,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/allmynotes',
      name: 'AllMyNotes',
      component: AllMyNotes
    },
    {
      path: '/editnote/:con/:id',
      name: 'EditNote',
      component: EditNote
    },
    {
      path: '/mynotedetail/:id',
      name: 'MyNoteDetail',
      component: MyNoteDetail
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }

  ]
})
