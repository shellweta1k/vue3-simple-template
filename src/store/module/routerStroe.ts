import { defineStore } from 'pinia';
import { routes } from '@/router/routes';
import { RouteRecordRaw } from 'vue-router';
export const routerStore = defineStore('routerStore', {
  state() {
    return {
      routerList: [] as Array<RouteRecordRaw>,
    };
  },
  actions: {
    setRouterList(list: Array<RouteRecordRaw>) {
      this.routerList = [...routes, ...list];
    },
  },
});
