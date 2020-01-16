import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public USERS = [
    new User('Jean', 'Martin'),
    new User('Eric', 'Dupont'),
    new User('Thierry', 'Legrand')
  ]

  constructor() { }

  public getUsers(){
    return this.USERS
  }

  public findUser(name){
    return this.USERS.find( user => {
      return name === user.lastname
    })
  }
}
