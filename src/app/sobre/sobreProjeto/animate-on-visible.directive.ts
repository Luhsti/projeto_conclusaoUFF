import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[animateOnVisible]'
})
export class AnimateOnVisibleDirective {

  @Input() animateOnVisible: 'left' | 'right' | 'up' = 'up';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const directionClass =
          this.animateOnVisible === 'left'
            ? 'animate-left'
            : this.animateOnVisible === 'right'
            ? 'animate-right'
            : 'animate-visible';

        if (entry.isIntersecting) {
          // Reinicia a animação: remove, força reflow e adiciona de novo
          this.renderer.removeClass(this.el.nativeElement, directionClass);
          void this.el.nativeElement.offsetWidth; // força reflow
          this.renderer.addClass(this.el.nativeElement, directionClass);
        } else {
          // Garante que a classe seja removida quando sair da tela
          this.renderer.removeClass(this.el.nativeElement, directionClass);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.el.nativeElement);
  }
}
