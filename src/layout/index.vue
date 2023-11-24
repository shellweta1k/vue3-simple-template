<template>
  <el-container>
    <el-aside class="aside" :class="!asideExpend && 'close'">
      <asideContainer />
    </el-aside>
    <el-container>
      <el-header>
        <headerContainer />
      </el-header>
      <el-main>
        <mainContainer />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
  import asideContainer from './aside/index.vue';
  import mainContainer from './main/index.vue';
  import headerContainer from './header/index.vue';
  import { settingStore } from '@/store/module/settingStore';
  import { storeToRefs } from 'pinia';
  const { asideExpend } = storeToRefs(settingStore());
</script>

<style lang="scss" scoped>
  .aside {
    &.close {
      width: 86px;
    }
  }
  :deep(.el-aside) {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.16);
  }
  :deep(.el-main) {
    background-color: #f5f7fb;
  }
</style>
