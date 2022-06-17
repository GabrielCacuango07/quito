import { Injectable } from "@angular/core";

@Injectable()
export class horarioService{

    private horarios:any [] = [
        {
          
            img1: "assets/img/1.png",
            img2: "assets/img/2.png",
          placa: "1 2 ",
          dia: "Lunes",
          temprano_uno: "07:00",
          temprano_dos: "09:00",
          tarde_uno:"15:00",
          tarde_dos:"18:00",
          
        },
        {
            
            img1: "assets/img/3.png",
            img2: "assets/img/4.png",
            placa: "3 4",
            dia: "Martes",
            temprano_uno: "07:00",
            temprano_dos: "09:00",
            tarde_uno:"15:00",
            tarde_dos:"18:00",
        },
        {
            
            img1: "assets/img/5.png",
            img2: "assets/img/6.png",
            placa: "5 6 ",
            dia: "Miercoles",
            temprano_uno: "07:00",
          temprano_dos: "09:00",
          tarde_uno:"15:00",
          tarde_dos:"18:00",
        },
        {
            img1: "assets/img/7.png",
            img2: "assets/img/8.png",
            placa: "7 8",
            dia: "Jueves",
            temprano_uno: "07:00",
          temprano_dos: "09:00",
          tarde_uno:"15:00",
          tarde_dos:"18:00",
        },
        {
            img1: "assets/img/9.png",
            img2: "assets/img/0.png",
            placa: "9 0",
            dia: "Viernes",
            temprano_uno: "07:00",
          temprano_dos: "09:00",
          tarde_uno:"15:00",
          tarde_dos:"18:00",
        },
        {
            
            img1: "assets/img/visto.png",
            img2: "assets/img/visto.png",
            placa: "Libre Circulación",
            dia: "Sabado",
            temprano_uno: "07:00",
          temprano_dos: "09:00",
          tarde_uno:"15:00",
          tarde_dos:"18:00",
        },
        {
            
            img1: "assets/img/visto.png",
            img2: "assets/img/visto.png",
            placa: "Libre Circulación",
            dia: "Domingo",
            temprano_uno: "07:00",
          temprano_dos: "09:00",
          tarde_uno:"15:00",
          tarde_dos:"18:00",
        }
      ];

    constructor() {
            console.log("Servicio para usar ");
    }

    getHorarios (): Horario[]{
        return this.horarios;
    }

    getDia(idx:any){
        return this.horarios[idx];

    }
    buscarPlaca(termino:string): Horario[]{

        let diaArr:Horario[]=[];

        termino= termino.toLowerCase();

        for (let horario of this.horarios){
            let nombre = horario.placa.toLowerCase();
            if(nombre.indexOf(termino) >= 0 ){

                diaArr.push(horario);
            }
        }

        return diaArr;

    };

    updateHora(idx:any,dato:string,prox:string){
        let dia =this.getDia(idx);
        dia[prox]=dato;

    };
};



export interface Horario {
    
    img1:string;
    img2:string;
    placa:String
    dia:String;
    temprano_uno:string;
    temprano_dos: string;
    tarde_uno:string;
    tarde_dos: string

};