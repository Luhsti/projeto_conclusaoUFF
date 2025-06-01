import { CatalogoService } from './service/catalogo.service';
import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ItemCatalogo } from './model/itemCatalogo';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit, AfterViewInit {

  itens:ItemCatalogo[] = this.service.getItem()

  constructor(
    private service: CatalogoService,
    private el: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const titulo = this.el.nativeElement.querySelector('.tituloCard') as HTMLElement;

    const tituloObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          titulo.classList.add('titulo-animado');
          tituloObserver.disconnect();

          setTimeout(() => {
            this.ativarAnimacaoConteudos();
          }, 500);
        }
      });
    }, { threshold: 0.6 });

    tituloObserver.observe(titulo);
  }

  ativarAnimacaoConteudos(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          console.log(target)
          target.classList.add('animate');
        }
      });
    }, {
      threshold: 0.2
    });

    const caixas = this.el.nativeElement.querySelectorAll('.dummy, .textoComum');
    caixas.forEach((el: Element) => observer.observe(el));
  }


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
      case "Ajuste sua visualização":
        return 'tituloCard9'
      default:
        return
    }

  }

}
