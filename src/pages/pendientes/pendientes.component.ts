import {Component, OnInit} from '@angular/core';
import {ListaDeseosService} from "../../app/service/lista-deseos.service";

import {NavController} from 'ionic-angular';
import {AgregarComponent} from "../agregar/agregar.component";
import {Listas} from "../../app/classes/listas";
import {DetalleComponent} from "../detalle/detalle.component";

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html'
})

export class PendientesComponent implements OnInit {
  constructor(
    private _listaDeseos: ListaDeseosService,
    private navCtrl: NavController
  ){

  }
  ngOnInit(){

  }


  irAgregar(){
    this.navCtrl.push(AgregarComponent);
  }

  verDetalle(lista: Listas, index: number){
    this.navCtrl.push(DetalleComponent, {lista, index} );
  }
}
