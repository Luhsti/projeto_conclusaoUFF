import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemB8',
  templateUrl: './itemB8.component.html',
  styleUrls: ['./itemB8.component.css']
})
export class ItemB8Component implements AfterViewInit {

  exemplo11 = './assets/B8E11.JPG'
  exemplo12 = './assets/B8E12.JPG'

  exemplo21 = './assets/B8E21.JPG'
  exemplo22 = './assets/B8E22.JPG'

  exemplo31 = './assets/B8E31.JPG'
  exemplo32 = './assets/B8E32.JPG'

  exemplo41 = './assets/B8E41.JPG'
  exemplo42 = './assets/B8E42.JPG'

  exemplo51 = './assets/B8E51.JPG'
  exemplo52 = './assets/B8E52.JPG'

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
        }
      });
    }, {
      threshold: 0.2
    });

    const caixas = this.el.nativeElement.querySelectorAll('.caixaConteudoDireita, .caixaConteudoEsquerda, .tituloCard2');
    caixas.forEach((el: Element) => observer.observe(el));
  }


}
