<template>
  <div class="header-container">
    <div class="left-container">
      <h1>HEADER</h1>
    </div>
    <div class="right-container">
      <el-dropdown trigger="click" @command="dropdownCommand">
        <div class="user-info">
          <el-avatar :size="30" :src="icon" />
          <span class="user-name"> USER </span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import icon from '@/assets/vue.svg';
  import { useRouter } from 'vue-router';
  import useCookies from '@/utils/useCookies';
  const _router_ = useRouter();
  const { removeItem } = useCookies();
  const dropdownCommand = (item: string | number | object) => {
    switch (item) {
      case 'logout':
        logout();
        break;
    }
  };
  const logout = () => {
    removeItem('token');
    _router_.push('/login');
  };
</script>

<style lang="scss" scoped>
  .header-container {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .right-container {
    .user-info {
      display: flex;
      align-items: center;
      cursor: pointer;
      .user-name {
        margin-left: 15px;
      }
    }
  }
</style>
