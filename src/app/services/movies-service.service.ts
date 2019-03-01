import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  constructor(private http: HttpClient) { }

  movieUrl: string = 'https://api.themoviedb.org/3/movie/';
  getPopularMoviesUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=bd10005d959e8bce3e46efab4f86d0b0&language=en-US&page=';
  getTopRatedMoviesUrl = this.movieUrl + 'top_rated?api_key=bd10005d959e8bce3e46efab4f86d0b0&language=en-US&page=';
  getUpcommingMoviesUrl = this.movieUrl + 'upcoming?api_key=bd10005d959e8bce3e46efab4f86d0b0&language=en-US&page=';
  getNowPlayingMoviesUrl = this.movieUrl + 'now_playing?api_key=bd10005d959e8bce3e46efab4f86d0b0&language=en-US&page=';
  getLatestMovieUrl = this.movieUrl + 'latest?api_key=bd10005d959e8bce3e46efab4f86d0b0&language=en-US';
  getMovieDetailsUrl = this.movieUrl + '?api_key=bd10005d959e8bce3e46efab4f86d0b0&language=en-US';

  getPopularMovies(page) {
    const result = this.http.get(this.getPopularMoviesUrl + page)
      .pipe(map((response) => {
        if (response == null) {
          return null;
        }
        return response;
      }),
      );
    return result;
  }

  getTopRatedMovies(page) {
    const result = this.http.get(this.getTopRatedMoviesUrl + page)
      .pipe(map((response) => {
        if (response == null) {
          return null;
        }
        return response;
      }),
      );
    return result;
  }

  getUpcommingMovies(page) {
    const result = this.http.get(this.getUpcommingMoviesUrl + page)
      .pipe(map((response) => {
        if (response == null) {
          return null;
        }
        return response;
      }),
      );
    return result;
  }

  getNowPlayingMovies(page) {
    const result = this.http.get(this.getNowPlayingMoviesUrl + page)
      .pipe(map((response) => {
        if (response == null) {
          return null;
        }
        return response;
      }),
      );
    return result;
  }

  getMovie(movieId) {
    const result = this.http.get(this.movieUrl + movieId + '?api_key=bd10005d959e8bce3e46efab4f86d0b0&language=en-US')
      .pipe(map((response) => {
        if (response == null) {
          return null;
        }
        return response;
      }),
      );
    return result;
  }

}
