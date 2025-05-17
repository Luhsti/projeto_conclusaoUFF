import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './homePage/homePage.component';


const routes: Routes = [
  {path:'',component: HomePageComponent},

  {path: 'catalogo', loadChildren:()=> import('./catalogo/catalogo.module').then(m=> m.CatalogoModule)},
  {path: 'exemplos', loadChildren:()=> import('./exemplosInterativos/exemplosInterativos.module').then(m=> m.ExemplosInterativosModule)},
  {path: 'checklist', loadChildren:()=> import('./checklist/checklist.module').then(m=> m.ChecklistModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
