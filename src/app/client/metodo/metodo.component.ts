import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metodo',
  templateUrl: './metodo.component.html',
  styleUrls: ['./metodo.component.scss']
})
export class MetodoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  file(){
    console.log('file');
    this.router.navigate(['/eleccion']);
  }

}
