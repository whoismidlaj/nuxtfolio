<template>
  <Preloader v-if="isLoading" />
  <div v-else class="min-h-screen">
    <TopBar/>
    <NuxtPage />
    <Navigation />
    <Neko />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>

<script setup lang="ts">
const isLoading = ref(true);
const useLoading = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  isLoading.value = false;
};

onMounted(useLoading);
</script>