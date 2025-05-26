import { CatalogoService } from './service/catalogo.service';
import { Component, OnInit } from '@angular/core';
import { ItemCatalogo } from './model/itemCatalogo';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  itens:ItemCatalogo[] = this.service.getItem()

  constructor(
    private service: CatalogoService
  ) { }

  ngOnInit() {

  }

  classeTitulo(item:string){
    switch(item){
      case "Edite as formas":
        return 'tituloCard4'
      case "Escolha uma paleta de cores corretamente":
        return 'tituloCard5'
      case "Altere os eixos":
        return 'tituloCard6'
      case "Confira a legenda":
        return 'tituloCard7'
      case "Complemente os detalhes":
        return 'tituloCard8'
      default:
        return
    }

  }

}
