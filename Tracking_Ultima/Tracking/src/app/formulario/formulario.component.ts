import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit{

  /*contacto: FormGroup;
  submitted = false;
  title = 'Validar formulario';

  constructor(private formBuilder: FormBuilder) {
  }*/

  ngOnInit(){
    /*this.contacto = this.formBuilder.group({
      nya: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.contacto.valueChanges.subscribe(console.log)*/
  }
  /*

  get f(){
    return this.contacto.controls;
  }

  onSubmit(){
    this.submitted = true;

    if (this.contacto.invalid) {
      return
    }
    alert('Mensaje Enviado !')
  }
*/
}
