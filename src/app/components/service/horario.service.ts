import { Injectable } from "@angular/core";

@Injectable()
export class horarioService{

    private horarios:any [] = [
        {
          id: "Aquaman",
          img: "assets/img/2.png",
          placa: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
          dia: "Lunes",
          temprano_uno: "1941-11-01",
          temprano_dos: "1941-11-01",
          tarde_uno:"1941-11-01",
          tarde_dos:"1941-11-01",
          
        },
        {
            id: "Aquaman",
            img: "assets/img/2.png",
            placa: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
            dia: "Martes",
            temprano_uno: "1941-11-01",
            temprano_dos: "1941-11-01",
            tarde_uno:"1941-11-01",
            tarde_dos:"1941-11-01",
        },
        {
            id: "Aquaman",
            img: "assets/img/2.png",
            placa: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
            dia: "Miercoles",
            temprano_uno: "1941-11-01",
            temprano_dos: "1941-11-01",
            tarde_uno:"1941-11-01",
            tarde_dos:"1941-11-01",
        },
        {
            id: "Aquaman",
            img: "assets/img/2.png",
            placa: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
            dia: "Jueves",
            temprano_uno: "1941-11-01",
            temprano_dos: "1941-11-01",
            tarde_uno:"1941-11-01",
            tarde_dos:"1941-11-01",
        },
        {
            id: "Aquaman",
            img: "assets/img/2.png",
            placa: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
            dia: "Viernes",
            temprano_uno: "1941-11-01",
            temprano_dos: "1941-11-01",
            tarde_uno:"1941-11-01",
            tarde_dos:"1941-11-01",
        },
        {
            id: "Sabado",
            img: "assets/img/2.png",
            placa: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
            dia: "Sabado",
            temprano_uno: "1941-11-01",
            temprano_dos: "1941-11-01",
            tarde_uno:"1941-11-01",
            tarde_dos:"1941-11-01",
        },
        {
            id: "Domingo",
            img: "assets/img/2.png",
            placa: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
            dia: "Domingo",
            temprano_uno: "1941-11-01",
            temprano_dos: "1941-11-01",
            tarde_uno:"1941-11-01",
            tarde_dos:"1941-11-01",
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

   

};
export interface Horario {
    id: string;
    img:string;
    placa:String
    dia:String;
    temprano_uno:string;
    temprano_dos: string;
    tarde_uno:string;
    tarde_dos: string

};