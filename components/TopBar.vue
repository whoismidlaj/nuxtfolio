<template>
    <div class="container fixed top-0 left-1/2 -translate-x-1/2 flex items-center p-5" :class="{'justify-end': $route.path === '/' , 'justify-between' : $route.path !== '/'}">
        <NuxtLink to="/"><img class="w-10 h-10 bg-gray-100 border border-gray-100 rounded-full" :class="{'hidden': $route.path === '/'}" src="~/assets/img/profile-pic.png" alt="profile-pic"></NuxtLink>
        <div class="top-0">
            <div @click="togglePop" class="btn btn-primary w-fit backdrop-blur">WIP v1</div>
        </div>
        <div v-show="showPop" class="fixed top-20 md:top-8 left-1/2 -translate-x-1/2 p-5 w-[calc(100%-2.5rem)] h-fit max-w-[400px] border rounded-xl backdrop-blur border-gray-900/10 dark:border-gray-300/10 bg-gradient-to-tr from-gray-200/50 to-gray-300/50 dark:from-gray-800/50 dark:to-gray-900/50">
            <h2 class="text-md mb-4">Site is under construction</h2>
            <p class="text-sm mb-2">This website is under construction and always will be.</p>
            <h4 class="text-base mb-1">Recent Updates :-</h4>
            <ul class="list-decimal list-inside">
                <li class="text-xs">New things</li>
                <li class="text-xs">New stuffs</li>
                <li class="text-xs">etc...</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const showPop = ref(false)
function togglePop() {
  showPop.value = !showPop.value
}
</script>