import { defineStore } from 'pinia';
import { routes } from '@/router/routes';
import { RouteRecordRaw } from 'vue-router';
import { dataToRoute } from '@/router/disposeRoutes';
export const routerStore = defineStore('routerStore', {
  state() {
    return {
      routerList: [] as Array<RouteRecordRaw>,
    };
  },
  actions: {
    setRouterList() {
      return new Promise<Array<RouteRecordRaw>>((resolve) => {
        import('@/assets/route.json').then((res) => {
          const transformedRoute = dataToRoute(res.data);
          const mergeRoutes = [...routes, ...transformedRoute];
          this.routerList = mergeRoutes;
          resolve(mergeRoutes);
        });
      });

      // this.routerList = [...routes, ...list];
    },
  },
});
