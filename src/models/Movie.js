export class Movie {
  constructor(data) {
    this.id = data.id
    this.backdropPath = data.backdrop_path
    this.title = data.title
    this.overview = data.overview
    this.popularity = data.popularity
    this.posterPath = data.poster_path
    this.releaseDate = new Date(data.release_date)
    this.voteAverage = data.vote_average
    this.voteCount = data.vote_count
  }
}
