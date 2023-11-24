import { defineStore } from 'pinia';

export const settingStore = defineStore('settingStore', {
  state() {
    return {
      asideExpend: false,
    };
  },
  actions: {
    setAsideExpend(statu: boolean) {
      this.asideExpend = statu;
    },
  },
});
