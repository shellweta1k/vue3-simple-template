<template>
  <el-container>
    <el-aside>
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
</script>
