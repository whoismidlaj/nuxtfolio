<template>
  <div class="min-h-screen bg-gray-300 text-gray-900 dark:bg-gray-900 dark:text-gray-300 bg-gradient-to-tr from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900">
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
