import { createWebHistory, createRouter } from 'vue-router'

//路由配置
/*
说明：
必填：path、name、component、showTabBar（布尔型）
1、showTabBar：是否显示底部导航栏
*/ 
const routes = [  {
    path: '/',
    name: 'home',
    meta: {
      showTabBar: true
    },
    component: () => import('../components/HomeView.vue')
  },
  {
    path: '/productDynamics',
    name: 'productDynamics',
    meta: {
      showTabBar: true
    },
    component: () => import('../components/productDynamics/ProductDynamicsView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      showTabBar: true
    },
    component: () => import('../components/cart/CartView.vue')
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      showTabBar: true
    },
    component: () => import('../components/user/UserView.vue')
  },
  {
    path: '/productDetails/:id',
    name: 'productDetails',
    component: () => import('../components/productDetails/ProductDetailsView.vue')
  },
  {
    path: '/pay',
    name: 'pay',
    meta: {
      showTabBar: false
    },
    component: () => import('../components/cart/pay/PayView.vue')
  },
  /* 
  用户中心路由
  */
  {
    path: '/addres',
    name: 'addres',
    meta: {
      showTabBar: false
    },
    component: () => import('../components/user/addres/AddresView.vue')
  },
  {
    path: '/earning',
    name: 'earning',
    meta: {
      showTabBar: false
    },
    component: () => import('../components/user/uesrMave/components/EarningsView.vue')
  },
  {
    path: '/obligation',
    name: 'obligation',
    meta: {
      showTabBar: false
    },
    component: () => import('../components/user/uesrMave/components/ObligationView.vue')
  },
  {
    path: '/refund',
    name: 'refund',
    meta: {
      showTabBar: false
    },
    component: () => import('../components/user/uesrMave/components/RefundView.vue')
  },
  {
    path: '/shipments',
    name: 'shipments',
    meta: {
      showTabBar: false
    },
    component: () => import('../components/user/uesrMave/components/ShipmentsView.vue')
  },
  {
    path: '/receipt',
    name: 'receipt',
    meta: {
      showTabBar: false
    },
    important: () => import('@/components/user/uesrMave/components/ReceiptView.vue')
  },
  {
    path: '/userMenu',
    name: 'userMenu',
    meta: {
      shouwTabBar: false
    },
    component: () => import('@/components/user/uesrMave/UserMenuView.vue')
  },
  {
    path: '/lookshophistory',
    name: 'lookshophistory',
    meta: {
      showTabBar: false
    },
    component: () => import('@/components/user/history/LookView.vue')
  },
  {
    path: '/ProductCoupons',
    name: 'ProductCoupons',
    meta: {
      showTabBar: false
    },
    component: () => import('@/components/user/coupon/ProductView.vue')
  },
  /*
  消息路由信息
  */ 
  {
    path: '/news',
    name: 'news',
    meta: {
      showTabBar: true
    },
    component: () => import('../components/news/NewView.vue')
  },
  /*
  登录注册路由信息
  */
 {
  path: '/login',
  name: 'login',
  meta: {
    showTabBar: false
  },
  component: () => import('@/components/entrace/login/LoginView.vue')
 },
  //404
  {
    path: '/:pathMatch(.*)*',
    name: 'ErrPage',
    meta: {
      showTabBar: true
    },
    component: () => import('../erro/ErrPage.vue'),
  }
];

//创建路由实例，内存历史记录
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router;