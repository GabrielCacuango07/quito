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
  // show all the day whit the information for edit whit the botton
  ngOnInit() {

    this.horarios = this._horarioService.getHorarios();
    //console.log(this.horarios);

  }

  // consult only the  day and redirects to show the day for edit the schedule
  verDia(idx:number){
    //console.log(idx);
    this.router.navigate(['/dia',idx]);

  };


}

