<script setup lang="ts">
const tableList = ref();
const { data } = await useFetch("/api/products");
tableList.value = data.value;
</script>
<template>
  <div>This is productView 2</div>
  <div>{{ tableList }}</div>
  <div v-for="data in tableList?.products">
    <div>{{ data.id }}</div>
    <div>{{ data.title }}</div>
    <div>{{ data.description }}</div>
    <div>{{ data.price }}</div>
    <div>{{ data.discountPercentage }}</div>
    <div>{{ data.rating }}</div>
  </div>
</template>
