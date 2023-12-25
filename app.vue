<template>
  <div class="fixed z-[-1] bg-[#F2F2F2] w-full h-[100vh]" />
  <NuxtPage />

  <MenuOverlay :class="[
          {'max-h-[100vh] transition-all duration-200 ease-in visible': userStore.isMenuOverlay },
          {'max-h-0 transition-all duration-200 ease-out invisible': !userStore.isMenuOverlay },
      ]" />
//   <!-- <MenuOverlay class="max-h-[100vh] transition-all duration-200 ease-in visible" /> -->
</template>
<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()

const route = useRoute()

console.log("🚀 ~ file: app.vue:17 ~ process.client:", process.client)
// console.log("🚀 ~ file: app.vue:18 ~ window.innerWidth:", window?.innerWidth)
let windowWidth = ref(process.client ? window.innerWidth : '')

onMounted(() => {
  userStore.isLoading = false
  window.addEventListener('resize', function () {
    windowWidth.value = window.innerWidth;
  });
})

watch(() => windowWidth.value, () => {
  console.log("🚀 ~ file: app.vue:28 ~ watch ~ windowWidth.value:", windowWidth.value)
  if (windowWidth.value >= 767) {
    userStore.isMenuOverlay = false
  }
})

watch(() => route.fullPath, () => {
  userStore.isLoading = true
})
</script>