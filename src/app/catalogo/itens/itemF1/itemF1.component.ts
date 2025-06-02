import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-itemF1',
  templateUrl: './itemF1.component.html',
  styleUrls: ['./itemF1.component.css']
})
export class ItemF1Component implements AfterViewInit {

  exemplo1 = './assets/F1A1.JPG'
  exemplo2 = './assets/F1A2.JPG'
  exemplo3 = './assets/F1A3.JPG'
  exemplo4 = './assets/F1A4.JPG'
  exemplo5 = './assets/F1A5.JPG'
  exemplo6 = './assets/F1A6.JPG'

  exemplo7 = './assets/F1B1.JPG'
  exemplo8 = './assets/F1B2.JPG'
  exemplo9 = './assets/F1B3.JPG'
  exemplo10 = './assets/F1B4.JPG'

  exemplo11 = './assets/F1C1.JPG'
  exemplo12 = './assets/F1C2.JPG'
  exemplo13 = './assets/F1C3.JPG'
  exemplo14 = './assets/F1C4.JPG'
  exemplo15 = './assets/F1C5.JPG'
  exemplo16 = './assets/F1C6.JPG'
  exemplo17 = './assets/F1C7.JPG'
  
  exemplo18 = './assets/F1D1.JPG'
  exemplo19 = './assets/F1D2.JPG'
  exemplo20 = './assets/F1D3.JPG'
  exemplo21 = './assets/F1D4.JPG'

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
        }
      });
    }, {
      threshold: 0.2
    });

    const caixas = this.el.nativeElement.querySelectorAll('.caixaConteudoDireita, .caixaConteudoEsquerda, .tituloCard2');
    caixas.forEach((el: Element) => observer.observe(el));
  }

}
