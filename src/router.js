import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('./views/Home.vue'),
      redirect: "/New",
      children: [
        {
          path: "/Grid",
          name: "Grid",
          component: () => import('./components/buju/Grid.vue')
        },
        {
          path: "/phonelogin",
          name: "phonelogin",
          component: () => import('./components/zujian/login-register/phonelogin.vue')
        },
        {
          path: "/product",
          name: "product",
          component: () => import('./views/product.vue')
        },
        {
          path: "/product",
          name: "product",
          component: () => import('./views/product.vue')
        },
        {
          path: "/New",
          name: "New",
          component: () => import('./views/New.vue'),
        },
        {
          path: "/Bigchart",
          name: "Bigchart",
          component: () => import('./views/Bigchart.vue'),
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: () => import('./views/login.vue')
    }
  ]
  // routes: [
  //   {
  //     path: '/',
  //     // name: 'home',
  //     component: () => import("./views/Home.vue"),
  //     redirect: "/newactive",
  //     children: [
  //       {
  //         path: "/Grid",
  //         name: "Grid",
  //         component: () => import('./components/newactive/Grid.vue')
  //       },
  //     ]
  //   },
  //   {
  //     path: "/product",
  //     name: "product",
  //     component: () => import('./views/product.vue')
  //   },
  //   {
  //     path: '/login',
  //     name: 'login',
  //     component: () => import("./views/login.vue")
  //   },
  // ]
})
//路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.ele_login ? true : false;
  if (to.path == "/login") {
    next();
  } else {
    //是否登录状态下
    isLogin ? next() : next("/login");
  }
});
export default router;