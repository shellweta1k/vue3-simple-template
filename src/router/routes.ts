import { RouteRecordRaw } from 'vue-router';
import layout from '@/layout/index.vue';
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    redirect: '/index',
    component: layout,
    children: [
      {
        path: '/index',
        name: 'indexPath',
        component: () => import('@/views/index/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
];
