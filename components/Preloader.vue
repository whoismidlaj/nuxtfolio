<template>
    <div class="fixed top-0 left-0 w-screen h-screen bg-gray-300 text-gray-900 dark:bg-gray-900 dark:text-gray-300 bg-gradient-to-tr from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900">
        <div class="w-full h-full flex justify-center items-center">
            <div class="text-4xl">{{ progress }}%</div>
        </div>
    </div>
  </template>
  
  <script setup>
  const progress = ref(0);
  
  const simulateLoading = async () => {
    const increment = 2; // Adjust increment for smoother progress
    const interval = 20; // Adjust interval for desired speed (in milliseconds)
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
  
  <style scoped>
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust background color as needed */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Ensure preloader is above other content */
  }
  
  .preloader-bar {
    height: 5px; /* Adjust preloader bar height */
    background-color: #f44336; /* Adjust progress bar color */
    width: 0;
    transition: width 0.2s ease-in-out; /* Add a smooth transition */
  }
  </style>
  