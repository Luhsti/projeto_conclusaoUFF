import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CatalogoComponent } from "./catalogo.component";
import { ItemA1Component } from "./itens/itemA1/itemA1.component";
import { ItemBComponent } from "./itens/itemB/itemB.component";

const routes: Routes = [
  { path: '', component:CatalogoComponent },
  { path: 'A1', component:ItemA1Component },
  { path: 'B', component:ItemBComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
