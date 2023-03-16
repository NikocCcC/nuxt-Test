<script setup lang="ts">
definePageMeta({
  layout: "custom"
});
</script>
<template>
  <NuxtLayout name="custom">
    <template #default>
      <div class="my-6 flex flex-col items-center">
        <h1 class="text-3xl font-semibold text-gray-800">這裡是 Custom</h1>
        <div class="my-4 flex space-x-4">
          <NuxtLink to="/customs/customView1">前往 custom 1</NuxtLink>
          <NuxtLink to="/customs/customView2">前往 custom 2</NuxtLink>
        </div>
      </div>
      <div class="border-b-2 border-gray-100"></div>
      <div class="flex flex-col items-center">
        <NuxtPage />
      </div>
    </template>
    <template #footer>
      <div class="flex flex-col items-center">
        <p class="mt-4 text-xl text-slate-600">感謝您閱讀 Nuxe 3 學習筆記～</p>
      </div>
    </template>
  </NuxtLayout>
</template>

<div class="bg-white">
  
</div>
