<template>
  <div class="main-container">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss" scoped>
  .main-container {
    height: 100%;
    width: 100%;
  }
  /*
  Enter and leave animations can use different
  durations and timing functions.
*/
  .fade-transform-enter-active {
    transition: all 0.5s ease-out;
  }

  .fade-transform-leave-active {
    transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .fade-transform-enter-from,
  .fade-transform-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
</style>
