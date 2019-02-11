import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from 'src/app/services/movies-service.service';
import { Movies } from 'src/app/models/popular-movies';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {
  movies = new Movies();
  nowPlaying: boolean = true;
  paginate: Function;

  constructor(private _moviesService: MoviesServiceService) { }

  ngOnInit() {
    this.getNowPlayingMovies();
    this.paginate = this.paginateFunction.bind(this);
  }



  getNowPlayingMovies() {
    this._moviesService.getNowPlayingMovies(1)
      .subscribe((response: Movies) => {
        this.movies = response;
        this.movies.popular = false;
        this.movies.topRated = false;
        this.movies.upcomming = false;
        this.movies.nowPlaying = true;
      },
        (error) => {
          console.log(error);
        });
  }

  paginateFunction(page){
    return this._moviesService.getNowPlayingMovies(page);
  }

}
