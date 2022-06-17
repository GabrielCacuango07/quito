import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { horarioService } from '../service/horario.service';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  horarios:any []=[];
  termino :string="";
  constructor(private activatedRoute:ActivatedRoute,
              private _horariosServices:horarioService) { 


  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params =>{
      this.horarios = this._horariosServices.buscarPlaca(params['termino']);
      console.log(this.horarios);
      this.termino=params['termino'];

    });
  }

}
