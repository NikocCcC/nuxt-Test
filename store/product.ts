import { defineStore } from "pinia";
export const useProduct = defineStore("productStore", {
  state: () => ({
    data: "no test"
  }),
  actions: {
    setData() {
      this.data = "test";
    }
  }
});
