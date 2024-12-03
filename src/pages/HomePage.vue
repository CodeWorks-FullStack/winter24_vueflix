<script setup>
import { moviesService } from '@/services/MoviesService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { onMounted } from 'vue';

// NOTE lifecycle hook
// NOTE onMounted will execute a function whenever this component is visible
onMounted(() => {
  logger.log('On mounted is running!')
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
  <p>Sup</p>
</template>

<style scoped lang="scss"></style>
