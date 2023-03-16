<template>
  <div class="bg-white">
    <div class="my-6 flex flex-col items-center">
      <h1 class="text-3xl font-semibold text-gray-800">這裡是 Products</h1>
      <div class="my-4 flex space-x-4">
        <NuxtLink to="/products/productView1">前往 Products 1</NuxtLink>
        <NuxtLink to="/products/productView2">前往 Products 2</NuxtLink>
      </div>
    </div>
    <div class="border-b-2 border-gray-100"></div>
    <div class="flex flex-col items-center">
      <NuxtPage />
    </div>
  </div>
</template>
