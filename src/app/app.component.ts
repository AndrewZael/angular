import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(){
    registerLocaleData(es);
  }

  data: Array<any> = [
    {
      title: 'Titulo 1',
      body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, adipisci?'
    },
    {
      title: 'Titulo 2',
      body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, adipisci?'
    },
    {
      title: 'Titulo 3',
      body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, adipisci?'
    },
    {
      title: 'Titulo 4',
      body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, adipisci?'
    },
    {
      title: 'Titulo 5',
      body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, adipisci?'
    }
  ];

  hoy = new Date();
  title: string = 'Pipe con Angular';
  num: number = 10000;

  recibirTitulo(event: any) {
    alert(`Infomación recibida desde Hijo: ${event}`);
  }

}