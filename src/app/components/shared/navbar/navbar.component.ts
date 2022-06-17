import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {
 digito: string = "";
  constructor( private router:Router) { }

  ngOnInit(): void {
  }
// use to find the day and readirect for buscar page whit the license plate
buscarPlaca(termino:string){
  //console.log(termino);
  this.digito=termino.substring(termino.length-1,termino.length);
  this.router.navigate(['/buscar',this.digito]);

};

}
