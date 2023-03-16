<script setup lang="ts">
import { useProduct } from "@/store/product";
const { count, increase, minus } = useCounter();
const uP = useProduct();
</script>
<template>
  <div>This is productView 1</div>
  <div>{{ count }}</div>
  <button
    class="my-6 rounded-sm bg-sky-600 py-2 px-4 text-base font-medium text-white hover:bg-sky-700"
    @click="increase"
  >
    add
  </button>
  <button
    class="my-6 rounded-sm bg-sky-600 py-2 px-4 text-base font-medium text-white hover:bg-sky-700"
    @click="minus"
  >
    minus
  </button>
  <button
    class="my-6 rounded-sm bg-sky-600 py-2 px-4 text-base font-medium text-white hover:bg-sky-700"
    @click="uP.setData"
  >
    set button
  </button>
  <div>{{ uP.$state.data }}</div>
</template>
