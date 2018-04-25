// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import './assets/js/adaptive-rem.js'
import Vant from 'vant'
import 'normalize.css'
import 'vant/lib/vant-css/index.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'

Vue.use(Vuex)
Vue.use(VueCookies)
Vue.use(VueAxios, axios)
Vue.use(Vant)

Vue.config.productionTip = false

// http request 拦截器
// Vue.axios.interceptors.request.use(
//   config => {
//     if (store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
//       config.headers.Authorization = `token ${store.state.token}`;
//     }
//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//   });

// http response 拦截器
Vue.axios.interceptors.response.use(
  response => {
    // console.log(response)
    return response
  },
  error => {
    console.log(error.response)
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // console.log(logout);
          // 返回 401 清除token信息并跳转到登录页面
          // store.commit(logout);
          sessionStorage.isLogin = false
          store.commit('logout')
          router.push({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
          })

        // {
        //   path: '/login',
        //     query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
        // }
      }
    }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  });

const store = new Vuex.Store({
  state: {
    isLogin: null
  },
  mutations: {
    logout (state) {
      state.isLogin = false
    },
    isLogin (state) {
      state.isLogin = true
    }
  }
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth) {
//
//     if (JSON.parse(sessionStorage.isLogin)) { // 是否登录
//
//       // setCookie('userid', userid, 60000);
//       next()
//     } else { // 未登录则跳转到登录页面
//       next({
//         path: '/login'
//       })
//     }
//   } else {
//     next()
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    // this.isLogin()
  }
})
