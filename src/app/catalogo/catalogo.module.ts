import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../angular-material/material.module';
import { CatalogoRoutingModule } from './catalogo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [CatalogoComponent]
})
export class CatalogoModule { }
