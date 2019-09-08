import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormularioBebe } from '../../../../services/formulario/formulario-bebe.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dados-documentos',
  templateUrl: './dados-documentos.page.html',
  styleUrls: ['./dados-documentos.page.scss'],
})
export class DadosDocumentosPage implements OnInit {

  public bebeForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    public servico: FormularioBebe
  ) { 
    this.bebeForm = servico.getFormAbaDadosDocumentos()
  }

  voltar() {
    this.location.back()
  }

  salvar() {
    this.servico.salvar()
  }

  ngOnInit() {
  }

}
