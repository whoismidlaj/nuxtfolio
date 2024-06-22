<template>
    <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen flex justify-center items-center bg-gray-700/30 backdrop-blur-sm px-5">
        <div class="w-full bg-gray-300/10 dark:bg-gray-700/50 backdrop-blur border border-gray-900/10 dark:border-gray-300/10 rounded-xl overflow-clip">
            <div class="flex flex-col">
                <NuxtLink :class="{'bg-gray-300/10 dark:bg-gray-500/30': $route.path === '/'}" class="px-5 py-4 border-b border-gray-900/10 dark:border-gray-300/10" to="/">Home</NuxtLink>
                <NuxtLink :class="{'bg-gray-300/10 dark:bg-gray-500/30': $route.path === '/about'}" class="px-5 py-4 border-gray-900/10 dark:border-gray-300/10" to="/about">About</NuxtLink>
            </div>
        </div>
    </div>
</template>