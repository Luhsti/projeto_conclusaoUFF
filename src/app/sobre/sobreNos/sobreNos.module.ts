import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/angular-material/material.module";
import { SobreNosRoutingModule } from "./sobreNos-routing.module";
import { SobreNosComponent } from "./sobreNos.component";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SobreNosRoutingModule
  ],
  declarations: [
    SobreNosComponent
  ]
})
export class SobreNosModule { }
