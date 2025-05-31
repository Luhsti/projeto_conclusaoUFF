import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemC3',
  templateUrl: './itemC3.component.html',
  styleUrls: ['./itemC3.component.css']
})
export class ItemC3Component {

  exemplo1 = './assets/C3E1.JPG'

  constructor(private el: ElementRef) {}

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
          target.classList.add('animate');
        } else {
          target.classList.remove('animate');
        }
      });
    }, {
      threshold: 0.2
    });

    const caixas = this.el.nativeElement.querySelectorAll('.caixaConteudoDireita, .caixaConteudoEsquerda, .tituloCard2');
    caixas.forEach((el: Element) => observer.observe(el));
  }


}
