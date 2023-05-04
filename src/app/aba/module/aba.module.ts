import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbaRoutes } from './aba.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { AbaComponent } from '../aba.component';


@NgModule({
  declarations: [AbaComponent],
  imports: [
    CommonModule,
    AbaRoutes,
    ReactiveFormsModule
  ]
})
export class AbaModule { }
