import {Component, OnInit} from '@angular/core';
import {Listas, ListasItem} from '../../app/classes/index';
import { AlertController, NavController } from 'ionic-angular';
import {ListaDeseosService} from "../../app/service/lista-deseos.service";

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html'
})

export class AgregarComponent implements OnInit {

  nombreLista:string = "";
  nombreItem:string = "";

  items: ListasItem[] = [];


  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public _listaDeseos: ListaDeseosService
  ){

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

  eliminarItem(id:number){

    this.items.splice(id, 1);

  }

  guardarLista(){
    if(this.nombreLista.length == 0){
      this.showAlert();
      return;
    }

    let lista = new Listas(this.nombreLista);
    lista.items = this.items;
    /*this._listaDeseos.listas.push(lista);*/
    this._listaDeseos.agregarLista(lista);

    this.navCtrl.pop();
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Nombre de la lista',
      subTitle: 'El nombre de la lista es necesario',
      buttons: ['OK']
    });
    alert.present();

  }

}
