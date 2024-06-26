import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CardModule } from 'primeng/card';

import { ComponentsRoutingModule } from './components-routing.module';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    TableComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    CardModule,
    ButtonModule
  ]
})
export class ComponentsModule { }
