<script setup>
import works from "~/content/data.json"
</script>

<template>
    <div class="rounded-md overflow-hidden" v-for="work in works" :key="work.id">
        <div class="flex justify-between items-center p-5 border rounded-xl bg-gray-300/30 dark:bg-gray-800/50 border-gray-900/10 dark:border-gray-300/10">
            <h3 class="text-xl">{{ work.name }}</h3>
            <div class="flex gap-4">
                <a v-if="work.git"  :href="`${ work.git }`" target="_blank" class="btn btn-primary flex gap-2 items-center">
                    Source
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                </a>
                <a v-if="work.link" :href="`${ work.link }`" target="_blank" class="btn btn-primary flex gap-2 items-center">
                    See Live
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>