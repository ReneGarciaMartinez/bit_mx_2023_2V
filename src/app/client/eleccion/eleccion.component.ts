import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eleccion',
  templateUrl: './eleccion.component.html',
  styleUrls: ['./eleccion.component.scss']
})
export class EleccionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  eleccion(){
    console.log('eleccion');
    this.router.navigate(['/programa']);
  }

}
