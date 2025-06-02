import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CatalogoComponent } from "./catalogo.component";
import { ItemA1Component } from "./itens/itemA1/itemA1.component";
import { ItemA2Component } from "./itens/itemA2/itemA2.component";
import { ItemA3Component } from "./itens/itemA3/itemA3.component";
import { ItemA4Component } from "./itens/itemA4/itemA4.component";
import { ItemB1Component } from "./itens/itemB1/itemB1.component";
import { ItemB2Component } from "./itens/itemB2/itemB2.component";
import { ItemB3Component } from "./itens/itemB3/itemB3.component";
import { ItemB4Component } from "./itens/itemB4/itemB4.component";
import { ItemB5Component } from "./itens/itemB5/itemB5.component";
import { ItemB6Component } from "./itens/itemB6/itemB6.component";
import { ItemB7Component } from "./itens/itemB7/itemB7.component";
import { ItemB8Component } from "./itens/itemB8/itemB8.component";
import { ItemB9Component } from "./itens/itemB9/itemB9.component";
import { ItemC1Component } from "./itens/itemC1/itemC1.component";
import { ItemC2Component } from "./itens/itemC2/itemC2.component";
import { ItemC3Component } from "./itens/itemC3/itemC3.component";
import { ItemC4Component } from "./itens/itemC4/itemC4.component";
import { ItemC5Component } from "./itens/itemC5/itemC5.component";
import { ItemC6Component } from "./itens/itemC6/itemC6.component";
import { ItemD1Component } from "./itens/itemD1/itemD1.component";
import { ItemD2Component } from "./itens/itemD2/itemD2.component";
import { ItemD3Component } from "./itens/itemD3/itemD3.component";
import { ItemE1Component } from "./itens/itemE1/itemE1.component";
import { ItemE2Component } from "./itens/itemE2/itemE2.component";
import { ItemE3Component } from "./itens/itemE3/itemE3.component";
import { ItemE4Component } from "./itens/itemE4/itemE4.component";
import { ItemE5Component } from "./itens/itemE5/itemE5.component";
import { ItemE6Component } from "./itens/itemE6/itemE6.component";
import { ItemE7Component } from "./itens/itemE7/itemE7.component";
import { ItemF1Component } from "./itens/itemF1/itemF1.component";

const routes: Routes = [
  { path: '', component:CatalogoComponent },
  { path: 'A1', component:ItemA1Component },
  { path: 'A2', component:ItemA2Component },
  { path: 'A3', component:ItemA3Component },
  { path: 'A4', component:ItemA4Component },
  { path: 'B1', component:ItemB1Component },
  { path: 'B2', component:ItemB2Component },
  { path: 'B3', component:ItemB3Component },
  { path: 'B4', component:ItemB4Component },
  { path: 'B5', component:ItemB5Component },
  { path: 'B6', component:ItemB6Component },
  { path: 'B7', component:ItemB7Component },
  { path: 'B8', component:ItemB8Component },
  { path: 'B9', component:ItemB9Component },
  { path: 'C1', component:ItemC1Component },
  { path: 'C2', component:ItemC2Component },
  { path: 'C3', component:ItemC3Component },
  { path: 'C4', component:ItemC4Component },
  { path: 'C5', component:ItemC5Component },
  { path: 'C6', component:ItemC6Component },
  { path: 'D1', component:ItemD1Component },
  { path: 'D2', component:ItemD2Component },
  { path: 'D3', component:ItemD3Component },
  { path: 'E1', component:ItemE1Component },
  { path: 'E2', component:ItemE2Component },
  { path: 'E3', component:ItemE3Component },
  { path: 'E4', component:ItemE4Component },
  { path: 'E5', component:ItemE5Component },
  { path: 'E6', component:ItemE6Component },
  { path: 'E7', component:ItemE7Component },
  { path: 'F1', component:ItemF1Component }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
