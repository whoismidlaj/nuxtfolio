<template>
    <div class="fixed top-0 left-0 w-screen h-screen bg-gray-300 text-gray-900 dark:bg-gray-900 dark:text-gray-300 bg-gradient-to-tr from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900">
        <div class="w-full h-full p-10 flex justify-end md:justify-center items-end md:items-center">
            <div class="text-5xl md:text-6xl">{{ progress }}%</div>
        </div>
    </div>
  </template>
  
  <script setup>
  const progress = ref(0);
  
  const simulateLoading = async () => {
    const increment = 2; // Adjust increment for smoother progress
    const interval = 10; // Adjust interval for desired speed (in milliseconds)
    const minDisplayTime = 500; // Minimum display time (in milliseconds)
  
    let intervalId = setInterval(() => {
      progress.value += increment;
      if (progress.value >= 100) {
        clearInterval(intervalId);
      }
    }, interval);
  
    await new Promise((resolve) => setTimeout(resolve, minDisplayTime)); // Ensure minimum display
  
    clearInterval(intervalId);
    progress.value = 100;
  };
  
  onMounted(async () => {
    await simulateLoading();
  });
  </script>
  