import { AnimateOnVisibleDirective } from './../../homePage/animate-on-visible.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreNosComponent } from './sobreNos.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/angular-material/material.module';
import { SobreNosRoutingModule } from './sobreNos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SobreNosRoutingModule
  ],
  declarations: [SobreNosComponent,
    AnimateOnVisibleDirective]
})
export class SobreNosModule { }
