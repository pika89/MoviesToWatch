import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MoviesServiceService } from 'src/app/services/movies-service.service';
import { Movies } from 'src/app/models/popular-movies';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  movies = new Movies();
  paginate: Function;

  constructor(private _moviesService: MoviesServiceService) { }

  ngOnInit() {
    this.getPopularMovies();
    this.paginate = this.paginateFunction.bind(this);

  }

  getPopularMovies() {
    this._moviesService.getPopularMovies(1)
      .subscribe((response: any) => {
        this.movies = response;
      },
        (error) => {
          console.log(error);
        });
  }

  paginateFunction(page) {
    return this._moviesService.getPopularMovies(page);
  }

}
