import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import useCookies from '@/utils/useCookies';
import { routerStore } from '@/store/module/routerStroe';
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { getItem } = useCookies();

  if (getItem('token')) {
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      const { routerList, setRouterList } = routerStore();
      if (routerList.length === 0) {
        setRouterList().then((list) => {
          list.map((item) => {
            router.addRoute(item);
          });
          next({ path: to.path, replace: true });
        });
      }
      next();
    }
  } else {
    if (to.path === '/login') {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});

export default router;
