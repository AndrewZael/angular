import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/interfaces/character.interface';
import { HttpService } from 'src/app/services/htpp/http.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html'
})
export class ApiComponent implements OnInit {

  constructor(private http: HttpService) { }

  personajes: Array<CharacterInterface> = [];
  preload: boolean = false;

  getCharacter(){
    this.preload = true;
    this.http.getData('https://thesimpsonsquoteapi.glitch.me/quotes?count=10').subscribe((respuestaAPI: Array<CharacterInterface>) => {
      this.personajes = respuestaAPI;
      this.preload = false;
    });
  }

  ngOnInit(): void {
  }

}
