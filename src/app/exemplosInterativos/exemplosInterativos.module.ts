import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExemplosInterativosComponent } from './exemplosInterativos.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../angular-material/material.module';
import { ExemplosInterativosRoutingModule } from './exemplosInterativos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ExemplosInterativosRoutingModule
  ],
  declarations: [
    ExemplosInterativosComponent
  ]
})
export class ExemplosInterativosModule { }
