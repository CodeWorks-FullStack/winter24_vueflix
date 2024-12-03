<script setup>
import { AppState } from '@/AppState.js';
import MovieCard from '@/components/MovieCard.vue';
import { moviesService } from '@/services/MoviesService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted, ref } from 'vue';

const movies = computed(() => AppState.movies)

const editableSearchQuery = ref('')

onMounted(() => {
  moviesService.clearMovies()
})

async function searchMovies() {
  try {
    await moviesService.searchMovies(editableSearchQuery.value)
  } catch (error) {
    Pop.error(error)
    logger.error('[SEARCHING MOVIES]', error)
  }
}
</script>


<template>
  <div class="container">
    <section class="row">
      <div class="col-12">
        <h1>Search Movies</h1>
      </div>
      <div class="col-12">
        <div>
          <form @submit.prevent="searchMovies()">
            <div class="mb-3">
              <label for="searchQuery" class="form-label">Search Query</label>
              <div class="d-flex">
                <input v-model="editableSearchQuery" type="text" class="form-control" id="searchQuery"
                  placeholder="Search...">
                <button class="btn btn-outline-dark" type="submit" title="Search for movies!">
                  <i class="mdi mdi-magnify"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    <section class="row">
      <div v-for="movie in movies" :key="movie.id" class="col-md-3">
        <MovieCard :movieProp="movie" />
      </div>
    </section>
  </div>
</template>


<style lang="scss" scoped></style>