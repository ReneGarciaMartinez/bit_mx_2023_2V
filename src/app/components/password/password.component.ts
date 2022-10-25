import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  correo: any;

  miFormulario: FormGroup = this.fb.group({
    pass: ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor(private fb: FormBuilder, private router: Router, private AS: AuthService) { }

  ngOnInit(): void {
    this.correo = "rene@gmail.com";

    this.miFormulario.setValue({
      pass: '',
    });

    /*if(this.CS.get('access_token')){
      this.router.navigate(['/welcome']);
    }*/
  }

  campoValido(campo: string) {
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched;

  }

  save() {
    console.log(this.miFormulario.value);
    this.AS.restaurar(this.miFormulario.value).subscribe((data: any) => {
      console.log(data);
      if (data.resultado == 'Actualizado') {
        this.router.navigate(['/login']);
      }
    });
  }
}
