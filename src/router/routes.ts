import { RouteRecordRaw } from 'vue-router';
import layout from '@/layout/index.vue';
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    redirect: '/index',
    component: layout,
    meta: {
      icon: 'system',
      menuName: '首页',
      menuId: 'index',
    },
    children: [
      {
        path: '/index',
        name: 'indexPath',
        component: () => import('@/views/index/index.vue'),
        meta: {
          parentId: 'index',
          menuName: '首页',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      hidden: true,
    },
    component: () => import('@/views/login/index.vue'),
  },
];
