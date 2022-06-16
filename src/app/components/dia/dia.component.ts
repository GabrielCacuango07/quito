import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { horarioService } from '../service/horario.service';

@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styles: [
  ]
})
export class DiaComponent  {

  dia:any= {};
  constructor(private activatedRoute: ActivatedRoute,
              private _horarioService: horarioService) {

    this.activatedRoute.params.subscribe( params => {
      this.dia = this._horarioService.getDia(params['id']);
      console.log(params['id']);
    } )

   }

  

}
