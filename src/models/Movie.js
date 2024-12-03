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

  get backdropImgUrl() {
    return 'https://image.tmdb.org/t/p/w500/' + this.backdropPath
  }

  get posterImgUrl() {
    return 'https://image.tmdb.org/t/p/w500/' + this.posterPath
  }
  get posterHDImgUrl() {
    return 'https://image.tmdb.org/t/p/original/' + this.posterPath
  }
}
