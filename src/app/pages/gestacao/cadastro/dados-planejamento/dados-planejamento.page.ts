import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormularioGestacao } from '../../../../services/formulario/formulario-gestacao.service';

@Component({
  selector: 'app-dados-planejamento',
  templateUrl: './dados-planejamento.page.html',
  styleUrls: ['./dados-planejamento.page.scss'],
})
export class DadosPlanejamentoPage implements OnInit {

  public gestacaoForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servico: FormularioGestacao) { 

    this.gestacaoForm = servico.getFormAbaDadosPlanejamento()

  }

  voltar() {
    let id:number = Number(this.route.snapshot.paramMap.get('id_mae'))
    this.servico.abrirFormAbaDadosGestacao(id);
  }

  salvar() {
    let id:number = Number(this.route.snapshot.paramMap.get('id_mae'))
    this.servico.abrirFormAbaDadosPreNatal(id);
  }

  ngOnInit() {
  }

}
