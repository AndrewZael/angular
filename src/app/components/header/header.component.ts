import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string = 'Titulo aplicativo';
  @Output() tituloOut: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  cambiarTitulo(titulo: string) {
    this.title = titulo;
    this.tituloOut.emit(this.title);
  }

}
