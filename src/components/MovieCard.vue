<script setup>
import { Movie } from '@/models/Movie.js';

defineProps({
  movieProp: { type: Movie, required: true },
})
</script>


<template>
  <img :src="movieProp.posterImgUrl" :alt="movieProp.title" class="img-fluid rounded shadow">
  <div class="fw-bold text-center">
    {{ movieProp.title }}
  </div>
</template>


<style lang="scss" scoped></style>