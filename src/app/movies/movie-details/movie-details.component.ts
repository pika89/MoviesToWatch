import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from 'src/app/services/movies-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieId: number;
  movie: any;
  sub: any;

  constructor(private _movieService: MoviesServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.movieId = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
   this.getMovieDetails();
  }

  getMovieDetails(){
    this._movieService.getMovie(this.movieId).subscribe((response: any) => {
      this.movie = response;
    },
      (error) => {
        console.log(error);
      });

}
