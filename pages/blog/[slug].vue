<template>
  <div class="container mx-auto pt-32 pb-32 px-5 min-h-screen flex flex-col gap-12 items-start">
    <div class="w-full flex justify-start items-center">
      <h1 class="text-center" v-if="post">{{ post.title.rendered }}</h1>
    </div>
    <div v-if="pending" class="w-full flex justify-center items-center">
      <p>Loading...</p>
    </div>
    <div v-if="error" class="w-full flex justify-center items-center">
      <p>{{ error.message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRuntimeConfig, useRoute } from '#imports'
import { usePost } from '@/composables/usePost'

const route = useRoute()
const slug = route.params.slug
const post = ref(null)
const error = ref<Error | null>(null)
const pending = ref<boolean>(true)

onMounted(async () => {
  try {
    const fetchedPost = await usePost(slug)
    post.value = fetchedPost
  } catch (err) {
    error.value = err
  } finally {
    pending.value = false
  }
})
</script>
