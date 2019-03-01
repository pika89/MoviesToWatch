(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _movies_top_rated_movies_top_rated_movies_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./movies/top-rated-movies/top-rated-movies.component */ "./src/app/movies/top-rated-movies/top-rated-movies.component.ts");
/* harmony import */ var _movies_upcomming_movies_upcomming_movies_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./movies/upcomming-movies/upcomming-movies.component */ "./src/app/movies/upcomming-movies/upcomming-movies.component.ts");
/* harmony import */ var _movies_now_playing_now_playing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./movies/now-playing/now-playing.component */ "./src/app/movies/now-playing/now-playing.component.ts");
/* harmony import */ var _movies_popular_movies_popular_movies_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./movies/popular-movies/popular-movies.component */ "./src/app/movies/popular-movies/popular-movies.component.ts");
/* harmony import */ var _nav_layout_navigation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nav-layout/navigation.component */ "./src/app/nav-layout/navigation.component.ts");
/* harmony import */ var _movies_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./movies/movie-details/movie-details.component */ "./src/app/movies/movie-details/movie-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    {
        path: '', component: _movies_popular_movies_popular_movies_component__WEBPACK_IMPORTED_MODULE_13__["PopularMoviesComponent"]
    },
    { path: 'top-rated-movies', component: _movies_top_rated_movies_top_rated_movies_component__WEBPACK_IMPORTED_MODULE_10__["TopRatedMoviesComponent"] },
    { path: 'upcomming-movies', component: _movies_upcomming_movies_upcomming_movies_component__WEBPACK_IMPORTED_MODULE_11__["UpcommingMoviesComponent"] },
    { path: 'now-playing-movies', component: _movies_now_playing_now_playing_component__WEBPACK_IMPORTED_MODULE_12__["NowPlayingComponent"] },
    { path: 'movie/:id/:title', component: _movies_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_15__["MovieDetailsComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _movies_movies_component__WEBPACK_IMPORTED_MODULE_9__["MoviesComponent"],
                _movies_top_rated_movies_top_rated_movies_component__WEBPACK_IMPORTED_MODULE_10__["TopRatedMoviesComponent"],
                _movies_upcomming_movies_upcomming_movies_component__WEBPACK_IMPORTED_MODULE_11__["UpcommingMoviesComponent"],
                _movies_now_playing_now_playing_component__WEBPACK_IMPORTED_MODULE_12__["NowPlayingComponent"],
                _movies_popular_movies_popular_movies_component__WEBPACK_IMPORTED_MODULE_13__["PopularMoviesComponent"],
                _nav_layout_navigation_component__WEBPACK_IMPORTED_MODULE_14__["NavigationComponent"],
                _movies_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_15__["MovieDetailsComponent"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/popular-movies.ts":
/*!******************************************!*\
  !*** ./src/app/models/popular-movies.ts ***!
  \******************************************/
/*! exports provided: Movies, Result */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movies", function() { return Movies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Movies = /** @class */ (function () {
    function Movies() {
    }
    return Movies;
}());

var Result = /** @class */ (function (_super) {
    __extends(Result, _super);
    function Result() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Result;
}(Movies));



/***/ }),

/***/ "./src/app/movies/movie-details/movie-details.component.css":
/*!******************************************************************!*\
  !*** ./src/app/movies/movie-details/movie-details.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    z-index: 1;\r\n \r\n  }\r\n\r\n  .bgd-img{\r\n    width: 100%;\r\n    position: absolute;\r\n    opacity: 0.3;\r\n    left: 0;\r\n    z-index: -1;\r\n    height: 905px;\r\n  }\r\n\r\n  .first-box {\r\n    width:30%; \r\n    float:left; \r\n    margin: 10px 10px 0 10px;\r\n  }\r\n\r\n  .first-box img {\r\n    width: 100%;\r\n    margin: 10px 10px 0 10px;\r\n  }\r\n\r\n  .second-box {\r\n    width:60%;\r\n    margin: 16px 10px 0 10px;\r\n    float:left; \r\n  }\r\n\r\n  .second-box span{\r\n    font-size: 20px;\r\n  }\r\n\r\n  @media screen and (max-width: 1366px) {\r\n    .bgd-img {\r\n      height: 886px;\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width: 992px) {\r\n    .bgd-img {\r\n      height: 960px;\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width: 600px) {\r\n    .bgd-img {\r\n      height: 680px;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllLWRldGFpbHMvbW92aWUtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTs7RUFFWjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE9BQU87SUFDUCxXQUFXO0lBQ1gsYUFBYTtFQUNmOztFQUVBO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsU0FBUztJQUNULHdCQUF3QjtJQUN4QixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0U7TUFDRSxhQUFhO0lBQ2Y7RUFDRjs7RUFFQTtJQUNFO01BQ0UsYUFBYTtJQUNmO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLGFBQWE7SUFDZjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvbW92aWVzL21vdmllLWRldGFpbHMvbW92aWUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuIFxyXG4gIH1cclxuXHJcbiAgLmJnZC1pbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGhlaWdodDogOTA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5maXJzdC1ib3gge1xyXG4gICAgd2lkdGg6MzAlOyBcclxuICAgIGZsb2F0OmxlZnQ7IFxyXG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMCAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuZmlyc3QtYm94IGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMTBweCAxMHB4IDAgMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNlY29uZC1ib3gge1xyXG4gICAgd2lkdGg6NjAlO1xyXG4gICAgbWFyZ2luOiAxNnB4IDEwcHggMCAxMHB4O1xyXG4gICAgZmxvYXQ6bGVmdDsgXHJcbiAgfVxyXG5cclxuICAuc2Vjb25kLWJveCBzcGFue1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSB7XHJcbiAgICAuYmdkLWltZyB7XHJcbiAgICAgIGhlaWdodDogODg2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmJnZC1pbWcge1xyXG4gICAgICBoZWlnaHQ6IDk2MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5iZ2QtaW1nIHtcclxuICAgICAgaGVpZ2h0OiA2ODBweDtcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/movies/movie-details/movie-details.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/movies/movie-details/movie-details.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mat-typography\">\r\n  <app-navigation></app-navigation>\r\n  <div class=\"container\">\r\n      <img class=\"bgd-img\" src=\"https://image.tmdb.org/t/p/w500{{movie?.backdrop_path}}\" alt=\"\">\r\n      <div class=\"first-box\">\r\n          <img  mat-card-image src=\"https://image.tmdb.org/t/p/w500{{movie?.poster_path}}\" alt=\"{{movie?.title}}\">\r\n        </div>\r\n    \r\n      <div class=\"second-box\">\r\n          <h1>{{movie?.title}} ({{movie?.release_date | date: 'yyyy'}})</h1>\r\n          <span>{{movie?.vote_average}}/10</span>\r\n          <br>\r\n          <br>\r\n          <p>{{movie?.overview}}</p>\r\n      </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/movies/movie-details/movie-details.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/movies/movie-details/movie-details.component.ts ***!
  \*****************************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_movies_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/movies-service.service */ "./src/app/services/movies-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieDetailsComponent = /** @class */ (function () {
    function MovieDetailsComponent(_movieService, route) {
        this._movieService = _movieService;
        this.route = route;
    }
    MovieDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.movieId = +params['id']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
        this.getMovieDetails();
    };
    MovieDetailsComponent.prototype.getMovieDetails = function () {
        var _this = this;
        this._movieService.getMovie(this.movieId).subscribe(function (response) {
            _this.movie = response;
            _this.url = 'https://image.tmdb.org/t/p/w500' + _this.movie.backdrop_path;
            console.log(_this.url);
        }, function (error) {
            console.log(error);
        });
    };
    MovieDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-details',
            template: __webpack_require__(/*! ./movie-details.component.html */ "./src/app/movies/movie-details/movie-details.component.html"),
            styles: [__webpack_require__(/*! ./movie-details.component.css */ "./src/app/movies/movie-details/movie-details.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_movies_service_service__WEBPACK_IMPORTED_MODULE_1__["MoviesServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MovieDetailsComponent);
    return MovieDetailsComponent;
}());



/***/ }),

/***/ "./src/app/movies/movies.component.css":
/*!*********************************************!*\
  !*** ./src/app/movies/movies.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    display: inline-block !important;\r\n    width: 400px;\r\n    margin: 21px;\r\n    height: 700px;\r\n}\r\n.mat-card-title{\r\n    width: 300px;\r\n    cursor: pointer;\r\n}\r\n.mat-toolbar-row, .mat-toolbar-single-row{\r\n    padding: 0 20px;\r\n}\r\n.mat-card-header span{\r\n    float: right;\r\n    font-size: 20px;\r\n}\r\n.example-card p {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.mat-card-image{\r\n    height: 100%;\r\n}\r\n.fill-remaining-space {\r\n    /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\r\n    flex: 1 1 auto;\r\n  }\r\n.nav-item{\r\n      cursor: pointer;\r\n      padding: 0 9px;\r\n  }\r\nh1{\r\n      margin: 19px;\r\n  }\r\n@media screen and (max-width: 1366px) {\r\n    .example-card {\r\n        width: 380px;\r\n        height: 500px;\r\n    }\r\n\r\n    .mat-card-title{\r\n        width: 250px;\r\n        font-size: 18px;\r\n    }\r\n  }\r\n@media screen and (max-width: 1024px) {\r\n    .example-card {\r\n        width: 305px;\r\n        height: 410px;\r\n    }\r\n    .mat-card-title{\r\n        width: 160px;\r\n        font-size: 12px;\r\n    }\r\n    #vote-average{\r\n        font-size: 12px;\r\n\r\n    }\r\n  }\r\n@media screen and (max-width: 768px) {\r\n    .example-card {\r\n        height: 500px;\r\n        width: 310px;\r\n    }\r\n    .mat-card-title{\r\n        width: 220px;\r\n        font-size: 16px;\r\n    }\r\n    #vote-average{\r\n        font-size: 16px;\r\n    }\r\n  }\r\n/* \r\n  @media screen and (max-width: 600px) {\r\n    .example-card {\r\n        margin: 40px auto;\r\n        height: 400px;\r\n    }\r\n    .mat-card-title{\r\n        width: 160px;\r\n        font-size: 14px;\r\n    }\r\n    #vote-average{\r\n     font-size: 14px;       \r\n    }\r\n    h1{\r\n        font-size: 16px;\r\n    }\r\n  } */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0k7cURBQ2lEO0lBQ2pELGNBQWM7RUFDaEI7QUFFQTtNQUNJLGVBQWU7TUFDZixjQUFjO0VBQ2xCO0FBRUE7TUFDSSxZQUFZO0VBQ2hCO0FBR0E7SUFDRTtRQUNJLFlBQVk7UUFDWixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGVBQWU7SUFDbkI7RUFDRjtBQUVBO0lBQ0U7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7O0lBRW5CO0VBQ0Y7QUFFQTtJQUNFO1FBQ0ksYUFBYTtRQUNiLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7UUFDWixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0VBQ0Y7QUFDRjs7Ozs7Ozs7Ozs7Ozs7OztLQWdCSyIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDIxcHg7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG59XHJcbi5tYXQtY2FyZC10aXRsZXtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubWF0LXRvb2xiYXItcm93LCAubWF0LXRvb2xiYXItc2luZ2xlLXJvd3tcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG4ubWF0LWNhcmQtaGVhZGVyIHNwYW57XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmV4YW1wbGUtY2FyZCBwIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn0gIFxyXG5cclxuLm1hdC1jYXJkLWltYWdle1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gICAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcclxuICAgICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcblxyXG4gIC5uYXYtaXRlbXtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBwYWRkaW5nOiAwIDlweDtcclxuICB9XHJcblxyXG4gIGgxe1xyXG4gICAgICBtYXJnaW46IDE5cHg7XHJcbiAgfVxyXG5cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIHtcclxuICAgIC5leGFtcGxlLWNhcmQge1xyXG4gICAgICAgIHdpZHRoOiAzODBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtY2FyZC10aXRsZXtcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuZXhhbXBsZS1jYXJkIHtcclxuICAgICAgICB3aWR0aDogMzA1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MTBweDtcclxuICAgIH1cclxuICAgIC5tYXQtY2FyZC10aXRsZXtcclxuICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgI3ZvdGUtYXZlcmFnZXtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5leGFtcGxlLWNhcmQge1xyXG4gICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDMxMHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1jYXJkLXRpdGxle1xyXG4gICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAjdm90ZS1hdmVyYWdle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICB9XHJcbi8qIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuZXhhbXBsZS1jYXJkIHtcclxuICAgICAgICBtYXJnaW46IDQwcHggYXV0bztcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1jYXJkLXRpdGxle1xyXG4gICAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAjdm90ZS1hdmVyYWdle1xyXG4gICAgIGZvbnQtc2l6ZTogMTRweDsgICAgICAgXHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgfSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/movies/movies.component.html":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mat-typography\">\r\n  <app-navigation></app-navigation>\r\n  <h1>{{title | titlecase}}</h1>\r\n  <div fxLayout=\"row\" >\r\n    <div fxLayout.xs=\"column\" fxLayoutWrap  fxFlexFill>\r\n      <mat-card class=\"example-card\"  *ngFor=\"let item of movies.results\">\r\n        <mat-card-header>\r\n          <mat-card-title (click)=\"goToMovie(item)\" class=\"card-title\">{{item.title | slice:0:29 }} <ng-container\r\n              *ngIf=\"item.title.length >= 29\">...</ng-container>\r\n          </mat-card-title>\r\n          <span id=\"vote-average\">{{item.vote_average}}/10</span>\r\n          <mat-card-subtitle>{{item.release_date | date: 'dd/MM/yyyy'}}</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <img mat-card-image src=\"https://image.tmdb.org/t/p/w500{{item.poster_path}}\" alt=\"{{item.title}}\">\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n  <mat-paginator (page)=\"pageEvent = checkPage($event)\" [length]=\"movies.totalResults\"\r\n    [pageSize]=\"movies.results?.length\" [pageSizeOptions]=\"[5, 10, 15, 20]\">\r\n  </mat-paginator>\r\n</section>"

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movies_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/movies-service.service */ "./src/app/services/movies-service.service.ts");
/* harmony import */ var _models_popular_movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/popular-movies */ "./src/app/models/popular-movies.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(_moviesService, router, route) {
        this._moviesService = _moviesService;
        this.router = router;
        this.route = route;
        this.movies = new _models_popular_movies__WEBPACK_IMPORTED_MODULE_2__["Movies"]();
        this.regularDistribution = 100 / 3;
    }
    MoviesComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.routeConfig.path === '') {
            this.title = 'Popular-Movies';
        }
        else {
            this.title = this.route.snapshot.routeConfig.path;
        }
    };
    MoviesComponent.prototype.checkPage = function (e) {
        var _this = this;
        window.scrollTo(0, 0);
        var nextPage = e.pageIndex + 1;
        this.paginate(nextPage)
            .subscribe(function (response) {
            _this.movies = response;
            _this.movies.results.length = e.pageSize;
        }, function (error) {
            console.log(error);
        });
    };
    MoviesComponent.prototype.goToMovie = function (movie) {
        var url = 'movie/' + movie.id + '/' + movie.title;
        this.router.navigateByUrl(url);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MoviesComponent.prototype, "movies", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], MoviesComponent.prototype, "paginate", void 0);
    MoviesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.css */ "./src/app/movies/movies.component.css")]
        }),
        __metadata("design:paramtypes", [_services_movies_service_service__WEBPACK_IMPORTED_MODULE_1__["MoviesServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/movies/now-playing/now-playing.component.css":
/*!**************************************************************!*\
  !*** ./src/app/movies/now-playing/now-playing.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9ub3ctcGxheWluZy9ub3ctcGxheWluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/movies/now-playing/now-playing.component.html":
/*!***************************************************************!*\
  !*** ./src/app/movies/now-playing/now-playing.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-movies [(movies)]=\"movies\" [(paginate)]=\"paginate\"></app-movies>\r\n"

/***/ }),

/***/ "./src/app/movies/now-playing/now-playing.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/movies/now-playing/now-playing.component.ts ***!
  \*************************************************************/
/*! exports provided: NowPlayingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NowPlayingComponent", function() { return NowPlayingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_movies_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/movies-service.service */ "./src/app/services/movies-service.service.ts");
/* harmony import */ var src_app_models_popular_movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/popular-movies */ "./src/app/models/popular-movies.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NowPlayingComponent = /** @class */ (function () {
    function NowPlayingComponent(_moviesService) {
        this._moviesService = _moviesService;
        this.movies = new src_app_models_popular_movies__WEBPACK_IMPORTED_MODULE_2__["Movies"]();
        this.nowPlaying = true;
    }
    NowPlayingComponent.prototype.ngOnInit = function () {
        this.getNowPlayingMovies();
        this.paginate = this.paginateFunction.bind(this);
    };
    NowPlayingComponent.prototype.getNowPlayingMovies = function () {
        var _this = this;
        this._moviesService.getNowPlayingMovies(1)
            .subscribe(function (response) {
            _this.movies = response;
            _this.movies.popular = false;
            _this.movies.topRated = false;
            _this.movies.upcomming = false;
            _this.movies.nowPlaying = true;
        }, function (error) {
            console.log(error);
        });
    };
    NowPlayingComponent.prototype.paginateFunction = function (page) {
        return this._moviesService.getNowPlayingMovies(page);
    };
    NowPlayingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-now-playing',
            template: __webpack_require__(/*! ./now-playing.component.html */ "./src/app/movies/now-playing/now-playing.component.html"),
            styles: [__webpack_require__(/*! ./now-playing.component.css */ "./src/app/movies/now-playing/now-playing.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_movies_service_service__WEBPACK_IMPORTED_MODULE_1__["MoviesServiceService"]])
    ], NowPlayingComponent);
    return NowPlayingComponent;
}());



/***/ }),

/***/ "./src/app/movies/popular-movies/popular-movies.component.css":
/*!********************************************************************!*\
  !*** ./src/app/movies/popular-movies/popular-movies.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9wb3B1bGFyLW1vdmllcy9wb3B1bGFyLW1vdmllcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/movies/popular-movies/popular-movies.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/movies/popular-movies/popular-movies.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-movies [(movies)]=\"movies\" [(paginate)]=\"paginate\"></app-movies>"

/***/ }),

/***/ "./src/app/movies/popular-movies/popular-movies.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/movies/popular-movies/popular-movies.component.ts ***!
  \*******************************************************************/
/*! exports provided: PopularMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularMoviesComponent", function() { return PopularMoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_movies_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/movies-service.service */ "./src/app/services/movies-service.service.ts");
/* harmony import */ var src_app_models_popular_movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/popular-movies */ "./src/app/models/popular-movies.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopularMoviesComponent = /** @class */ (function () {
    function PopularMoviesComponent(_moviesService) {
        this._moviesService = _moviesService;
        this.movies = new src_app_models_popular_movies__WEBPACK_IMPORTED_MODULE_2__["Movies"]();
    }
    PopularMoviesComponent.prototype.ngOnInit = function () {
        this.getPopularMovies();
        this.paginate = this.paginateFunction.bind(this);
    };
    PopularMoviesComponent.prototype.getPopularMovies = function () {
        var _this = this;
        this._moviesService.getPopularMovies(1)
            .subscribe(function (response) {
            _this.movies = response;
        }, function (error) {
            console.log(error);
        });
    };
    PopularMoviesComponent.prototype.paginateFunction = function (page) {
        return this._moviesService.getPopularMovies(page);
    };
    PopularMoviesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popular-movies',
            template: __webpack_require__(/*! ./popular-movies.component.html */ "./src/app/movies/popular-movies/popular-movies.component.html"),
            styles: [__webpack_require__(/*! ./popular-movies.component.css */ "./src/app/movies/popular-movies/popular-movies.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_movies_service_service__WEBPACK_IMPORTED_MODULE_1__["MoviesServiceService"]])
    ], PopularMoviesComponent);
    return PopularMoviesComponent;
}());



/***/ }),

/***/ "./src/app/movies/top-rated-movies/top-rated-movies.component.css":
/*!************************************************************************!*\
  !*** ./src/app/movies/top-rated-movies/top-rated-movies.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy90b3AtcmF0ZWQtbW92aWVzL3RvcC1yYXRlZC1tb3ZpZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/movies/top-rated-movies/top-rated-movies.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/movies/top-rated-movies/top-rated-movies.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-movies [(movies)]=\"movies\" [(paginate)]=\"paginate\"></app-movies>\r\n"

/***/ }),

/***/ "./src/app/movies/top-rated-movies/top-rated-movies.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/movies/top-rated-movies/top-rated-movies.component.ts ***!
  \***********************************************************************/
/*! exports provided: TopRatedMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopRatedMoviesComponent", function() { return TopRatedMoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_movies_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/movies-service.service */ "./src/app/services/movies-service.service.ts");
/* harmony import */ var src_app_models_popular_movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/popular-movies */ "./src/app/models/popular-movies.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopRatedMoviesComponent = /** @class */ (function () {
    function TopRatedMoviesComponent(_moviesService) {
        this._moviesService = _moviesService;
        this.movies = new src_app_models_popular_movies__WEBPACK_IMPORTED_MODULE_2__["Movies"]();
    }
    TopRatedMoviesComponent.prototype.ngOnInit = function () {
        this.getTopRatedMovies();
        this.paginate = this.paginateFunction.bind(this);
    };
    TopRatedMoviesComponent.prototype.getTopRatedMovies = function () {
        var _this = this;
        this._moviesService.getTopRatedMovies(1)
            .subscribe(function (response) {
            _this.movies = response;
        }, function (error) {
            console.log(error);
        });
    };
    TopRatedMoviesComponent.prototype.paginateFunction = function (page) {
        return this._moviesService.getTopRatedMovies(page);
    };
    TopRatedMoviesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-rated-movies',
            template: __webpack_require__(/*! ./top-rated-movies.component.html */ "./src/app/movies/top-rated-movies/top-rated-movies.component.html"),
            styles: [__webpack_require__(/*! ./top-rated-movies.component.css */ "./src/app/movies/top-rated-movies/top-rated-movies.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_movies_service_service__WEBPACK_IMPORTED_MODULE_1__["MoviesServiceService"]])
    ], TopRatedMoviesComponent);
    return TopRatedMoviesComponent;
}());



/***/ }),

/***/ "./src/app/movies/upcomming-movies/upcomming-movies.component.css":
/*!************************************************************************!*\
  !*** ./src/app/movies/upcomming-movies/upcomming-movies.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy91cGNvbW1pbmctbW92aWVzL3VwY29tbWluZy1tb3ZpZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/movies/upcomming-movies/upcomming-movies.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/movies/upcomming-movies/upcomming-movies.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-movies [(movies)]=\"movies\" [(paginate)]=\"paginate\"></app-movies>"

/***/ }),

/***/ "./src/app/movies/upcomming-movies/upcomming-movies.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/movies/upcomming-movies/upcomming-movies.component.ts ***!
  \***********************************************************************/
/*! exports provided: UpcommingMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcommingMoviesComponent", function() { return UpcommingMoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_movies_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/movies-service.service */ "./src/app/services/movies-service.service.ts");
/* harmony import */ var src_app_models_popular_movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/popular-movies */ "./src/app/models/popular-movies.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpcommingMoviesComponent = /** @class */ (function () {
    function UpcommingMoviesComponent(_moviesService, route) {
        this._moviesService = _moviesService;
        this.route = route;
        this.movies = new src_app_models_popular_movies__WEBPACK_IMPORTED_MODULE_2__["Movies"]();
        this.upcomming = true;
    }
    UpcommingMoviesComponent.prototype.ngOnInit = function () {
        this.getUpcommingMovies();
        this.paginate = this.paginateFunction.bind(this);
        console.log(this.route.snapshot.routeConfig.path);
    };
    UpcommingMoviesComponent.prototype.getUpcommingMovies = function () {
        var _this = this;
        this._moviesService.getUpcommingMovies(1)
            .subscribe(function (response) {
            _this.movies = response;
        }, function (error) {
            console.log(error);
        });
    };
    UpcommingMoviesComponent.prototype.paginateFunction = function (page) {
        return this._moviesService.getUpcommingMovies(page);
    };
    UpcommingMoviesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upcomming-movies',
            template: __webpack_require__(/*! ./upcomming-movies.component.html */ "./src/app/movies/upcomming-movies/upcomming-movies.component.html"),
            styles: [__webpack_require__(/*! ./upcomming-movies.component.css */ "./src/app/movies/upcomming-movies/upcomming-movies.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_movies_service_service__WEBPACK_IMPORTED_MODULE_1__["MoviesServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UpcommingMoviesComponent);
    return UpcommingMoviesComponent;
}());



/***/ }),

/***/ "./src/app/nav-layout/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/nav-layout/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\r\n    /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\r\n    flex: 1 1 auto;\r\n  }\r\n\r\n  .nav-item{\r\n      cursor: pointer;\r\n      padding: 0 9px;\r\n  }\r\n\r\n  .dropbtn {\r\n    color: white;\r\n    padding: 21px 16px;\r\n    border: none;\r\n  }\r\n\r\n  .dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n\r\n  .dropdown-content {\r\n    display: none;\r\n    top: 48px;\r\n    position: absolute;\r\n    background-color: #f1f1f1;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 2;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n  }\r\n\r\n  .dropdown-content a:hover {background-color: #ddd;}\r\n\r\n  .dropdown-content a:active {background-color: #ddd;}\r\n\r\n  .dropdown:hover .dropdown-content {display: block;}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWxheW91dC9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtxREFDaUQ7SUFDakQsY0FBYztFQUNoQjs7RUFFQTtNQUNJLGVBQWU7TUFDZixjQUFjO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQiw0Q0FBNEM7SUFDNUMsVUFBVTtJQUNWLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjO0VBQ2hCOztFQUdGLDJCQUEyQixzQkFBc0IsQ0FBQzs7RUFDbEQsNEJBQTRCLHNCQUFzQixDQUFDOztFQUVuRCxtQ0FBbUMsY0FBYyxDQUFDIiwiZmlsZSI6InNyYy9hcHAvbmF2LWxheW91dC9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gICAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcclxuICAgICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcblxyXG4gIC5uYXYtaXRlbXtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBwYWRkaW5nOiAwIDlweDtcclxuICB9XHJcblxyXG4gIC5kcm9wYnRuIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIxcHggMTZweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHRvcDogNDhweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tY29udGVudCBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgXHJcbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxyXG4uZHJvcGRvd24tY29udGVudCBhOmFjdGl2ZSB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XHJcblxyXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge2Rpc3BsYXk6IGJsb2NrO31cclxuIl19 */"

/***/ }),

/***/ "./src/app/nav-layout/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/nav-layout/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"warn\">\r\n  <span class=\"nav-item dropdown\"> \r\n    <span class=\"dropbtn\">Movies</span>\r\n    <span class=\"dropdown-content\">\r\n      <a [routerLink]=\"['/']\">Popular Movies</a>\r\n      <a [routerLink]=\"['/top-rated-movies']\">Top Rated Movies</a>\r\n      <a [routerLink]=\"['/upcomming-movies']\">Upcomming Movies</a>\r\n      <a [routerLink]=\"['/now-playing-movies']\">Now Playing Movies</a>\r\n    </span> </span>\r\n  <span routerLinkActive=\"router-link-active\" class=\"nav-item\">TV Shows</span>\r\n  <span routerLinkActive=\"router-link-active\" class=\"nav-item\">Actors</span>\r\n  <span class=\"fill-remaining-space\"></span>\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/nav-layout/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/nav-layout/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(route) {
        this.route = route;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.setTitle();
    };
    NavigationComponent.prototype.setTitle = function () {
        if (this.route.snapshot.routeConfig.path === '') {
            this.title = 'Popular-Movies';
        }
        else {
            this.title = this.route.snapshot.routeConfig.path;
        }
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/nav-layout/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/nav-layout/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/services/movies-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/movies-service.service.ts ***!
  \****************************************************/
/*! exports provided: MoviesServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesServiceService", function() { return MoviesServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoviesServiceService = /** @class */ (function () {
    function MoviesServiceService(http) {
        this.http = http;
        this.movieUrl = 'https://api.themoviedb.org/3/movie/';
        this.getPopularMoviesUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=bd10005d959e8bce3e46efab4f86d0b0&language=en-US&page=';
        this.getTopRatedMoviesUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=bd10005d959e8bce3e46efab4f86d0b0&language=en-US&page=';
        this.getUpcommingMoviesUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=bd10005d959e8bce3e46efab4f86d0b0&language=en-US&page=';
        this.getNowPlayingMoviesUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=bd10005d959e8bce3e46efab4f86d0b0&language=en-US&page=';
        this.getLatestMovieUrl = 'https://api.themoviedb.org/3/movie/latest?api_key=bd10005d959e8bce3e46efab4f86d0b0&language=en-US';
        this.getMovieDetailsUrl = 'https://api.themoviedb.org/3/movie/?api_key=bd10005d959e8bce3e46efab4f86d0b0&language=en-US';
    }
    MoviesServiceService.prototype.getPopularMovies = function (page) {
        var result = this.http.get(this.getPopularMoviesUrl + page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            if (response == null) {
                return null;
            }
            return response;
        }));
        return result;
    };
    MoviesServiceService.prototype.getTopRatedMovies = function (page) {
        var result = this.http.get(this.getTopRatedMoviesUrl + page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            if (response == null) {
                return null;
            }
            return response;
        }));
        return result;
    };
    MoviesServiceService.prototype.getUpcommingMovies = function (page) {
        var result = this.http.get(this.getUpcommingMoviesUrl + page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            if (response == null) {
                return null;
            }
            return response;
        }));
        return result;
    };
    MoviesServiceService.prototype.getNowPlayingMovies = function (page) {
        var result = this.http.get(this.getNowPlayingMoviesUrl + page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            if (response == null) {
                return null;
            }
            return response;
        }));
        return result;
    };
    MoviesServiceService.prototype.getMovie = function (movieId) {
        var result = this.http.get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=bd10005d959e8bce3e46efab4f86d0b0&language=en-US')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            if (response == null) {
                return null;
            }
            return response;
        }));
        return result;
    };
    MoviesServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MoviesServiceService);
    return MoviesServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dusan Nikodijevic\movietowatch\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map