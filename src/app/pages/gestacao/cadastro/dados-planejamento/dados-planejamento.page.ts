import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioGestacao } from '../../../../services/formulario/formulario-gestacao.service';

@Component({
  selector: 'app-dados-planejamento',
  templateUrl: './dados-planejamento.page.html',
  styleUrls: ['./dados-planejamento.page.scss'],
})
export class DadosPlanejamentoPage implements OnInit {

  public gestacaoForm: FormGroup;

  constructor(private router: Router, private servico: FormularioGestacao) { 

    this.gestacaoForm = servico.getFormAbaDadosPlanejamento()

  }

  voltar() {
    this.router.navigateByUrl("/gestacao/cadastro/dados-gestacao")
  }

  salvar() {
    this.router.navigateByUrl("/gestacao/cadastro/dados-prenatal")
  }

  ngOnInit() {
  }

}
