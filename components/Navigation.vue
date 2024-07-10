<script setup>
const showMenuModal = ref(false)
function toggleMenu() {
  showMenuModal.value = !showMenuModal.value
}

// Listen for the event emitted from Component2
const closeMenuListener = ref(null);

function closeMenu() {
  showMenuModal.value = false;
}

onMounted(() => {
  on('closeMenu', closeMenu);
});

onUnmounted(() => {
  off('closeMenu', closeMenu);
});
</script>

<template>
    <nav class="fixed bottom-0 z-50 w-full py-3 md:py-5 border-t backdrop-blur border-gray-900/10 dark:border-gray-300/10 bg-gradient-to-tr from-gray-200/50 to-gray-300/50 dark:from-gray-800/50 dark:to-gray-900/50">
        <div class="container px-5 mx-auto flex justify-between">
            <div class="menu hidden space-x-5 text-slate-100 md:flex items-center">
                <NuxtLink :class="{'btn-primary active': $route.path === '/'}" class="btn btn-primary" to="/">Home</NuxtLink>
                <NuxtLink :class="{'btn-primary active': $route.path === '/about'}" class="btn btn-primary" to="/about">About</NuxtLink>
                <NuxtLink :class="{'btn-primary active': $route.path === '/projects'}" class="btn btn-primary" to="/projects">Projects</NuxtLink>
                <!-- <NuxtLink :class="{'btn-primary active': $route.path === '/photodump'}" class="btn btn-primary" to="/photodump">Photos</NuxtLink> -->
            </div>
            <div @click="toggleMenu" class="menuMobile flex justify-center items-center btn btn-primary p-2 md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-900 dark:text-gray-200">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <DarkModeToggle />
        </div>
    </nav>
    <MenuModal v-show="showMenuModal" /> 
</template>