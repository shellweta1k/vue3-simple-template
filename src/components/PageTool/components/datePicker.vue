<template>
  <el-date-picker
    v-model="value"
    :type="config.type"
    :placeholder="placeholder"
    :start-placeholder="config.startPlaceholder"
    :end-placeholder="config.endPlaceholder"
  />
</template>

<script lang="ts" setup name="datePickerTool">
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
