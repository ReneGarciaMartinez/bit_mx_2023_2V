import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.component.html',
  styleUrls: ['./codigo.component.css']
})
export class CodigoComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    codigo: ['',[Validators.required]]
  });

  constructor(private fb: FormBuilder, private router: Router, private AS: AuthService) { }

  ngOnInit(): void {

    this.miFormulario.setValue({
      codigo: '',
    });

  }

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors 
          && this.miFormulario.controls[campo].touched;

  }

  save(){
    console.log(this.miFormulario.value);
    if(this.miFormulario.value.codigo == '123456'){
      console.log('Correcto');
      this.router.navigate(['/password']);
    }
  }
}
