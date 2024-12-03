import { logger } from "@/utils/Logger.js"
import { movieApi } from "./AxiosService.js"

class MoviesService {
  async discoverMovies() {
    const response = await movieApi.get('discover/movie?api_key=545c6ef058e65396849dfbbf381cbca3')
    logger.log('DISCOVERED MOVIES 🎥', response.data)
  }
}

export const moviesService = new MoviesService()