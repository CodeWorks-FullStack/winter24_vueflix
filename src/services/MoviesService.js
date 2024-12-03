import { logger } from "@/utils/Logger.js"
import { movieApi } from "./AxiosService.js"
import { Movie } from "@/models/Movie.js"
import { AppState } from "@/AppState.js"

class MoviesService {
  async discoverMovies() {
    const response = await movieApi.get('discover/movie')
    logger.log('DISCOVERED MOVIES 🎥', response.data)
    const movies = response.data.results.map(moviePOJO => new Movie(moviePOJO))
    AppState.movies = movies
  }
}

export const moviesService = new MoviesService()