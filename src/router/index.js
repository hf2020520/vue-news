import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Article from '@/components/Article'
import Follow from '@/components/Follow.vue'
import Column from '@/components/Column.vue'
import UserInfo from '@/components/UserInfo.vue'
import UserLogin from '@/components/UserLogin.vue'
import UserReg from '@/components/UserReg.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/article/:id',
      component: Article/*,
      children: [
        { path: '', component: Article }
      ]*/
    },
    {
	  path:'/follow',
	  component:Follow
    },
    {
     path:'/column',
     component:Column
   },
   {
    path:'/user-info',
    component:UserInfo
   },
   {
    path:'/user-login',
    component:UserLogin
   },
   {
    path:'/user-reg',
    component:UserReg
   }
  ]
})
