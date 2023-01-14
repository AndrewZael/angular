import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-select-elements',
  templateUrl: './select-elements.component.html',
  styleUrls: ['./select-elements.component.scss']
})
export class SelectElementsComponent implements OnInit {

  constructor(private render: Renderer2) {}

  @ViewChild('caja') box: ElementRef = new ElementRef(HTMLDivElement);

  ngOnInit(): void {
    console.log(this.box.nativeElement);
  }

  ngAfterViewInit(): void {

    this.render.listen(this.box.nativeElement, 'click', () => {
      alert('OK');
    });

    setTimeout(() => {
      this.render.addClass(this.box.nativeElement, 'box-active');
      // this.box1.nativeElement.classList.add('box-active');
    }, 3000);
  }

}
