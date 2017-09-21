import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Listas, ListasItem} from '../../app/classes/index';
import {ListaDeseosService} from "../../app/service/lista-deseos.service";


@Component({
  selector: 'selector',
  templateUrl: 'detalle.component.html'
})

export class DetalleComponent implements OnInit {

  idx: number;
  lista: Listas;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public listaDeseos: ListaDeseosService
  ){
    this.idx = this.navParams.get("imdex");
    this.lista = this.navParams.get("lista");
  }
  ngOnInit(){}

  actualizar(item: ListasItem){
    item.completado = !item.completado;
    this.listaDeseos.actualizarData();
  }
}
