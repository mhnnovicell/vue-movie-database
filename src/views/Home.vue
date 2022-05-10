<script setup>
import SearchField from '@/components/SearchField.vue';
</script>

<template>
  <section class="body-font text-gray-600">
    <div class="container mx-auto flex flex-wrap items-center px-5 py-24">
      <div class="flex w-full flex-col">
        <h1 class="title-font text-3xl font-medium text-white">
          IMDB movie app
        </h1>
        <p class="mt-4 leading-relaxed text-white">
          Search for movies or series
        </p>
      </div>
      <div class="mt-10 flex w-full flex-col">
        <SearchField></SearchField>
      </div>
    </div>
  </section>
</template>
