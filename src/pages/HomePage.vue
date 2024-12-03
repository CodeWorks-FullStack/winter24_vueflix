<script setup>
import { AppState } from '@/AppState.js';
import MovieCard from '@/components/MovieCard.vue';
import { moviesService } from '@/services/MoviesService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

// explicit return
// const movies = computed(() => { return AppState.movies })

// implied return
const movies = computed(() => AppState.movies)
const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPages)

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

async function changePage(pageNumber) {
  try {
    await moviesService.changeDiscoverPage(pageNumber)
  } catch (error) {
    logger.error('[CHANGE MOVIES PAGE]', error)
    Pop.error(error)
  }
}

</script>

<template>
  <div class="container">
    <section class="row">
      <div class="col-12">
        <h1>Discover Movies</h1>
        <div class="d-flex gap-2 align-items-center mb-3">
          <button @click="changePage(currentPage - 1)" class="btn btn-outline-dark" :disabled="currentPage == 1"
            type="button" :title="`Go to page ${currentPage - 1}`">
            Previous
          </button>
          <span class="fw-bold">Page {{ currentPage }} of {{ totalPages }}</span>
          <button @click="changePage(currentPage + 1)" class="btn btn-outline-dark"
            :disabled="currentPage == 500 || currentPage == totalPages" type="button"
            :title="`Go to page ${currentPage + 1}`">
            Next
          </button>
        </div>
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
