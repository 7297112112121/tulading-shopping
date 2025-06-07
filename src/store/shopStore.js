import { defineStore } from 'pinia';

export const useShopStore = defineStore('shop', {
  state: () => ({
    clickShop: []
  }),
  actions: {
    saveClickShop(id) {
      if (!this.clickShop.includes(id)) {
        this.clickShop.push(id);
      }
    }
  }
});