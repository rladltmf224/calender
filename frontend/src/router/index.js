import Vue from 'vue';
import VueRouter from 'vue-router';
import AppLogin from '../components/AppLogin.vue';
import AppRegister from '../components/AppRegister.vue';
import AppMain from '../components/AppMain.vue';
import AppDate from '../components/AppDate.vue';
import AppMake from '../components/AppMake.vue';
import AppTest from '../components/AppTest.vue';
import AppSlot from '../components/AppSlot.vue';
import AppTest2 from '../components/AppTest2.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/AppSlot',
    name: 'AppSlot',
    component: AppSlot,
  },
  {
    path: '/AppMain2',
    name: 'AppTest2',
    component: AppTest2,
  },
  {
    path: '/AppTest',
    name: 'AppTest',
    component: AppTest,
  },

  {
    path: '/AppDate',
    name: 'AppDate',
    component: AppDate,
  },
  {
    path: '/AppMake',
    name: 'AppMake',
    component: AppMake,
  },

  {
    path: '/',
    name: 'AppLogin',
    component: AppLogin,
  },
  {
    path: '/AppMain',
    name: 'AppMain',
    component: AppMain,
  },
  {
    path: '/AppRegister',
    name: 'AppRegister',
    component: AppRegister,
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
