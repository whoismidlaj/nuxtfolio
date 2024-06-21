<template>
    <div class="container relative mx-auto">
        <div @click="togglePop" class="btn btn-primary absolute top-4 right-4 ">WIP v1</div>
        <div v-show="showPop" class="fixed top-8 left-1/2 -translate-x-1/2 p-5 min-w-[300px] border rounded-xl backdrop-blur border-gray-900/10 dark:border-gray-300/10 bg-gradient-to-tr from-gray-200/50 to-gray-300/50 dark:from-gray-800/50 dark:to-gray-900/50">
            <h2>Site is under construction</h2>
        </div>
    </div>
</template>

<script setup>
const showPop = ref(false)
function togglePop() {
  showPop.value = !showPop.value
}
</script>