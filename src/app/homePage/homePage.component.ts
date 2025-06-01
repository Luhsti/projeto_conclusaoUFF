import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/service/shared.service';

@Component({
  selector: 'app-homePage',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.css']
})
export class HomePageComponent implements OnInit {

  logo = "./assets/banner.JPG"
  linguagemSimples = "./assets/linguagemSimples.png"
  grafico = "./assets/infoGrafico2.png"

  constructor() {}

  ngOnInit() {

  }

}
