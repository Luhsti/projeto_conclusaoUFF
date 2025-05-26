import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../angular-material/material.module';
import { CatalogoRoutingModule } from './catalogo-routing.module';
import { ItemA1Component } from './itens/itemA1/itemA1.component';
import { ItemA2Component } from './itens/itemA2/itemA2.component';
import { ItemA3Component } from './itens/itemA3/itemA3.component';
import { ItemA4Component } from './itens/itemA4/itemA4.component';
import { ItemB1Component } from './itens/itemB1/itemB1.component';
import { ItemB2Component } from './itens/itemB2/itemB2.component';
import { ItemB3Component } from './itens/itemB3/itemB3.component';
import { ItemB4Component } from './itens/itemB4/itemB4.component';
import { ItemB5Component } from './itens/itemB5/itemB5.component';
import { ItemB6Component } from './itens/itemB6/itemB6.component';
import { ItemB7Component } from './itens/itemB7/itemB7.component';
import { ItemB8Component } from './itens/itemB8/itemB8.component';
import { ItemB9Component } from './itens/itemB9/itemB9.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    CatalogoComponent,
    ItemA1Component,
    ItemA2Component,
    ItemA3Component,
    ItemA4Component,
    ItemB1Component,
    ItemB2Component,
    ItemB3Component,
    ItemB4Component,
    ItemB5Component,
    ItemB6Component,
    ItemB7Component,
    ItemB8Component,
    ItemB9Component,
  ]
})
export class CatalogoModule { }
