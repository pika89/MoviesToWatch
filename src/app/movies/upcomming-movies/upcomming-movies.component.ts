import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from 'src/app/services/movies-service.service';
import { Movies } from 'src/app/models/popular-movies';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upcomming-movies',
  templateUrl: './upcomming-movies.component.html',
  styleUrls: ['./upcomming-movies.component.css']
})
export class UpcommingMoviesComponent implements OnInit {

  movies = new Movies();
  upcomming: boolean = true;
  paginate: Function;

  constructor(private _moviesService: MoviesServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUpcommingMovies();
    this.paginate = this.paginateFunction.bind(this);
    console.log(this.route.snapshot.routeConfig.path);
  }

  getUpcommingMovies() {
    this._moviesService.getUpcommingMovies(1)
      .subscribe((response: Movies) => {
        this.movies = response;
      },
        (error) => {
          console.log(error);
        });
  }

  paginateFunction(page){
    return this._moviesService.getUpcommingMovies(page);
  }

}
