import { Injectable } from '@angular/core';
import { Movie } from '../model/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public MOVIES = [
    new Movie('The Hateful Eight', 'Tarantino', new Date("2015")),
    new Movie('Star Wars: Episode IX - The Rise of Skywalker', 'J.J Abrams', new Date('2019')),
    new Movie('Green Book', 'Peter Farrelly', new Date('2018'))
  ]

  constructor() { }

  getMovies(){
    return this.MOVIES
  }

  //find => Renvoie un objet Movie SI la fonction anonyme renvoie un boolean true
  findMovie(name){
    return this.MOVIES.find( movie => {
      return name = movie.name
    })
  }
}
