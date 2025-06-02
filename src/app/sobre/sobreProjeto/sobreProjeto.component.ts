import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobreProjeto',
  templateUrl: './sobreProjeto.component.html',
  styleUrls: ['./sobreProjeto.component.css']
})
export class SobreProjetoComponent implements OnInit {

  logo = "./assets/banner.JPG"
  linguagemSimples = "./assets/referencias.png"
  grafico = "./assets/tecnologias.png"

  constructor() {}

  ngOnInit() {

  }

  alerta(){
    window.open('https://github.com/Luhsti/projeto_conclusaoUFF')
  }

}
