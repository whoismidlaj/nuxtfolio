<template>
    <div class="fixed bottom-20 left-1/2 -translate-x-1/2 w-screen flex justify-center items-center px-5">
        <div class="w-full bg-gray-300/10 dark:bg-gray-700/10 backdrop-blur border border-gray-900/10 dark:border-gray-300/10 rounded-xl overflow-clip">
            <div class="flex flex-col">
                <NuxtLink @click="handleClick" :class="{'bg-gray-300/10 dark:bg-gray-500/30': $route.path === '/'}" class="px-5 py-4 border-b border-gray-900/10 dark:border-gray-300/10 flex justify-between items-center" to="/">Home 
                    <div class="icon w-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                        </svg>
                    </div>
                </NuxtLink>
                <NuxtLink @click="handleClick" :class="{'bg-gray-300/10 dark:bg-gray-500/30': $route.path === '/about'}" class="px-5 py-4 border-b border-gray-900/10 dark:border-gray-300/10 flex justify-between items-center" to="/about">About 
                    <div class="icon w-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </NuxtLink>
                <NuxtLink @click="handleClick" :class="{'bg-gray-300/10 dark:bg-gray-500/30': $route.path === '/projects'}" class="px-5 py-4 border-gray-900/10 dark:border-gray-300/10 flex justify-between items-center" to="/projects">Projects 
                    <div class="icon w-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                        </svg>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { emit } from '../utils/eventBus.js';
const emitCloseMenu = ref(null); // Function to emit the event

function handleClick() {
  emit('closeMenu');
}
</script>