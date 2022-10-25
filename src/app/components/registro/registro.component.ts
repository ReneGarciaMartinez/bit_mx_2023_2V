import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  emailCheck= '^[a-z0-9._*+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$';

passReq(){
    return this.miFormulario.controls['confirmPassword']?.errors?.['required'] &&
           this.miFormulario.controls['confirmPassword']?.touched && 
           this.miFormulario.controls['pass']?.touched;
  }

emailReq(){
  return this.miFormulario.controls['correo']?.errors?.['required'] &&
         this.miFormulario.controls['correo']?.touched;
}

emailPattern(){
  return this.miFormulario.controls['correo']?.errors?.['pattern'] &&
         this.miFormulario.controls['correo']?.touched;
}

  matchPass(ctrl: FormControl){
    const pass = ctrl.get('pass')?.value;
    const confirmPass = ctrl.get('confirmPassword')?.value;
    if(pass != confirmPass){
      ctrl.get('confirmPassword')?.setErrors({cpass: true});
    }
  }

  miFormulario: FormGroup = this.fb.group({
    correo: ['',[Validators.required]],
    pass: ['',[Validators.required, Validators.minLength(8)]],
    perfil: ['',[Validators.required]],
    estatus: ['',[Validators.required]],
    confirmPassword: ['',[Validators.required]]},{
    validators: this.matchPass
  });

  constructor(private fb: FormBuilder, private CS: CookieService, private router: Router, private AS: AuthService) { }

  ngOnInit(): void {

    this.miFormulario.setValue({
      nombre: '',
      apellido_paterno: '',
      apellido_materno: '',
      carrera: '',
      matricula: '',
      correo: '',
      pass: '',
      confirmPassword: '',
      perfil: '',
      estatus: '',
      taller: '',
      institucion: '',
      celular: ''
    });

    if(this.CS.get('access_token')){
      this.router.navigate(['/welcome']);
    } 
  }

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors 
          && this.miFormulario.controls[campo].touched;

  }

  save(){
    console.log(this.miFormulario.value);
    this.AS.registro(this.miFormulario.value).subscribe((data: any) => {
      console.log(data);
      if(data.message == 'Registrado'){
        this.router.navigate(['/login']);
      }
    });
  }
}
