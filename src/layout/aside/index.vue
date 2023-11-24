<template>
  <div class="aside-container">
    <div class="parent-router-container">
      <el-scrollbar height="100%">
        <div class="logo-block"></div>
        <el-menu :default-active="activeRout" class="el-menu-vertical-demo" :collapse="true" :router="true">
          <el-menu-item v-for="route in filterHidden" :key="route.name" :index="route.path">
            <useAsideItem :meta="route.meta" />
          </el-menu-item>
          <div class="shade"></div>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="child-route" v-if="asideExpend && currentRoute && currentRoute.children.length > 1">
      <div class="logo-block"></div>
      <div class="route-content">
        <span class="parent-route-title">
          {{ currentRoute.meta.menuName }}
        </span>
        <ul class="child-route-container">
          <li
            class="child-route-item"
            v-for="{ path, name, meta } in currentRoute?.children"
            :key="name"
            :class="matchChild(path) && 'active'">
            <router-link :to="path">
              {{ meta && meta.menuName }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, nextTick, ref } from 'vue';
  import { routerStore } from '@/store/module/routerStroe';
  import { settingStore } from '@/store/module/settingStore';
  import { storeToRefs } from 'pinia';
  import { useAsideItem } from './asideItem';
  import { useRoute } from 'vue-router';
  const unExpendRoute = ['/'];
  const _route_ = useRoute();
  let { routerList } = routerStore();
  const { asideExpend } = storeToRefs(settingStore());
  const { setAsideExpend } = settingStore();
  let currentRoute = ref<any>(null);
  const moveShade = (routes: typeof routerList, activeRoute: (typeof routerList)[0]) => {
    const activeIndex = routes.findIndex((item) => item.path === activeRoute.path);
    const shadeDom = document.querySelector('.shade') as HTMLElement;
    shadeDom!.style.top = activeIndex * 67 + 'px';
  };
  const matchChild = computed(() => (selfPath: string) => {
    const { path = '' } = _route_;
    return path === selfPath;
  });
  const filterHidden = computed(() => {
    return routerList.filter((route) => !route.meta?.hidden);
  });
  const activeRout = computed(() => {
    const { meta = {} } = _route_;
    const result = filterHidden.value.find((item) => item.meta?.menuId === meta?.parentId);
    setAsideExpend(!unExpendRoute.some((item) => item === result?.path));
    currentRoute.value = result;
    nextTick(() => {
      moveShade(filterHidden.value, result!);
    });
    return result?.path;
  });
</script>

<style lang="scss" scoped>
  .aside-container {
    height: 100%;
    display: flex;
  }
  .parent-router-container {
    width: 86px;
    height: 100%;
    border-radius: 0 25px 25px 0;
    background: linear-gradient(180deg, #1bcc9c 0%, #42dda0 100%);
    .logo-block {
      height: 78px;
    }
    :deep(.el-menu) {
      width: 100%;
      border: none;
      background-color: transparent;
      position: relative;
      .el-menu-item {
        height: fit-content;
        &:hover {
          background-color: transparent;
        }
        &.is-active {
          #svg-icon {
            color: #3ad99f;
          }
        }
        #svg-icon {
          font-size: 28px;
          color: white;
          position: relative;
          z-index: 10;
        }
      }
      .shade {
        height: 67px;
        width: 77px;
        border-radius: 33px 0 0 33px;
        background-color: #fff;
        position: absolute;
        top: 0;
        left: 9px;
        z-index: 1;
        transition: top 0.5s;
        &::after {
          display: block;
          content: '';
          height: 24px;
          width: 30px;
          position: absolute;
          top: -24px;
          right: -1px;
          // background-color: red;
          border-radius: 0 0 22px 0;
          box-shadow: 7px 7px 3px 0 #fff;
        }
        &::before {
          display: block;
          content: '';
          height: 24px;
          width: 30px;
          position: absolute;
          bottom: -24px;
          right: -1px;
          // background-color: red;
          border-radius: 0 22px 0px 0;
          box-shadow: 7px -7px 3px 0 #fff;
        }
      }
    }
  }
  .child-route {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.16);
    flex: 1;
    min-width: 0px;
    .logo-block {
      height: 78px;
    }
    .route-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 48px;
      .parent-route-title {
        font-family: 'Source Han Sans CN Medium';
        font-weight: 500;
        font-size: 18px;
        text-align: center;
        color: #000;
      }
      .child-route-container {
        margin: 0;
        padding: 0;
        margin-top: 48px;
        list-style: none;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        // justify-content: c;
        .child-route-item {
          margin-bottom: 48px;
          width: 100%;
          text-align: center;
          a {
            font-family: 'Source Han Sans CN';
            font-weight: 400;
            font-size: 16px;
            text-align: left;
            color: #252525;
            text-decoration: none;
          }
          &.active {
            position: relative;
            a {
              color: #3ad99f;
              &::after {
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(-50%);
                width: 5px;
                height: 17px;
                border-radius: 3px 0 0 3px;
                background: linear-gradient(180deg, #42dda0 0%, #1dcd9d 100%);
              }
            }
          }
        }
      }
    }
  }
</style>
