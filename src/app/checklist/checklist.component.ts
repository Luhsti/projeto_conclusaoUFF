import { FeedbackService } from './service/feedback.service';
import { Component, ElementRef, OnInit } from "@angular/core";
import { ChecklistTopic } from "../models/checklistTopic";
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { Bloco } from './model/checklist';

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
  opcoes1 = ['Comparacao entre dados', 'Composicao dos dados', 'Dados em Localizacao Espacial'];

  blocos: Bloco[] = [
    {
      titulo: 'Formas do gráfico',
      perguntas: [
        { id: 6, texto: 'Uma informação está sendo apresentada de duas formas diferentes para facilitar a percepção do público?' },
        { id: 7, texto: 'Um dado está se destacando dos outros imediatamente, sem repetição da mesma forma para informações diferentes?' },
        { id: 8, texto: 'A ordem natural de cada informação está mantida ou agrupada por temas semelhantes?' }
      ]
    },
    {
      titulo: 'Paleta de cores',
      perguntas: [
        { id: 9, texto: 'Os dados que precisam ser coloridos no seu gráfico estão identificados?' },
        { id: 10, texto: 'A paleta de cores está selecionada conforme os dados?' },
        { id: 11, texto: 'Os tons das cores são bem diferentes uns dos outros na paleta escolhida?' },
        { id: 12, texto: 'Áreas grandes não estão coloridas com cores muito fortes?' },
        { id: 13, texto: 'Apenas os dados importantes estão com cores em destaque?' },
        { id: 14, texto: 'A mesma cor está sendo utilizada para uma mesma informação?' },
        { id: 15, texto: 'As conotações culturais das cores estão sendo utilizadas em seu favor?' }
      ]
    },
    {
      titulo: 'Eixos',
      perguntas: [
        { id: 16, texto: 'A mesma escala está sendo utilizada em eixos de unidades iguais? ' },
        { id: 17, texto: 'O eixo do gráfico começa com o valor zero se os valores são absolutos e dependem de comparação? ' },
        { id: 18, texto: 'O eixo do gráfico começa mais próximo do intervalo dos dados se os valores têm pouca relação com o ponto zero? ' },
        { id: 19, texto: 'Cada eixo está rotulado com títulos e suas unidades? ' },
        { id: 20, texto: 'O gráfico com um pequeno número de valores está com rótulos acima dos dados? ' }
      ]
    },
    {
      titulo: 'Legendas',
      perguntas: [
        { id: 21, texto: 'A legenda está na mesma ordem dos seus dados?' },
        { id: 22, texto: 'O gráfico está com seus dados rotulados diretamente quando não há necessidade de uma legenda? ' },
        { id: 23, texto: 'Há somente uma legenda com todos os elementos de uma só vez em cada gráfico? ' }
      ]
    },
    {
      titulo: 'Destaques e Elementos Adicionais',
      perguntas: [
        { id: 24, texto: 'Há uma hierarquia visual destacando as informações que precisam de mais atenção? ' },
        { id: 25, texto: 'O significado dos gráficos ou como funcionam é explicado para o público?' },
        { id: 26, texto: '. O gráfico não está em 3D sem motivo? ' },
        { id: 27, texto: 'O gráfico não está apresentando muitos dados ou elementos desnecessários de uma só vez? ' }
      ]
    },
    {
      titulo: 'Pontos específicos',
      perguntas: [
        { id: 28, texto: 'Os gráficos de barras seguem as boas práticas específicas desse tipo?' },
        { id: 29, texto: 'Os gráficos de pizza seguem as boas práticas específicas desse tipo?' },
        { id: 30, texto: 'Os gráficos de linhas seguem as boas práticas específicas desse tipo?' }
      ]
    },
  ];


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

    setTimeout(() => {
      this.ativarAnimacaoConteudos();
    
      // Força o primeiro elemento a animar se já estiver visível
      const dummy = this.el.nativeElement.querySelector('.dummy') as HTMLElement;
      if (dummy) {
        dummy.classList.add('animate');
      }
    }, 500);
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

    const caixas = this.el.nativeElement.querySelectorAll('.dummy, .textoComum, .tituloCard2, .formularioIndicativo, .fontePadrao, perguntasChecklist');
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
    this.router.navigate(['/catalogo/F1']);
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

  pontuacao = {
    sim: 0,
    naoSeAplica: 0,
    total: 0
  };

  calcularPontuacoesPorBloco() {
    this.blocos.forEach(bloco => {
      let sim = 0;
      let total = 0;
      let naoSeAplica = 0;

      bloco.perguntas.forEach(p => {
        // Ignora se for "não se aplica" ou vazio
        if (!p.resposta || p.resposta === 'nao_se_aplica') {
          if (p.resposta === 'nao_se_aplica') naoSeAplica++;
          return;
        }

        // Conta como pergunta válida
        total++;

        if (p.resposta === 'sim') {
          sim++;
        }
      });

      bloco.pontuacao = {
        sim,
        naoSeAplica,
        total
      };
    });
  }

  retoranaTexto(score:number, na:number, total:number){
    if(isNaN(score) && na > 2){
      return 'As práticas devem ser aplicadas para uma boa visualização de dados. Cheque nosso catálogo novamente'
    }
    else if (isNaN(score) && na < 2){
      return 'Marque as práticas que você aplicou'
    }
    else if (score < 0.5 && (na + total)>2){
      return 'Ainda temos espaço para melhoria neste tópico. Revise as praticas no catálogo'
    }
    else if (score >=0.5 && (na + total)>2){
      return 'Você aplicou grande parte dos conceitos. Parabéns!'
    }
    return 'Selecione os itens que você aplicou'
  }

  classeImagem(item:string){
    switch(item){
      case "Formas do gráfico":
        return './assets/editeforma.svg'
      case "Paleta de cores":
        return './assets/paletacorreta.svg'
      case "Eixos":
        return './assets/eixos.svg'
      case "Legendas":
        return './assets/legendas.svg'
      case "Destaques e Elementos Adicionais":
        return './assets/detalhes.svg'
      case "Pontos específicos":
        return './assets/ajustevisualizacao.svg'
      default:
        return
    }
  }

  classeTitulo(item:string){
    switch(item){
      case "Formas do gráfico":
         return 'tituloCard4'
        case "Paleta de cores":
         return 'tituloCard5'
        case "Eixos":
         return 'tituloCard6'
        case "Legendas":
         return 'tituloCard7'
        case "Destaques e Elementos Adicionais":
          return 'tituloCard8'
        case "Pontos específicos":
          return 'tituloCard9'
      default:
        return
    }
  }




}
