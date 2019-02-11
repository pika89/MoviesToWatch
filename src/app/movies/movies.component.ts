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
  title: string;

  constructor(private _moviesService: MoviesServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.checkWhat();
  }


  checkWhat(){
    if(this.route.snapshot.routeConfig.path === ''){
      this.title = 'Popular Movies';
    }
    else if(this.route.snapshot.routeConfig.path === 'top-rated'){
      this.title = 'Top Rated Movies';
    }
    else if(this.route.snapshot.routeConfig.path === 'upcomming-movies'){
      this.title = 'Upcomming Movies';
    }
    else if(this.route.snapshot.routeConfig.path === 'now-playing'){
      this.title = 'Now Playing Movies';
    }
  }

  checkPage(e) {
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

}
