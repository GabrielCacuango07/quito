import { Component, OnInit } from '@angular/core';
import { horarioService,Horario } from '../service/horario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {

  horarios:Horario [] =[];

  constructor( private _horarioService: horarioService,
                private router:Router ) { 


  }

  ngOnInit() {

    this.horarios = this._horarioService.getHorarios();
    console.log(this.horarios);

  }

  verDia(idx:number){
    console.log(idx);
    this.router.navigate(['/dia',idx]);

  };


}

