import {Component, OnInit} from '@angular/core';
import {Listas, ListasItem} from '../../app/classes/index';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html'
})

export class AgregarComponent implements OnInit {

  nombreLista:string;
  nombreItem:string;

  items: ListasItem[] = [];


  constructor(){

  }
  ngOnInit(){

  }

  agregar(){
    if(this.nombreItem.length == 0){
      return ;
    }

    let item = new ListasItem();
    item.nombre = this.nombreItem;
    this.items.push(item);
    this.nombreItem = '';

  }
}
