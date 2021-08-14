import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movies } from '../models/movies';

const enum endpoint {
  latest = '/movie/latest',
  now_playing = '/movie/now_playing',
  popular = '/movie/popular',
  top_rated = '/movie/top_rated',
  upcoming = '/movie/upcoming',
  trending = '/movie/trending',
  originals = '/movie/originals'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private URL = `https//api.themoviedb.org/3`
  private api_key = environment.api;

  constructor(private http: HttpClient) {}

  getLatestMovies(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.latest}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getNowPlayingMovies(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.now_playing}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getOriginalMovies(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.originals}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getPopularMovies(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.popular}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getTopRatedMovies(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.top_rated}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getTrendingMovies(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.trending}`, {
      params: {
        api_key: this.api_key
      }
    });
  }
}
