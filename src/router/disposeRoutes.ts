import layout from '@/layout/index.vue';
import { RouteRecordRaw } from 'vue-router';
const viewModules = import.meta.glob('../views/**/*.{vue,tsx}');

function dynamicImport(dynamicViewsModules: Record<string, Function>, component: string) {
  const keys = Object.keys(dynamicViewsModules);
  const matchKeys = keys.filter((key) => {
    const k = key.replace(/..\/views|../, '');
    return k.startsWith(`${component}`) || k.startsWith(`/${component}`);
  });
  if (matchKeys?.length === 1) {
    const matchKey = matchKeys[0];
    return dynamicViewsModules[matchKey];
  }
  if (matchKeys?.length > 1) {
    return false;
  }
}

function dataConvertRoute(item: defaultObj): RouteRecordRaw {
  let { path, component, children, ...meta } = item;
  const name = path;
  component = component ? dynamicImport(viewModules, component) : layout;
  path = path ? '/' + path : path;
  return {
    name,
    path,
    component,
    children,
    meta,
  };
}

export function dataToRoute(list: Array<any>) {
  function handle(dataList: Array<any>, results: Array<RouteRecordRaw> = []) {
    for (let i = 0; i < dataList.length; i++) {
      const item = dataConvertRoute(dataList[i]);
      if (!item.path) continue;

      if (item.children && item.children.length !== 0) {
        let child = [];
        child = handle(dataList[i].children!);
        item.children = child;
      }
      if (item.meta?.menuType === 'M') item.redirect = item.children![0].path;
      results.push(item);
    }
    return results;
  }
  return handle(list);
}
