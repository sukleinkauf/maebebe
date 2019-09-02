import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioBebe } from '../../../../services/formulario/formulario-bebe.service';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dados-intercorrencias',
  templateUrl: './dados-intercorrencias.page.html',
  styleUrls: ['./dados-intercorrencias.page.scss'],
})
export class DadosIntercorrenciasPage implements OnInit {

  public bebeForm: FormGroup;
  
  constructor(
    private router: Router, 
    private location: Location,
    public servico: FormularioBebe
  ) { 
    this.bebeForm = servico.getFormAbaDadosIntercorrencias()
  }

  voltar() {
    this.location.back()
  }

  salvar() {
    
  }

  ngOnInit() {
  }

}
