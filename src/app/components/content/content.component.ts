import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: [
  ]
})
export class ContentComponent implements OnInit {

  constructor() { }

  @Input() title: string = 'Titulo';

  ngOnInit(): void {
  }

}
