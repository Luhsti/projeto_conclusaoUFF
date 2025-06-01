import { FeedbackService } from './service/feedback.service';
import { Component, ElementRef, OnInit } from "@angular/core";
import { ChecklistTopic } from "../models/checklistTopic";
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css'],
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ])
    ])
  ]
})
export class ChecklistComponent implements OnInit {

  logo = "./assets/banner.JPG"
  grafico = "./assets/graficoLS.JPG"
  img = "./assets/Capturarteste.JPG"
  etapa = 1;
  escolha1 = '';
  escolha2 = '';
  escolha3 = '';
  respostaFinal = '';
  opcoes1 = ['Comparacao entre dados', 'Composicao dos dados', 'Distribuicao dos dados', 'Relacionamento entre dados', 'Dados em Localizacao Espacial'];


  constructor(
    private service: FeedbackService,
    private el: ElementRef,
    private router: Router
  ){}

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

    const caixas = this.el.nativeElement.querySelectorAll('.dummy, .textoComum, .tituloCard2, .formularioIndicativo');
    caixas.forEach((el: Element) => observer.observe(el));
  }

  ngOnInit(): void {
    this.onCheckboxChange()
  }

  checklist: ChecklistTopic[] = [
    {
      topic: '04. Edite as formas',
      items: [
        'Seja redundante!',
        'Não repita formas para informações diferentes.',
        'Mantenha a ordem natural.',
        'Evite sobreposições.'
      ],
      selected: Array(4).fill(false)
    },
    {
      topic: '05. Escolha uma paleta de cores corretamente',
      items: [
        'Identifique os dados.',
        'Selecione paleta correta.',
        'Diferencie tons.',
        'Evite cores fortes para grandes áreas.',
        'Garanta a não sobreposição de cores.',
        'Mesma cor para mesma info.',
        'Use conotações culturais.',
        'Verifique acessibilidade de cores.',
        'Use cores de marca com cuidado.'
      ],
      selected: Array(9).fill(false)
    },
    {
      topic: '06. Altere os eixos',
      items: [
        'Adicione título.',
        'Rotule eixos com titulo e unidade.',
        'Use mesma escala em eixos de unidades iguais.',
        'Eixo ajustado aos dados.',
        'Eixo mais proximo do intervalo.',
        'Use rótulos em poucos dados.'
      ],
      selected: Array(6).fill(false)
    },
    {
      topic: '07. Confira a legenda',
      items: [
        'Elimine legenda e rotule diretamente.',
        'Legenda na ordem dos dados.',
        'Legenda única com todos os elementos.'
      ],
      selected: Array(3).fill(false)
    },
    {
      topic: '08. Complemente os detalhes',
      items: [
        'Não sature de elementos e dados.',
        'Hierarquia visual.',
        'Aproveite espaços livres.',
        'Ajuste plano de fundo.',
        'Explique o significado das informações.',
        'Forneça um Resumo/dicionário dos dados.',
        'Não use 3D sem justificativa.'
      ],
      selected: Array(7).fill(false)
    }
  ];

  feedback: string = '';

  onCheckboxChange() {
    setTimeout(() => this.generateFeedback(), 0);
  }

  generateFeedback() {
    const topicCounts = this.checklist.map(c => c.selected.filter(Boolean).length);
    console.log("tc", topicCounts)
    const total = topicCounts.reduce((a, b) => a + b, 0);
    console.log("total", total)

    if (total === 0) {
      this.feedback = 'Selecione os itens que você aprendeu no catalogo e aplicou em seus gráficos para receber um feedback';
      return;
    }

    const feedbackParts: number[] = [];
    topicCounts.forEach((count, i) => {
      feedbackParts.push(count)
    });

    console.log(feedbackParts)

    this.feedback = this.service.feedbackEscolhas(topicCounts)
  }



  avancarEtapa1(opcao: string) {
    this.escolha1 = opcao;
    this.etapa = 2;
  }

  avancarEtapa2(opcao: string) {
    this.escolha2 = opcao;

    // Casos com apenas duas etapas
    const respostasDiretas = ['Relacionamento entre dados', 'Dados em Localizacao Espacial'];
    if (respostasDiretas.includes(this.escolha1) ||
        (this.escolha1 === 'Distribuicao dos dados' && this.escolha2 === 'dois dados')) {
      this.definirResposta();
      this.etapa = 4;
    } else {
      this.etapa = 3;
    }
  }

  avancarEtapa3(opcao: string) {
    this.escolha3 = opcao;
    this.definirResposta();
    this.etapa = 4;
  }

  definirResposta() {
    const map:any = {
      'Comparacao entre dados': {
        'Categorias e valores': {
          'Muitas Informacoes': 'Barra Horizontal',
          'Poucas Informacoes': 'Barra Vertical'
        },
        'Ao longo do tempo': {
          'Um dado': 'Grafico de linha',
          'Dois dados': 'Grafico de linhas'
        }
      },
      'Composicao dos dados': {
        'Ao longo do tempo': {
          'Poucas Informacoes': 'Grafico de barras empilhadas',
          'Muitas Informacoes': 'Grafico de area empilhadas'
        },
        'Fixo ou estatico no tempo': {
          'Partes Simples do total': 'Grafico de pizza ou torta',
          'Varias partes do total': 'Grafico de barra unica empilhada'
        }
      },
      'Distribuicao dos dados': {
        'um dado': {
          'muitas informacoes': 'Histograma de linha',
          'poucas informacoes': 'Histograma'
        },
        'dois dados': 'graficos de dispersao'
      },
      'Relacionamento entre dados': {
        'Dois dados': 'Grafico de dispersao',
        'Tres ou mais dados': 'Grafico de bolhas'
      },
      'Dados em Localizacao Espacial': {
        'Dados geograficos para areas grandes': 'Mapa colorido',
        'Dados geograficos para areas especificas': 'Mapa de simbolos'
      }
    };

    try {
      if (this.escolha1 === 'Distribuicao dos dados' && this.escolha2 === 'dois dados') {
        this.respostaFinal = map['Distribuicao dos dados']['dois dados'];
      } else if (this.escolha1 === 'Relacionamento entre dados' || this.escolha1 === 'Dados em Localizacao Espacial') {
        this.respostaFinal = map[this.escolha1][this.escolha2];
      } else {
        const submap = map[this.escolha1][this.escolha2] as Record<string, string>;
        this.respostaFinal = submap[this.escolha3];
      }
    } catch (e) {
      this.respostaFinal = 'Escolha inválida';
    }
  }

  reiniciar() {
    this.etapa = 1;
    this.escolha1 = '';
    this.escolha2 = '';
    this.escolha3 = '';
    this.respostaFinal = '';
  }

  irParaPagina() {
    this.router.navigate(['/pagina-destino']);
  }

  retornaImagemGrafico(){

    switch (this.respostaFinal){
      case 'Barra Horizontal':
        return "./assets/a1.png"
      case 'Barra Vertical':
        return "./assets/a2.png"
      case 'Grafico de linha':
        return "./assets/a3.png"
      case 'Grafico de linhas':
        return "./assets/a4.png"
      case 'Grafico de barras empilhadas':
        return "./assets/b1.png"
      case 'Grafico de area empilhadas':
        return "./assets/b2.png"
      case 'Grafico de pizza ou torta':
        return "./assets/b3.png"
      case 'Grafico de barra unica empilhada':
        return "./assets/b5.png"
      case 'Histograma de linha':
        return "./assets/c1.png"
      case 'Histograma':
        return "./assets/c2.png"
      case 'graficos de dispersao':
        return "./assets/c3.png"
      case 'Grafico de dispersao':
        return "./assets/d1.png"
      case 'Grafico de bolhas':
        return "./assets/d2.png"
      case 'Mapa colorido':
        return "./assets/d3.png"
      case 'Mapa de simbolos':
        return "./assets/d4.png"
      default:
        return
    }

  }


}
