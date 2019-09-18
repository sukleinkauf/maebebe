import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PorGestacaoPage } from './por-gestacao.page';

const routes: Routes = [
  {
    path: '',
    component: PorGestacaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PorGestacaoPage]
})
export class PorGestacaoPageModule {}
