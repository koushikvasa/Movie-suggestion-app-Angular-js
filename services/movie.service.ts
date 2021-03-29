import { Injectable } from '@angular/core';
import { Movie } from '../shared/movie';
import { MOVIES } from '../shared/movies';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  getMovies(): Movie[] {
    return MOVIES;
  }


  constructor() { }
}
