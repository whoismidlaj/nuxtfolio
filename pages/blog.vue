<template>
    <div class="container mx-auto pt-32 pb-32 px-5 min-h-screen flex flex-col items-start">
        <div class="w-full flex justify-start items-center mb-10">
            <h1 class="text-center">Blog</h1>
        </div>

        <div class="flex flex-col w-full border-t border-slate-700 pt-12">
            <div v-for="post in posts" :key="post.id" class="blog-item py-5 border-b border-gray-900/10 dark:border-gray-300/10">
                <h3 class="">{{ post.title.rendered }}</h3>
                <div class="">
                    <p>{{ post._embedded.author[0].name }}</p>
                    <p>{{ formatDate(post.date) }}</p>
                </div>
                <div v-html="post.excerpt.rendered"></div>
            </div>  
        </div>
    </div>
</template>

<script setup lang="ts">
const posts = ref([])

const { data, pending, error } = await useFetch('https://dev-midlaj.pantheonsite.io/wp-json/wp/v2/posts?_embed')

if (data.value) {
  posts.value = data.value
}
</script>