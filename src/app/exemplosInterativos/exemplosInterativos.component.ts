import { ToastrService } from 'ngx-toastr';
import { Dicionario } from './../models/dicionario';


import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { Chart } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';


@Component({
  selector: 'app-exemplosInterativos',
  templateUrl: './exemplosInterativos.component.html',
  styleUrls: ['./exemplosInterativos.component.css'],
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
    ]),
    trigger('rotate3d', [
      transition(':enter', [
        animate(
          '1000ms ease-in-out',
          keyframes([
            style({ transform: 'rotateY(0deg)', opacity: 0, offset: 0 }),
            style({ transform: 'rotateY(180deg)', opacity: 1, offset: 0.5 }),
            style({ transform: 'rotateY(360deg)', opacity: 1, offset: 1 })
          ])
        )
      ])
    ])
  ]
})

export class ExemplosInterativosComponent implements OnInit {

  logo = "./assets/infografico.png"
  grafico = "./assets/graficoLS.JPG"
  img1 = "./assets/Imagem1.svg"
  img2 = "./assets/A3E1.svg"
  img3 = "./assets/Imagem3.png"
  SP01 = "./assets/brasil1.svg"
  SP02 = "./assets/brasil2.svg"
  SP03 = "./assets/brasil3.svg"
  graficoEixoNull = "./assets/graficoEixoNull.svg"
  graficoEixoCorreto = "./assets/graficoEixoCorreto.svg"
  graficoDistOk = "./assets/distribuicaoBoa.JPG"
  graficoDistNok = "./assets/distribuicaoRuim.JPG"
  chuva = "./assets/emojiChuva.svg"

  resposta1:string = ""
  disable_resposta1:boolean = false

  resposta2:string = ""
  disable_resposta2:boolean = false
  contador2:boolean = false

  resposta3:boolean = false
  disable_resposta3:boolean = false
  graf1!:any
  graf2!:any
  graf3!:any

  resposta4:string = ""
  disable_resposta4:boolean = false

  resposta5Toogle:boolean = false

  resposta6Toogle:boolean = false
  textoResposta6:boolean = false
  graf4!:any
  graf5!:any

  images = ['./assets/distribuicaoBoa.svg', './assets/distribuicaoRuim.svg'];
  currentIndex = 0;
  currentImage = this.images[this.currentIndex];
  nextImage = this.images[(this.currentIndex + 1) % this.images.length];

  isTransitioning = false;

  opcoes: string[] = ['59 a 60', '80+', '79 a 80', '20 a 39', ];
  opcoesRegiao: string[] = ['1 - Norte', '2 - Nordeste', '3 - Sudeste', '4 - Centro Oeste', '5 - Sul'];
  opcoesRotulos: Dicionario[] = [
    {id:1 , valor:"O eixo  x (horizontal) apresenta o pódio do setor mais inovadores"},
    {id:2 , valor:"O eixo y (vertical) informa a quantidade de funcionário dos setores"},
    {id:3 , valor:"O eixo x (horizontal) exibe a ordem de preferência da gestão pelos setores"},
    {id:4 , valor:"O eixo x (horizontal) possui a informação dos setores que mais lucram"},
    {id:5 , valor:"No eixo y (vertical)  apresenta a média salarial de cada funcionário do setor"},
  ];
  dautonico:boolean = true

  charts: Chart[] = [];

  imagemPergunta = "./assets/imagemPergunta.svg"
  imagemErro = "./assets/imagemErro.svg"
  imagemChat = "./assets/imagemChat.svg"

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private el: ElementRef,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.criarGrafico()
    this.criarGraficoDautonismo()
    this.tiktok()
  }

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
        } else {
          //target.classList.remove('animate');
        }
      });
    }, {
      threshold: 0.2
    });

    const caixas = this.el.nativeElement.querySelectorAll('.dummy, .textoComum');
    caixas.forEach((el: Element) => observer.observe(el));
  }

  tiktok(){
    setTimeout(
      () => {
        if(this.resposta3 == false){
          console.log('false')
          this.graf1.destroy()
          this.graf2.destroy()
          this.graf3.destroy()
          this.criarGrafico()
          this.tiktok()
        }
      }, 4000
    )
  }

  checarResposta1(){
    if(this.resposta1!=""){
      if(this.resposta1 != "59 a 60"){
        this.disable_resposta1 = true
        this.toast.error("Leia a explicação", "Resposta Errada", { timeOut: 2000 })
      } else {
        this.disable_resposta1 = true
        this.toast.success("Mas fique atento", "Resposta Correta", { timeOut: 2000 })
      }
    } else {
      this.toast.info("Escolha uma opção")
    }
  }

  checarResposta2(): void {
    if (!this.resposta2) {
      this.toast.info("Escolha uma opção")
      return;
    }

    if (!this.contador2) {
      this.toast.info("", "Pegue a dica! É de graça", { timeOut: 3000 })
      return ;
    }

    if (this.resposta2 !== '4 - Centro Oeste') {
      this.toast.info("", "Pense mais um pouco", { timeOut: 3000 })
    } else {
      this.toast.success("Resposta Correta!", "Parabéns!", { timeOut: 3000 })
      this.disable_resposta2 = true
    }
  }

  checarResposta4(): void {
    if (!this.resposta4) {
      this.toast.info("Escolha uma opção!")
      return;
    }

    this.disable_resposta4 = true
    this.toast.info("Tsc! Tsc! Tsc!", "Caiu em Fake News!", { timeOut: 3000 })
  }


  feedbackGrafico1(){
    return this.disable_resposta1 === true
  }

  feedbackGrafico2(){
    return this.resposta2=="4 - Centro Oeste" && this.disable_resposta2
  }

  retornaTexto(){
    return !this.contador2 ? 'Foi realizada uma reunião na Prefeitura de São Paulo pela defesa civil para identificar áreas de maior impacto das chuvas. O chefe da reunião pergunta: "Qual região possui o menor índice pluviométrico?"' : 'Desculpe! O gráfico estava com água de mais. Tente responder novamente a pergunta: "Qual região possui o menor índice pluviométrico?"'
  }

  catologoDetalhado(rota: number){
    switch(rota){
      case 1:
        this.router.navigate(['catalogo/A3'])
        return
      case 2:
        this.router.navigate(['catalogo/B3'])
        return
      case 3:
        this.router.navigate(['catalogo/B6'])
        return
      case 4:
        this.router.navigate(['catalogo/C2'])
        return
      case 5:
        this.router.navigate(['catalogo/C5'])
        return
      case 6:
        this.router.navigate(['catalogo/B8'])
        return
      default:
        return this.router.navigate(['catalogo/A'])
    }
  }



  criarGrafico(){
    const ctx1 = document.getElementById('myChart') as HTMLCanvasElement ;
    const ctx2 = document.getElementById('myChart2') as HTMLCanvasElement ;
    const ctx3 = document.getElementById('myChart3') as HTMLCanvasElement ;
    Chart.register(ChartDataLabels);

    if(ctx1 && ctx2 && ctx3){

      this.graf1 = new Chart(ctx1, {
        type: 'pie',
        data: {
          datasets: [{
            label: 'My First Dataset',
            data: [
              this.retornaFatia(1),
              this.retornaFatia(2),
              this.retornaFatia(3)
            ],
            backgroundColor: [
              this.retornaCor(1),
              this.retornaCor(2),
              this.retornaCor(3)
            ],
            hoverOffset: 4
          }]
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: "Adotaria o novo software na rotina",
              color: 'black',
              font: {
                size: 15
              }
            },
            // Configurações específicas para o plugin datalabels
            datalabels: {
              anchor: 'center',
              align: 'end',
              color: 'white',
              textStrokeWidth: 2,
              textStrokeColor: 'black',
              textShadowColor: 'black',
              font: {
                size: 12
              },
              formatter: (value, context) => {
                const index = context.dataIndex
                switch(index){
                  case 0:
                    return "SIM"
                  case 1:
                    return "NÃO"
                  case 2:
                    return "TALVEZ"
                  default:
                    return ""
                }
              }
            }
          }
        },
        plugins: [ChartDataLabels]
      });

      this.graf2 = new Chart(ctx2, {
        type: 'pie',
        data: {
          datasets: [{
            label: 'My First Dataset',
            data: [
              this.retornaFatia(1),
              this.retornaFatia(2),
              this.retornaFatia(3)
            ],
            backgroundColor: [
              this.retornaCor(1),
              this.retornaCor(2),
              this.retornaCor(3)
            ],
            hoverOffset: 4
          }]
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: "Adotaria o novo software na rotina",
              color: 'black',
              font: {
                size: 15
              }
            },
            // Configurações específicas para o plugin datalabels
            datalabels: {
              anchor: 'center',
              align: 'end',
              color: 'white',
              textStrokeWidth: 2,
              textStrokeColor: 'black',
              textShadowColor: 'black',
              font: {
                size: 12
              },
              formatter: (value, context) => {
                const index = context.dataIndex
                switch(index){
                  case 0:
                    return "SIM"
                  case 1:
                    return "NÃO"
                  case 2:
                    return "TALVEZ"
                  default:
                    return ""
                }
              }
            }
          }
        },
        plugins: [ChartDataLabels]
      });

      this.graf3 = new Chart(ctx3, {
        type: 'pie',
        data: {
          datasets: [{
            label: 'My First Dataset',
            data: [
              this.retornaFatia(1),
              this.retornaFatia(2),
              this.retornaFatia(3)
            ],
            backgroundColor: [
              this.retornaCor(1),
              this.retornaCor(2),
              this.retornaCor(3)
            ],
            hoverOffset: 4
          }]
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: "Adotaria o novo software na rotina",
              color: 'black',
              font: {
                size: 15
              }
            },
            // Configurações específicas para o plugin datalabels
            datalabels: {
              anchor: 'center',
              align: 'end',
              color: 'white',
              textStrokeWidth: 2,
              textStrokeColor: 'black',
              textShadowColor: 'black',
              font: {
                size: 12
              },
              formatter: (value, context) => {
                const index = context.dataIndex
                switch(index){
                  case 0:
                    return "SIM"
                  case 1:
                    return "NÃO"
                  case 2:
                    return "TALVEZ"
                  default:
                    return ""
                }
              }
            }
          }
        },
        plugins: [ChartDataLabels]
      });

    }
  }

  alerta(evento:boolean){
    if(this.resposta6Toogle){
      this.dautonico = evento
      this.textoResposta6 = true
    }
  }

  graficoDautonismo(){
    if(this.resposta6Toogle){
      return this.dautonico ?  '' : "display:none"
    }else{
      return ''
    }
  }

  graficoNotDautonismo(){
    if(this.resposta6Toogle){
      return this.dautonico ? 'display:none' : ''
    }else{
      return 'display:none'
    }
  }

  ativarVisualizacao(){
    this.resposta6Toogle = true
  }

  criarGraficoDautonismo(){
    const ctx4 = document.getElementById('myChartDaut') as HTMLCanvasElement ;
    const ctx5 = document.getElementById('myChartDaut2') as HTMLCanvasElement ;
    const labels = ["Q1", "Q2", "Q3"]

    if(ctx4 && ctx5){

      this.graf4 = new Chart(ctx4, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Vendas Quadrimestrais',
            data: [65, 59, 80],
            backgroundColor: [
              'rgba(153, 153, 0)',
              'rgba(204, 204, 255)',
              'rgba(170,170,51)',
            ],
            borderColor: [
              'rgb(153, 153, 0)',
              'rgb(204, 204, 255)',
              'rgb(170,170,51)',
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'QUADRIMESTRES'
              },
              grid: {
                  display: false
              }
          },
          y: {
              title: {
                display: true,
                text: 'VENDAS (EM MILHÕES)'
              },
              grid: {
                  display: false
              }
          }
          },
          plugins:{
            title: {
              display: true,
              text: "Total de vendas por quadrimestre",
              color: 'black',
              font: {
                size: 15
              }
            }
          }
        }
      });

      this.graf5 = new Chart(ctx5, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Vendas Quadrimestrais',
            data: [65, 59, 80],
            backgroundColor: [
              'rgba(255, 0, 0)',
              'rgba(0, 191, 255)',
              'rgba(237, 125, 49)',
            ],
            borderColor: [
              'rgb(255, 0, 0)',
              'rgb(0, 191, 255)',
              'rgb(237, 125, 49)',
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'QUADRIMESTRES'
              },
              grid: {
                  display: false
              }
          },
          y: {
              title: {
                display: true,
                text: 'VENDAS (EM MILHÕES)'
              },
              grid: {
                  display: false
              }
          }
          },
          plugins:{
            title: {
              display: true,
              text: "Total de vendas por quadrimestre",
              color: 'black',
              font: {
                size: 15
              }
            }
          }
        }
      });


    }
  }

  corAleatoria(): number {
    return Math.floor(Math.random() * 256);
  }

  valorAleatorio(): number {
    return Math.floor(Math.random() * 256);
  }


  retornaCor(linha: number): string {
    if (this.resposta3 == false) {
      return `rgb(${this.corAleatoria()}, ${this.corAleatoria()}, ${this.corAleatoria()})`;
    } else {
      switch (linha) {
        case 1: return 'rgb(54, 162, 235)';
        case 2: return 'rgb(255, 99, 132)';
        case 3: return 'rgb(255, 205, 86)';
        default: return 'rgb(0,0,0)';
      }
    }
  }

  padronizar1(){
    this.resposta3 = true
    this.disable_resposta3 = true
    this.graf1.destroy()
    this.graf2.destroy()
    this.graf3.destroy()
    this.criarGrafico()
  }

  retornaFatia(linha: number): number {
    if (this.resposta3 == false) {
      return this.valorAleatorio()
    } else {
      switch (linha) {
        case 1: return this.valorAleatorio();
        case 2: return this.valorAleatorio();
        case 3: return this.valorAleatorio();
        default: return 0;
      }
    }
  }



  startTransition() {
    console.log(this.currentIndex)
    if (this.isTransitioning) return;
    if(!this.resposta5Toogle){
      this.resposta5Toogle = true
    }

    this.nextImage = this.images[(this.currentIndex + 1) % this.images.length];
    this.isTransitioning = true;
  }

  onNextImageLoaded() {
    // Quando a imagem nova estiver carregada, finalize a transição
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentIndex];
      this.isTransitioning = false;
    }, 200); // igual ao tempo do fade-in/out
  }

  refazer1(){
    this.resposta1 = ""
    this.disable_resposta1 = false
  }

  refazer2(){
    this.resposta2 = ""
    this.disable_resposta2 = false
    this.contador2 = false
  }

  refazer3(){
    this.tiktok()
    this.resposta3 = false
    this.disable_resposta3 = false
    this.graf1.destroy()
    this.graf2.destroy()
    this.graf3.destroy()
    this.criarGrafico()
  }

  refazer4(){
    this.resposta4 = ""
    this.disable_resposta4 = false
  }

  refazer5(){
    this.startTransition()
    this.currentIndex = 0;
    this.resposta5Toogle = false
  }

  ativarGrafico2(){
    this.contador2 = !this.contador2
  }





}



