import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormularioBebe } from '../../../../services/formulario/formulario-bebe.service';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dados-parto',
  templateUrl: './dados-parto.page.html',
  styleUrls: ['./dados-parto.page.scss'],
})
export class DadosPartoPage implements OnInit {

  public bebeForm: FormGroup;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    public servico: FormularioBebe
  ) { 
    this.bebeForm = servico.getFormAbaDadosParto()
  }

  voltar() {
    this.location.back()
  }

  salvar() {
    let id_mae:number = Number(this.route.snapshot.paramMap.get('id_mae'))
    let id_gestacao:number = Number(this.route.snapshot.paramMap.get('id_gestacao'))
    this.servico.abrirFormAbaDadosTestes(id_mae, id_gestacao)
  }

  ngOnInit() {
  }

}
