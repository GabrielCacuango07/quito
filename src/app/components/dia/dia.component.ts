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
  temprano_uno:string="";
  temprano_dos:string="";
  tarde_uno:string="";
  tarde_dos:string="";

  dia:any= {};
  id:string = "";
  constructor(private activatedRoute: ActivatedRoute,
              private _horarioService: horarioService) {
 // initialize the vars for shows in the information page 
    this.activatedRoute.params.subscribe( params => {
      this.dia = this._horarioService.getDia(params['id']);
      this.temprano_uno=this.dia.temprano_uno;
      this.temprano_dos=this.dia.temprano_dos;
      this.tarde_uno=this.dia.tarde_uno;
      this.tarde_dos=this.dia.tarde_dos;
      this.id=params['id'];
    } );

   }
   // capture and save the new schedule whith the bottton save using horarioService
   saveHora(){
    this._horarioService.updateHora(this.id,this.temprano_uno,'temprano_uno');
    this._horarioService.updateHora(this.id,this.temprano_dos,'temprano_dos');
    this._horarioService.updateHora(this.id,this.tarde_uno,'tarde_uno');
    this._horarioService.updateHora(this.id,this.tarde_dos,'tarde_dos');
   };


  

}
