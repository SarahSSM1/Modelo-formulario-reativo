import { Routes, RouterModule } from '@angular/router';
import { AbaComponent } from '../aba.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path:'', component: AbaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AbaRoutes {};
