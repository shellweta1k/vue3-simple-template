<template>
  <div class="page-tool-container">
    <div class="header-tool">
      <el-form class="auto-form" :model="formValue" :inline="true">
        <el-form-item v-for="item in formItem" :key="item.key" :label="item.label">
          <component
            :is="components[item.type + 'Tool']"
            v-model="formValue[item.key]"
            :placeholder="item.placeholder"
            :config="item.config"></component>
        </el-form-item>
        <el-form-item>
          <div class="func-block">
            <el-button class="commit" type="primary" :icon="Search">搜索</el-button>
            <el-button class="cancel" type="primary" :icon="RefreshRight">重置</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div class="page-main">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Search, RefreshRight } from '@element-plus/icons-vue';
  import { defineAsyncComponent } from 'vue';
  const components: defaultObj = {
    inputTool: defineAsyncComponent(() => import('./components/input.vue')),
    selectTool: defineAsyncComponent(() => import('./components/select.vue')),
    datePickerTool: defineAsyncComponent(() => import('./components/datePicker.vue')),
  };
  const { formValue, formItem } = defineProps({
    formValue: {
      type: Object,
      default: () => {},
    },
    formItem: {
      type: Array<formItem>,
      default: () => [],
    },
  });
</script>

<style lang="scss" scoped>
  .page-tool-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    .header-tool {
      padding: 0px 20px;
      box-sizing: border-box;
      width: 100%;
      height: 70px;
      line-height: 70px;
      border-radius: 8px;
      background-color: #fff;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.04);
    }
    .page-main {
      flex: 1;
      background-color: #fff;
      border-radius: 8px;
      margin-top: 20px;
    }
  }
  :deep(.el-form--inline) {
    .el-form-item {
      margin-bottom: 0px !important;
      .func-block {
        .el-button {
          border: none;
          outline: none;
          border-radius: 30px;
          min-width: 100px;
        }
        .commit {
          background-image: linear-gradient(284deg, #8357be, #8384ca, #7bafd6, #67d9e2);
        }
        .cancel {
          background-color: #67d9e2;
          color: #8384ca;
          border: 1px solid #8384ca;
        }
      }
    }
  }
</style>
