import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  constructor(private http: HttpClient) { }

  getPopularMoviesUrl = environment.movieUrl + 'popular?api_key=bd10005d959e8bce3e46efab4f86d0b0&language=en-US&page=';
  getTopRatedMoviesUrl = environment.movieUrl + 'top_rated?api_key=bd10005d959e8bce3e46efab4f86d0b0&language=en-US&page=';
  getUpcommingMoviesUrl = environment.movieUrl + 'upcoming?api_key=bd10005d959e8bce3e46efab4f86d0b0&language=en-US&page=';
  getNowPlayingMoviesUrl = environment.movieUrl + 'now_playing?api_key=bd10005d959e8bce3e46efab4f86d0b0&language=en-US&page=';
  getLatestMovieUrl = environment.movieUrl + 'latest?api_key=bd10005d959e8bce3e46efab4f86d0b0&language=en-US';
  getMovieDetailsUrl = environment.movieUrl + '?api_key=bd10005d959e8bce3e46efab4f86d0b0&language=en-US';

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
    const result = this.http.get(environment.movieUrl + movieId + '?api_key=bd10005d959e8bce3e46efab4f86d0b0&language=en-US')
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
