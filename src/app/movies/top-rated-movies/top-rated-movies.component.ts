import { Component, OnInit, Input } from '@angular/core';
import { MoviesServiceService } from 'src/app/services/movies-service.service';
import { Movies } from 'src/app/models/popular-movies';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.css']
})
export class TopRatedMoviesComponent implements OnInit {
  movies = new Movies();
  paginate: Function;

  constructor(private _moviesService: MoviesServiceService) { }

  ngOnInit() {
    this.getTopRatedMovies();
    this.paginate = this.paginateFunction.bind(this);
  }


  getTopRatedMovies() {
    this._moviesService.getTopRatedMovies(1)
      .subscribe((response: Movies) => {
        this.movies = response;
      },
        (error) => {
          console.log(error);
        });
  }

  paginateFunction(page){
    return this._moviesService.getTopRatedMovies(page);
  }

}
