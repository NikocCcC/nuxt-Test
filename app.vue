<template>
  <div>
    <!-- <Carousel /> -->

    <p class="pb-1 text-2xl text-slate-600">這裡是最外層 app.vue</p>
    <NuxtLayout name="default">
      <template #header>
        <p class="px-6 pt-4 text-xl text-green-500">這段會放置在 header 插槽</p>
      </template>
      <template #default>
        <NuxtPage></NuxtPage>
      </template>
      <template #footer>
        <p class="px-6 pt-4 text-xl text-green-500">這段會放置在 footer 插槽</p>
      </template>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const year = 2023;
const title = `${year} TEST`;
console.log(title);
</script>
