import { logger } from "@/utils/Logger.js"
import { movieApi } from "./AxiosService.js"

class MoviesService {
  async discoverMovies() {
    const response = await movieApi.get('discover/movie')
    logger.log('DISCOVERED MOVIES 🎥', response.data)
  }
}

export const moviesService = new MoviesService()