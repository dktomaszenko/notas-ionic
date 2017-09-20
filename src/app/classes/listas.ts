import {ListasItem} from "./listas-item";

export class Listas{
  nombre: string;
  terminada: boolean;
  items: ListasItem;

  constructor(nombre: string){
    this.nombre = nombre;
    this.terminada = false;
  }
}
