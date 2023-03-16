<script setup lang="ts">
import { table } from "console";
import { ICustom } from "types/customs/customs";
const tableList = ref();
const { data } = await useFetch("/api/customs");
tableList.value = data.value;
</script>
<template>
  <div class="pt-10 pb-10">This is customView2.vue</div>
  <div>{{ tableList }}</div>
  <div v-for="data in tableList">
    <div>{{ data.title }}</div>
    <div>{{ data.description }}</div>
    <div>{{ data.height }}</div>
    <div>{{ data.continent }}</div>
  </div>
</template>
