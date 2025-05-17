import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CatalogoComponent } from "./catalogo.component";
import { ItemAComponent } from "./itens/itemA/itemA.component";
import { ItemBComponent } from "./itens/itemB/itemB.component";

const routes: Routes = [
  { path: '', component:CatalogoComponent },
  { path: 'A', component:ItemAComponent },
  { path: 'B', component:ItemBComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
