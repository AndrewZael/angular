import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  recibirTitulo(event: any) {
    alert(`Infomación recibida desde Hijo: ${event}`);
  }

}