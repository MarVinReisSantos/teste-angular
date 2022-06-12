import { Component, OnInit, Output } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  count = 0;
  nome = "LISTAGEM DE PERSONAGENS RICK AND MORTY";
  @Output() text = '';

  pessoas = [
    {
      fistName: '',
      lastName: '',
      age: 0
    }
  ];

  constructor(private peopleService: PeopleService){

  }

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.count++;

      if(this.count === 10){
        clearInterval(interval);
      }
    }, 1000 )
    this.getPeople();
  }

  public clicou(nome:string):void{
    //console.log('Clicou em min', this.text)


  }
  getPeople(){
    this.peopleService.getPeople().subscribe(people =>{
      this.pessoas = people;
    })
  }
}
