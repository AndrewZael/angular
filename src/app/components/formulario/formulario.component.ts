import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', Validators.required]
    });
  }

  sendForm(){
    if(this.formulario.valid){
      console.log(this.formulario);
    }else{
      console.log('Formulario Invalido');
    }
  }

  ngOnInit(): void {}

}
