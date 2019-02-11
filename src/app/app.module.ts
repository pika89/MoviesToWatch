import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatGridListModule, MatToolbarModule, MatIconModule, MatButtonModule, MatPaginatorModule } from "@angular/material";
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { TopRatedMoviesComponent } from './movies/top-rated-movies/top-rated-movies.component';
import { UpcommingMoviesComponent } from './movies/upcomming-movies/upcomming-movies.component';
import { NowPlayingComponent } from './movies/now-playing/now-playing.component';
import { PopularMoviesComponent } from './movies/popular-movies/popular-movies.component';
import { PopularTvshowsComponent } from './tv-shows/popular-tvshows/popular-tvshows.component';

const appRoutes: Routes = [
  {
    path: '', component: PopularMoviesComponent
  },
  { path: 'top-rated', component: TopRatedMoviesComponent },
  { path: 'upcomming-movies', component: UpcommingMoviesComponent },
  { path: 'now-playing', component: NowPlayingComponent },
  { path: 'popular-tv-shows', component: PopularTvshowsComponent },


];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TopRatedMoviesComponent,
    UpcommingMoviesComponent,
    NowPlayingComponent,
    PopularMoviesComponent,
    PopularTvshowsComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    MatCardModule,
    MatPaginatorModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
