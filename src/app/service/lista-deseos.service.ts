import {Injectable} from '@angular/core';
import {Listas} from "../classes/listas";

@Injectable()
export class ListaDeseosService {

  listas: Listas[] = [];

  constructor() {

    let lista1 = new Listas('Compras de supermercado');
    let lista2 = new Listas('Juegos que deseo');
    let lista3 = new Listas('Cosas');

    this.listas.push(lista1);
    this.listas.push(lista2);
    this.listas.push(lista3);

    console.log((this.listas));
  }
}
