<template>
    <div class="flex flex-row items-center justify-center">
        <a
            v-show="colorMode.preference === 'light'"
            class="btn btn-primary"
            @click="toggleTheme"
        >light</a>
        <a
            v-show="colorMode.preference === 'dark'"
            class="btn btn-primary"
            @click="toggleTheme"
        >dark</a>
    </div>
</template>

<script setup>
const colorMode = useColorMode();
const toggleTheme = () => {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};
</script>

<!-- <style scoped>
.theme-icon {
    @apply w-7 h-7 cursor-pointer transition-transform duration-100;
}
.theme-icon:hover {
    @apply scale-125;
}
</style> -->
