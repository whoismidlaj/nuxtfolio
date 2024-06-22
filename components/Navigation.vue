<script setup>
</script>

<template>
    <nav class="fixed bottom-0 z-50 w-full py-5 border-t backdrop-blur border-gray-900/10 dark:border-gray-300/10 bg-gradient-to-tr from-gray-200/50 to-gray-300/50 dark:from-gray-800/50 dark:to-gray-900/50">
        <div class="container px-5 mx-auto flex justify-between">
            <div class="menu flex space-x-5 text-slate-100">
                <NuxtLink :class="{'btn-primary active': $route.path === '/'}" class="btn btn-primary" to="/">Home</NuxtLink>
                <NuxtLink :class="{'btn-primary active': $route.path === '/about'}" class="btn btn-primary" to="/about">About</NuxtLink>
                <NuxtLink :class="{'btn-primary active': $route.path === '/photodump'}" class="btn btn-primary" to="/photodump">Photos</NuxtLink>
            </div>
            <DarkModeToggle />
        </div>
    </nav>
</template>