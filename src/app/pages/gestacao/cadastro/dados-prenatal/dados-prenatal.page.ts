import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormularioGestacao } from '../../../../services/formulario/formulario-gestacao.service';

@Component({
  selector: 'app-dados-prenatal',
  templateUrl: './dados-prenatal.page.html',
  styleUrls: ['./dados-prenatal.page.scss'],
})
export class DadosPrenatalPage implements OnInit {

  public gestacaoForm: FormGroup;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private servico: FormularioGestacao) { 

    this.gestacaoForm = servico.getFormAbaDadosPreNatal()

  }

  voltar() {
    let id:number = Number(this.route.snapshot.paramMap.get('id_mae'))
    this.servico.abrirFormAbaDadosPlanejamento(id);
  }

  salvar() {
    let id:number = Number(this.route.snapshot.paramMap.get('id_mae'))
    this.servico.salvar(id);
  }

  ngOnInit() {
  }

}
