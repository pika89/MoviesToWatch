import { Component, OnInit, Input } from '@angular/core';
import { MoviesServiceService } from '../services/movies-service.service';
import { Movies } from '../models/popular-movies';
import { PageEvent } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  @Input() movies = new Movies();
  @Input() paginate: Function;
  pageEvent: PageEvent;

  constructor(private _moviesService: MoviesServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  checkPage(e) {
    window.scrollTo(0, 0);
    const nextPage = e.pageIndex + 1;
      this.paginate(nextPage)
      .subscribe((response: any) => {
        this.movies = response;
        this.movies.results.length = e.pageSize;
      },
        (error) => {
          console.log(error);
        });
  }

  getMovieDetails(movie){
    this._moviesService.getMovie(movie.id).subscribe((response: Movies) => {
      const url = 'movie/' + movie.id + '/' + movie.title;
      this.router.navigateByUrl(url);
    },
      (error) => {
        console.log(error);
      });
  }

}
