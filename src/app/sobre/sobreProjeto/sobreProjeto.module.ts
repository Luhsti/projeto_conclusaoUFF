import { AnimateOnVisibleDirective } from './animate-on-visible.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreProjetoComponent } from './sobreProjeto.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/angular-material/material.module';
import { SobreProjetoRoutingModule } from './sobreProjeto-routing.module';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SobreProjetoRoutingModule,

  ],
  declarations: [
    SobreProjetoComponent,
    AnimateOnVisibleDirective]
})
export class SobreProjetoModule { }
