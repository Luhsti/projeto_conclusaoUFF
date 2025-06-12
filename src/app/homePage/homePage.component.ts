import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../shared/service/shared.service';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-homePage',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.css'],
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
export class HomePageComponent implements OnInit {

  logo = "./assets/imagemInicial.svg"
  linguagemSimples = "./assets/linguagemSimples.svg"
  encontrarPrecisa = "./assets/encontrarPrecisa.svg"
  entenderEncontra = "./assets/entenderEncontra.svg"
  utilizarObjetivo = "./assets/utilizarObjetivo.svg"
  imagemPergunta = "./assets/imagemPergunta.svg"
  imagemErro = "./assets/imagemErro.svg"

  resposta6Toogle:boolean = false
  textoResposta6:boolean = false
  graf4!:any
  graf5!:any
  dautonico:boolean = true

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private el: ElementRef,
    private toast: ToastrService
  ) {}

  ngOnInit() {
    this.criarGraficoDautonismo()
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
    this.resposta6Toogle = !this.resposta6Toogle
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

  refazer(){
    this.resposta6Toogle = !this.resposta6Toogle
    this.textoResposta6 = false
  }

  retornaEstilo(){
    return !this.resposta6Toogle ? 'botoesAcao' : 'botoesAcaoVerde'
  }


}
