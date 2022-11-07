import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/providers/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  usuario = {
    nombre: '',
    institucion: '',
    carrera: '',
    matricula: '',
    celular: '',
    correo: '',
    password: '********'
  };

  constructor(private fb: FormBuilder, private router: Router, private AS: AuthService, private CS: CookieService) { }

  ngOnInit(): void {

    this.usuario.nombre = this.CS.get('nombre') + ' ' + this.CS.get('apellido_paterno') + ' ' + this.CS.get('apellido_materno');
    this.usuario.institucion = this.CS.get('institucion');
    this.usuario.carrera = this.CS.get('carrera');
    this.usuario.matricula = this.CS.get('matricula');
    this.usuario.celular = this.CS.get('celular');
    this.usuario.correo = this.CS.get('correo');

    if (this.usuario.nombre == 'null null null') {
      this.usuario.nombre = 'Completa tu registro'
      this.usuario.institucion = 'Completa tu registro'
      this.usuario.carrera = 'Completa tu registro'
      this.usuario.matricula = 'Completa tu registro'
      this.usuario.celular = 'Completa tu registro'
    }

  }

}
