import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterInterface } from 'src/app/interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getData(url: string){
    return this.http.get <Array<CharacterInterface>>(url);
  }

}
