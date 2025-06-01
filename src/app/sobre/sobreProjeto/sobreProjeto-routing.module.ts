import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SobreProjetoComponent } from "./sobreProjeto.component";


const routes: Routes = [
  { path: '', component:SobreProjetoComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SobreProjetoRoutingModule { }
