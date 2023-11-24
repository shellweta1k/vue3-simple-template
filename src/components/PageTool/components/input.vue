<template>
  <el-input v-model="value" :placeholder="placeholder" />
</template>

<script lang="ts" setup name="inputTool">
  const props = defineProps({
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      defulat: '',
    },
  });
  const { value, placeholder } = props;
</script>
