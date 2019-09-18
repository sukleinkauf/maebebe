import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DadosDocumentosPage } from './dados-documentos.page';
import { BrMaskerModule } from 'br-mask';

const routes: Routes = [
  {
    path: '',
    component: DadosDocumentosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    BrMaskerModule
  ],
  declarations: [DadosDocumentosPage]
})
export class DadosDocumentosPageModule {}
