import { Component, OnInit } from '@angular/core';
import { horarioService,Horario } from '../service/horario.service';
@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
})
export class HorarioComponent implements OnInit {

  horarios:Horario [] =[];

  constructor( private _horarioService: horarioService ) { 


  }

  ngOnInit() {

    this.horarios = this._horarioService.getHorarios();
    console.log(this.horarios);

  }

}
