<script setup>
import { AppState } from '@/AppState.js';
import MovieCard from '@/components/MovieCard.vue';
import PageNavigation from '@/components/PageNavigation.vue';
import { moviesService } from '@/services/MoviesService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

// explicit return
// const movies = computed(() => { return AppState.movies })

// implied return
const movies = computed(() => AppState.movies)


// NOTE lifecycle hook
// NOTE onMounted will execute a function whenever this component is visible
onMounted(() => {
  logger.log('On mounted is running!')
  moviesService.clearMovies()
  discoverMovies()
})

// NOTE will run every time this component is no longer visible
// onUnmounted(() => {
//   console.log('On unMounted is running!');
// })

async function discoverMovies() {
  try {
    await moviesService.discoverMovies()
  } catch (error) {
    logger.error('[DISCOVER MOVIES]', error)
    Pop.error(error)
  }
}

</script>

<template>
  <div class="container">
    <section class="row">
      <div class="col-12">
        <h1>Discover Movies</h1>
      </div>
      <div class="col-12">
        <PageNavigation />
      </div>
    </section>
    <section class="row">
      <div v-for="movie in movies" :key="movie.id" class="col-md-3 mb-3">
        <MovieCard :movieProp="movie" />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
