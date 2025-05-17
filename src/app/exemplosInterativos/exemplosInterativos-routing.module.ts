import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExemplosInterativosComponent } from "./exemplosInterativos.component";


const routes: Routes = [
  { path: '', component:ExemplosInterativosComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExemplosInterativosRoutingModule { }
