<template>
  <PageTool :formItem="formItems" :formValue="formValue"> </PageTool>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  const formValue = reactive({
    input: '123',
    select: 452122,
    date: ['2022-03-02', '2023-03-04'],
  });
  const formItems = [
    {
      type: 'input',
      key: 'input',
      label: '项目',
      placeholder: '请输入',
    },
    {
      type: 'select',
      key: 'select',
      label: '项目',
      placeholder: '请输入',
      config: {
        options: [
          {
            label: '全部',
            value: '',
          },
          {
            label: '广西',
            value: 452122,
          },
        ],
      },
    },
    {
      type: 'datePicker',
      key: 'date',
      label: '项目',
      placeholder: '请选择',
      config: {
        type: 'daterange',
        split: false,
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期',
      },
    },
  ];
</script>
