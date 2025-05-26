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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
