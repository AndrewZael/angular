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

  hoy = new Date();
  title: string = 'Pipe con Angular';
  num: number = 10000;

  recibirTitulo(event: any) {
    alert(`Infomación recibida desde Hijo: ${event}`);
  }

}