import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DadosIntercorrenciasPage } from './dados-intercorrencias.page';

const routes: Routes = [
  {
    path: '',
    component: DadosIntercorrenciasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [DadosIntercorrenciasPage]
})
export class DadosIntercorrenciasPageModule {}
