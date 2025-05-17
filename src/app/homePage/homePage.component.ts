import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/service/shared.service';

@Component({
  selector: 'app-homePage',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.css']
})
export class HomePageComponent implements OnInit {

  logo = "./assets/banner.JPG"
  grafico = "./assets/graficoLS.JPG"

  constructor(
  ) { }

  ngOnInit() {
  }

}
