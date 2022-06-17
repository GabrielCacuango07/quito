import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
// functionality of the button Consultar Horarios
  irConsulta(){
    this.router.navigate(['/about']);
    console.log("funciona");
  }

}
