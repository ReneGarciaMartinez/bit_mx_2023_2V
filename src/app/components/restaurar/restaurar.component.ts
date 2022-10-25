import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-restaurar',
  templateUrl: './restaurar.component.html',
  styleUrls: ['./restaurar.component.css']
})
export class RestaurarComponent implements OnInit {
  emailCheck= '^[a-z0-9._*+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$';

emailReq(){
  return this.miFormulario.controls['correo']?.errors?.['required'] &&
         this.miFormulario.controls['correo']?.touched;
}

emailPattern(){
  return this.miFormulario.controls['correo']?.errors?.['pattern'] &&
         this.miFormulario.controls['correo']?.touched;
}

  miFormulario: FormGroup = this.fb.group({
    correo: ['',[Validators.required]]
  });

  constructor(private fb: FormBuilder, private router: Router, private AS: AuthService) { }

  ngOnInit(): void {

    this.miFormulario.setValue({
      correo: '',
    });

  }

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors 
          && this.miFormulario.controls[campo].touched;

  }

  save(){
    this.AS.codigo(this.miFormulario.value).subscribe((data: any) => {
      if(data.codigo){
          console.log(data.codigo);
          this.router.navigate(['/codigo']);
        }else{
          alert('No se pudo hacer');
        }
      });
  }

}
