import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SobreNosComponent } from "./sobreNos.component";


const routes: Routes = [
  { path: '', component:SobreNosComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SobreNosRoutingModule { }
