export class Movies {
    public page: number;
    public results: Result[];
    public totalResults: number;
    public totalPages: number;
    public popular: boolean;
    public topRated: boolean;
    public upcomming: boolean;
    public nowPlaying: boolean;
  }

  export class Result extends Movies {
    public id: number;
    public vote_average: number;
    public release_date: string;
    public releaseDate: string;
    public title: string;
    public backdrop_path: string;
    public poster_path: string;
    public overview: string;
  }