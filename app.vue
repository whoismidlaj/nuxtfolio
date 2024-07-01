<template>
  <Preloader v-if="isLoading" />
  <div v-else class="min-h-screen bg-gray-300 text-gray-900 dark:bg-gray-900 dark:text-gray-300 bg-gradient-to-tr from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900">
    <TopBar/>
    <NuxtPage />
    <Navigation />
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