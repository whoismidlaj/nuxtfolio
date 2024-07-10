<template>
    <div class="container mx-auto pt-32 pb-32 px-5 min-h-screen flex flex-col justify-center items-start">
        <div class="w-full flex justify-start items-center mb-10">
            <h1 class="text-center">About</h1>
        </div>
        <p>
            I'm Midlaj, a web developer and front-end developer from India. With a keen eye for design and a passion for coding, I specialize in creating responsive, user-friendly websites with technologies such as HTML, CSS, Bootstrap, Tailwind CSS, Vue.js, and WordPress. 
        </p>
        <hr class="h-[1px] w-full my-8 bg-gray-400/50 dark:bg-gray-700 border-0 rounded md:my-12">
        <h2 class="mb-8">Experience</h2>
        <div class="flex flex-col gap-4 w-full">
            <div class="flex justify-between items-end p-5 border rounded-xl bg-gray-300/30 dark:bg-gray-800/50 border-gray-900/10 dark:border-gray-300/10">
                <div class="flex flex-col gap-2 justify-center items-start">
                    <h3 class="text-xl">Rexav LLP</h3>
                    <p class="text-sm">Software Engineer</p>
                </div>
                <p class="text-sm px-5 py-1 rounded-full border text-gray-900 dark:text-gray-200 bg-gray-300/30 dark:bg-gray-800 border-gray-900/10 dark:border-gray-300/10">2023 - Present</p>
            </div>
            <div class="flex justify-between items-end p-5 border rounded-xl bg-gray-300/30 dark:bg-gray-800/50 border-gray-900/10 dark:border-gray-300/10">
                <div class="flex flex-col gap-2 justify-center items-start">
                    <h3 class="text-xl">BlazonWeb</h3>
                    <p class="text-sm">Web Developer</p>
                </div>
                <p class="text-sm px-5 py-1 rounded-full border text-gray-900 dark:text-gray-200 bg-gray-300/30 dark:bg-gray-800 border-gray-900/10 dark:border-gray-300/10">2022 - 2023</p>
            </div>
        </div>
        <hr class="h-[1px] w-full my-8 bg-gray-400/50 dark:bg-gray-700 border-0 rounded md:my-12">
        <div class="skills w-full">
            <h2 class="mb-4">Tools I Use</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div class="skill">
                    <img src="../assets/img/skill/html5.svg" alt="Nuxt.js">
                    HTML5
                </div>
                <div class="skill">
                    <img src="../assets/img/skill/css3.svg" alt="Nuxt.js">
                    CSS3
                </div>
                <div class="skill">
                    <img src="../assets/img/skill/javascript.svg" alt="Nuxt.js">
                    JavaScript
                </div>
                <div class="skill">
                    <img src="../assets/img/skill/vuedotjs.svg" alt="">
                    Nuxt.js
                </div>
                <div class="skill">
                    <img src="../assets/img/skill/nuxtdotjs.svg" alt="Nuxt.js">
                    Vue.js
                </div>
                <div class="skill">
                    <img src="../assets/img/skill/tailwindcss.svg" alt="">
                    TailwindCSS
                </div>
                <div class="skill">
                    <img src="../assets/img/skill/wordpress.svg" alt="">
                    WordPress
                </div>
                <div class="skill">
                    <img src="../assets/img/skill/php.svg" alt="">
                    PHP
                </div>
                <div class="skill">
                    <img src="../assets/img/skill/figma.svg" alt="">
                    Figma
                </div>
                <div class="skill justify-end">
                    More to learn
                </div>
            </div>
        </div>
        <hr class="h-[1px] w-full my-8 bg-gray-400/50 dark:bg-gray-700 border-0 rounded md:my-12">
        <h2 class="mt-4 mb-4">About this site</h2>
        <ul class="list-none flex flex-col gap-2">
            <li class="flex items-center">Hosted on <img src="../assets/img/icons/cloudflarepages.svg" class="w-5 mx-2" />Cloudflare Pages</li>
            <li class="flex items-center">Powered by <img src="../assets/img/skill/nuxtdotjs.svg" class="w-5 mx-2" /> Nuxt.js and <img src="../assets/img/skill/tailwindcss.svg" class="w-5 mx-2" />TailwindCSS</li>
            <!-- <li>Inspired by <a href="https://daleanthony.com" class="border-b-2 border-slate-400 hover:text-slate-100 hover:border-slate-100">Dale Anthony's Website</a></li> -->
        </ul>
    </div>
</template>