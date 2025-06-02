import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobreNos',
  templateUrl: './sobreNos.component.html',
  styleUrls: ['./sobreNos.component.css']
})
export class SobreNosComponent implements OnInit {

  lucas = "./assets/lucas1.png"
  luciana = "./assets/luciana.png"
  rodrigo = "./assets/rodrigo.png"

  constructor() {}

  ngOnInit() {

  }

  alerta(){
    window.open('https://github.com/Luhsti/projeto_conclusaoUFF')
  }
}
