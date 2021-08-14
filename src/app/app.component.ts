import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movies } from './models/movies';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  sticky = false;

  subs: Subscription[] = []

  trending: Movies;
  popular: Movies;
  topRated: Movies;
  originals: Movies;
  nowPlaying: Movies;
  // latest: Movies;

  sliderConfig = {
    slidesToShow: 9,
    slidesToScroll: 2,
    arrows: true,
    autoPlay: false
  };

  @ViewChild('stickyHeader') header: ElementRef;
  headerBGURL: string;

  constructor(private movie:MovieService){}

  ngOnInit(){
    this.subs.push(this.movie.getTrendingMovies().subscribe( data => {
      this.trending = data;
      this.headerBGURL = `https://image.tmdb.org/t/p/original${this.trending.results[0].backdrop_path}`;
    }));
    this.subs.push(this.movie.getPopularMovies().subscribe( data => this.popular = data));
    this.subs.push(this.movie.getTopRatedMovies().subscribe( data => this.topRated = data));
    this.subs.push(this.movie.getOriginalMovies().subscribe( data => this.originals = data));
    this.subs.push(this.movie.getNowPlayingMovies().subscribe( data => this.nowPlaying = data));
    // this.subs.push(this.movie.getLatestMovies().subscribe( data => this.latest = data));
  }

  ngOnDestroy(){
    this.subs.map(s => s.unsubscribe());
  }
}
