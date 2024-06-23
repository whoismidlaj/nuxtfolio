<template>
    <div class="fixed bottom-20 left-1/2 -translate-x-1/2 w-screen flex justify-center items-center px-5">
        <div class="w-full bg-gray-300/10 dark:bg-gray-700/50 backdrop-blur border border-gray-900/10 dark:border-gray-300/10 rounded-xl overflow-clip">
            <div class="flex flex-col">
                <NuxtLink @click="handleClick" :class="{'bg-gray-300/10 dark:bg-gray-500/30': $route.path === '/'}" class="px-5 py-4 border-b border-gray-900/10 dark:border-gray-300/10 flex justify-between items-center" to="/">Home 
                    <div class="icon w-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                        </svg>
                    </div>
                </NuxtLink>
                <NuxtLink @click="handleClick" :class="{'bg-gray-300/10 dark:bg-gray-500/30': $route.path === '/about'}" class="px-5 py-4 border-gray-900/10 dark:border-gray-300/10 flex justify-between items-center" to="/about">About 
                    <div class="icon w-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </NuxtLink>
                <!-- <NuxtLink @click="handleClick" :class="{'bg-gray-300/10 dark:bg-gray-500/30': $route.path === '/blog'}" class="px-5 py-4 border-gray-900/10 dark:border-gray-300/10 flex justify-between items-center" to="/blog">Blog 
                    <div class="icon w-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clip-rule="evenodd" />
                        <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                        </svg>
                    </div>
                </NuxtLink> -->
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