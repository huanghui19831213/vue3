import {createRouter, createWebHashHistory} from 'vue-router'

import store from '../store/index.js'
import { defineAsyncComponent } from 'vue'
const TwosilderWrapper= defineAsyncComponent(() => import('../layout/twosilderWrapper'))

const LOGIN = defineAsyncComponent(() => import('../page/login/index.vue'))
const REG = defineAsyncComponent(() => import('../page/register/index.vue'))
const NOTFIND = defineAsyncComponent(() => import('../page/404/index.vue'))
const HomeIndex = defineAsyncComponent(() => import('../page/home/index.vue'))

// 在 Vue-router新版本中，需要使用createRouter来创建路由
let router = createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHashHistory(),
  // 路由地址
  routes: [
    {
      path:'/',
      name:"登陆",
      component: LOGIN
    },{
      path:'/register',
      name:"注册",
      component:REG
    },{
      path:'/home',
      name:"首页",
      component:TwosilderWrapper,
      children:[
        {
          path:'index',
          component:HomeIndex,
        }
      ]
    },{
      name: '404',
      path: '/404',
      component: NOTFIND
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/404'
    }
  ]
})

import { message } from 'ant-design-vue';

router.beforeEach((to, from,next) => {
  if(store.getters.getusername){
      //已登录去首页
      // if(to.path=='/'){
      //     next({path:'/register'})
      // }else{
      //     next()
      // }
      next()
  }
  else{
      if(to.path=='/'){
          //重新触发的时候会进入到这里,因为to.path已经变为/login了，然后直接跳转到登录页
          next()
      }else{
          message.error('请在登陆页先进行登陆')
          //第一次会走到这个位置，然后重新触发路由钩子函数beforeEach,
          //当重新触发钩子函数的时候这时的to.path已经变为/login
          next('/')
      }
  }
  next()//一定要调用next(),否则会造成页面卡死在登录页
})

export default router