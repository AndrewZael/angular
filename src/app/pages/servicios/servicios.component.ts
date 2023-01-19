import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
})
export class ServiciosComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }
  id: number = 0;

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      if(params['id'] != undefined){
          this.id = params['id'];
      }
    });
  }

}
