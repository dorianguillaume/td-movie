import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  private movies

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

}
