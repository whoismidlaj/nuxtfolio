<template>
    <div class="container mx-auto min-h-screen flex flex-col justify-center items-start px-5 pt-24 pb-24">
        <img v-show="colorMode.preference !== 'matrix'" class="Profile" src="~/assets/img/profile-pic.png" alt="profile-pic">
        <img v-show="colorMode.preference === 'matrix'" class="Profile" src="~/assets/img/profile-pic-black.png" alt="profile-pic">
        <h1 class="mb-8 text-5xl md:text-6xl">
        I'm midlaj
        </h1>
        <p class="md:w-1/2 mb-10">
            Web developer and Front-end developer from India. With a keen eye for design and a passion for coding.
        </p>
        <div class="flex space-x-2 justify-center text-gray-100">
        <a href="https://github.com/whoismidlaj" target="_blank" class="icon-btn">
            <IconGit :fontControlled="false" />
        </a>
        <a href="https://www.instagram.com/whoismidlaj/" target="_blank" class="icon-btn">
            <IconInsta :fontControlled="false" />
        </a>
        <a rel="me" href="https://mastodon.social/@midlaj" target="_blank" class="icon-btn">
            <IconMast :fontControlled="false" />
        </a>
        <a href="https://t.me/whatismidlaj" target="_blank" class="icon-btn">
            <IconTele :fontControlled="false" />
        </a>
        <a href="https://twitter.com/whoismidlaj" target="_blank" class="icon-btn">
            <IconTwit :fontControlled="false" />
        </a>
        </div>
        <div class="flex gap-4">
            <a href="mailto:midlaj@tuta.io" target="_blank" class="btn btn-primary mt-8">Email Me</a>
            <a href="../midlaj-resume.pdf" target="_blank" class="btn btn-primary mt-8">Resume</a>
        </div>
    </div>
</template>

<script setup>
import IconGit from '~/assets/img/socials/github.svg'
import IconInsta from '~/assets/img/socials/instagram.svg'
import IconMast from '~/assets/img/socials/mastodon.svg'
import IconTele from '~/assets/img/socials/telegram.svg'
import IconTwit from '~/assets/img/socials/twitter.svg'

const colorMode = useColorMode();
</script>