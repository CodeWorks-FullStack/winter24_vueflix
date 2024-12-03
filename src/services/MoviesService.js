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
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.total_pages
  }
  async changeDiscoverPage(pageNumber) {
    const response = await movieApi.get(`discover/movie?page=${pageNumber}`)
    logger.log('CHANGED DISCOVER PAGE', response.data)
    const movies = response.data.results.map(moviePOJO => new Movie(moviePOJO))
    AppState.movies = movies
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.total_pages
  }
}

export const moviesService = new MoviesService()