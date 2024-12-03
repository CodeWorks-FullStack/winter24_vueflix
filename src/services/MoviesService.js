import { logger } from "@/utils/Logger.js"
import { movieApi } from "./AxiosService.js"
import { Movie } from "@/models/Movie.js"
import { AppState } from "@/AppState.js"

class MoviesService {

  async discoverMovies() {
    const response = await movieApi.get('discover/movie')
    logger.log('DISCOVERED MOVIES 🎥', response.data)
    this.handleResponseData(response.data)
  }
  async changeDiscoverPage(pageNumber) {
    const response = await movieApi.get(`discover/movie?page=${pageNumber}`)
    logger.log('CHANGED DISCOVER PAGE', response.data)
    this.handleResponseData(response.data)
  }

  async searchMovies(searchQuery) {
    const response = await movieApi.get(`search/movie?query=${searchQuery}`)
    logger.log('SEARCHED MOVIES 🔍', response.data)
    this.handleResponseData(response.data)
  }

  handleResponseData(responseData) {
    const movies = responseData.results.map(moviePOJO => new Movie(moviePOJO))
    AppState.movies = movies
    AppState.currentPage = responseData.page
    AppState.totalPages = responseData.total_pages
  }
}

export const moviesService = new MoviesService()