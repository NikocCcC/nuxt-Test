<script setup lang="ts">
function goToContact() {
  navigateTo("/contact");
}
// definePageMeta({
//   middleware: defineNuxtRouteMiddleware(() => {
//     console.log(`[匿名中間件] 我是直接定義在頁面內的匿名中間件`);
//   })
// });
// definePageMeta({
//   middleware: "random-redirect"
// });
</script>
<template>
  <div class="pt-10 pb-10">About</div>
  <div>
    <button @click="goToContact">go to contact!</button>
  </div>
</template>
