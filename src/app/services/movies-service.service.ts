import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  constructor(private http: HttpClient) { }

  getPopularMoviesUrl = environment.apiUrl + 'popular?api_key=bd10005d959e8bce3e46efab4f86d0b0&language=en-US&page=';
  getTopRatedMoviesUrl = environment.apiUrl + 'top_rated?api_key=bd10005d959e8bce3e46efab4f86d0b0&language=en-US&page=';
  getUpcommingMoviesUrl = environment.apiUrl + 'upcoming?api_key=bd10005d959e8bce3e46efab4f86d0b0&language=en-US&page=';
  getNowPlayingMoviesUrl = environment.apiUrl + 'now_playing?api_key=bd10005d959e8bce3e46efab4f86d0b0&language=en-US&page=';
  getLatestMovieUrl = environment.apiUrl + 'latest?api_key=bd10005d959e8bce3e46efab4f86d0b0&language=en-US';


getPopularMovies(page){
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

getTopRatedMovies(page){
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

getUpcommingMovies(page){
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

getNowPlayingMovies(page){
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

}
