<template>
    <div v-if="showPop" @click="handleClick" class="fixed top-0 left-0 z-0 w-screen h-screen"></div>
    <div class="container fixed z-10 top-0 left-1/2 -translate-x-1/2 flex items-center p-5" :class="{'justify-end': $route.path === '/' , 'justify-between' : $route.path !== '/'}">
        <NuxtLink v-show="colorMode.preference !== 'matrix'" to="/"><img class="w-10 h-10 bg-gray-100 border border-gray-100 rounded-full" :class="{'hidden': $route.path === '/'}" src="~/assets/img/profile-pic.png" alt="profile-pic"></NuxtLink>
        <NuxtLink v-show="colorMode.preference === 'matrix'" to="/"><img class="w-10 h-10 bg-[#00FF41] border-none rounded-none" :class="{'hidden': $route.path === '/'}" src="~/assets/img/profile-pic-black.png" alt="profile-pic"></NuxtLink>
        <div class="top-0">
            <div @click="togglePop" class="btn btn-primary px-4 py-2 w-fit backdrop-blur">#</div>
        </div>
        <div v-show="showPop" class="fixed top-20 md:top-8 left-1/2 -translate-x-1/2 p-5 w-[calc(100%-2.5rem)] h-fit max-w-[400px] updates">
            <h2 class="text-md mb-4">Updates</h2>
            <ul class="list-decimal list-outside ps-5 flex flex-col gap-2">
                <li class="text-sm">Added <a @click="setTheme('matrix')" class="underline underline-offset-2 text-gray-800 dark:text-gray-100 font-normal" >matrix</a> theme</li>
                <li class="text-sm">Projects page is live, checkout my recent <NuxtLink class="underline underline-offset-2 text-gray-800 dark:text-gray-100 font-normal" @click="handleClick" to="/projects">projects</NuxtLink></li>
                <li class="text-sm"><NuxtLink class="underline underline-offset-2 text-gray-800 dark:text-gray-100 font-normal" @click="handleClick" to="/blog">Blog</NuxtLink> is under construction</li>
                <li class="text-sm">etc...</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const colorMode = useColorMode();

const showPop = ref(false)
function togglePop() {
  showPop.value = !showPop.value
}

function handleClick() {
  showPop.value = false
}

const setTheme = (theme) => {
    colorMode.preference = theme;
};
</script>