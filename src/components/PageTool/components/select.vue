<template>
  <el-select v-model="value" :placeholder="placeholder">
    <el-option v-for="item in config.options" :key="item.label" :label="item.label" :value="item.value" />
  </el-select>
</template>

<script lang="ts" setup name="selectTool">
  const props = defineProps({
    value: {
      type: String,
      default: '',
    },

    placeholder: {
      type: String,
      defulat: '',
    },

    config: {
      type: Object,
      default: () => {},
    },
  });
  const { value, placeholder, config } = props;
</script>
