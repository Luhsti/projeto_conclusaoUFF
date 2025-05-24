import { Dicionario } from './../models/dicionario';


import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-exemplosInterativos',
  templateUrl: './exemplosInterativos.component.html',
  styleUrls: ['./exemplosInterativos.component.css']
})
export class ExemplosInterativosComponent implements OnInit {

  logo = "./assets/infografico.png"
  grafico = "./assets/graficoLS.JPG"
  img1 = "./assets/Imagem1.png"
  img2 = "./assets/Imagem2.png"
  img3 = "./assets/Imagem3.png"
  SP01 = "./assets/SP01.JPG"
  SP02 = "./assets/SP02.JPG"
  graficoEixoNull = "./assets/graficoEixo.JPG"
  graficoEixoCorreto = "./assets/graficoEixoCorreto.JPG"
  graficoDistOk = "./assets/distribuicaoBoa.JPG"
  graficoDistNok = "./assets/distribuicaoRuim.JPG"

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

  images = ['./assets/distribuicaoBoa.JPG', './assets/distribuicaoRuim.JPG'];
  currentIndex = 0;
  currentImage = this.images[this.currentIndex];
  nextImage = this.images[(this.currentIndex + 1) % this.images.length];

  isTransitioning = false;

  opcoes: string[] = ['Sim', 'Não'];
  opcoesRegiao: string[] = ['Leste', 'Oeste'];
  opcoesRotulos: Dicionario[] = [
    {id:1 , valor:"O EIXO X POSSUI O PODIO DO SETOR MAIS FOFOQUEIRO"},
    {id:2 , valor:"O EIXO Y INFORMA QUANTAS UNIDADES DOS SETORES EXISTEM"},
    {id:3 , valor:"NO EIXO X POSSUI A ORDEM DE PREFERENCIA DO CEO PELOS SETORES"},
    {id:4 , valor:"NO EIXO X POSSUI INFORMAÇAO DOS SETORES QUE MAIS LUCRAM"},
    {id:5 , valor:"NO EIXO Y APRESENTA A MEDIA SALARIAL DE CADA FUNCIONARIO DO SETOR"},
  ];
  dautonico:boolean = true

  charts: Chart[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.criarGrafico()
    this.criarGraficoDautonismo()
    this.tiktok()
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
      }, 2000
    )
  }

  checarResposta1(){
    if(this.resposta1!=""){
      if(this.resposta1 == "Sim"){
        this.disable_resposta1 = true
        alert("Errou")
      } else {
        this.disable_resposta1 = true
        alert("Acertou")
      }
    } else {
      alert("Escolha uma opcao")
    }
  }

  checarResposta2(): void {
    if (!this.resposta2) {
      alert("Escolha uma opção");
      return;
    }

    if (!this.contador2) {
      this.contador2 = !this.contador2
      alert("Vamos melhorar essa vista");
      return ;
    }

    if (this.resposta2 === 'Leste') {
      alert("Pense mais um pouco");
    } else {
      alert("Acertou!");
      this.disable_resposta2 = true
    }
  }

  checarResposta4(): void {
    if (!this.resposta4) {
      alert("Escolha uma opção");
      return;
    }

    this.disable_resposta4 = true
  }


  feedbackGrafico1A(){
    return this.resposta1=="Sim" && this.disable_resposta1
  }

  feedbackGrafico1B(){
    return this.resposta1=="Não" && this.disable_resposta1
  }

  feedbackGrafico2(){
    return this.resposta2=="Oeste" && this.disable_resposta2
  }

  catologoDetalhado(rota: number){
    switch(rota){
      case 1:
        this.router.navigate(['catalogo/A'])
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
        case 1: return 'rgb(255, 99, 132)';
        case 2: return 'rgb(54, 162, 235)';
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
    }, 500); // igual ao tempo do fade-in/out
  }




}



