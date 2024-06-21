<script setup>
</script>

<template>
    <nav class="fixed bottom-0 z-50 w-full p-5 border-t backdrop-blur border-gray-900/10 dark:border-gray-300/10 bg-gradient-to-tr from-gray-200/50 to-gray-300/50 dark:from-gray-800/50 dark:to-gray-900/50">
        <div class="container px-5 mx-auto flex justify-between">
            <div class="menu flex space-x-5 text-slate-100">
                <NuxtLink :class="{'btn-primary active': $route.path === '/'}" class="btn btn-primary" to="/">Home</NuxtLink>
                <NuxtLink :class="{'btn-primary active': $route.path === '/about'}" class="btn btn-primary" to="/about">About</NuxtLink>
                <!-- <NuxtLink :class="{'text-gray-900 dark:text-gray-300 bg-gray-300 dark:bg-gray-800 border-gray-400 dark:border-gray-300/10': $route.path !== '/works', 'text-gray-900 dark:text-gray-300 bg-gray-400/30 border-gray-900/10': $route.path === '/works'}" class="px-5 py-1 rounded-full font-medium border" to="/works">Works</NuxtLink> -->
            </div>
            <DarkModeToggle />
        </div>
    </nav>
</template>