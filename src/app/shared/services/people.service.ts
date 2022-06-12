import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any>{
    let peopleArray = [
      {
        fistName: 'Maria',
        lastName: 'Soares',
        age: 26
      },
      {
        fistName: 'Joao',
        lastName: 'Reis',
        age: 13
      },
      {
        fistName: 'Silva',
        lastName: 'Santos',
        age: 28
      },
      {
        fistName: 'Vinicius',
        lastName: 'Soares',
        age: 14
      },{
        fistName: "Santos",
        lastName: "Reis",
        age: 15
      },{
        fistName: "Joao",
        lastName: "Vinicius",
        age: 16
      },{
        fistName: "Maria",
        lastName: "Reis",
        age: 14
      },{
        fistName: "Eduardo",
        lastName: "Santos",
        age: 19
      }
    ]
    return of(peopleArray)
  }
}
