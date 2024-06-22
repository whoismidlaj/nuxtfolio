<template>
    <div class="container mx-auto pt-32 pb-32 px-5 min-h-screen flex flex-col gap-12">

        <div class="flex justify-between">
            <div class="flex flex-col gap-4">
                <img class="bg-gray-100 rounded-full border-2 border-gray-100 w-24" src="../assets/img/profile-pic.png" alt="">
                <h4 class="text-lg m-0">@whoismidlaj</h4>
            </div>
            <div class="flex gap-2 items-end">
                <a href="#" target="_blank" class="btn btn-primary mt-8">Follow</a>
            </div>
        </div>

        <div class="grid grid-cols-4 border-t border-slate-700 pt-12">
            <div v-for="photo in photos" :key="photo.id" class="photo-item">
                <img @click="showPhotoModal = true, selectPhoto(photo._embedded['wp:featuredmedia']['0'].source_url)" class="aspect-square object-cover" :src="photo._embedded['wp:featuredmedia']['0'].source_url" alt="">
            </div>  
        </div>
        <PhotoModal :imageSrc="selectedPhoto" v-if="showPhotoModal" @click="showPhotoModal = false" />
    </div>
</template>

<script setup lang="ts">
const photos = ref([])
const selectedPhoto = ref([])
const showPhotoModal = ref(false)

const { data, pending, error } = await useFetch('https://dev-midlaj.pantheonsite.io/wp-json/wp/v2/photo?_embed')

if (data.value) {
  photos.value = data.value
}

const selectPhoto = (url) => {
  selectedPhoto.value = url;
  showPhotoModal.value = true;
}
</script>