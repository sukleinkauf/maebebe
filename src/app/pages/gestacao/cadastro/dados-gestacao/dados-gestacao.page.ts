import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioGestacao } from '../../../../services/formulario/formulario-gestacao.service';

@Component({
  selector: 'app-dados-gestacao',
  templateUrl: './dados-gestacao.page.html',
  styleUrls: ['./dados-gestacao.page.scss'],
})
export class DadosGestacaoPage implements OnInit {

  public gestacaoForm: FormGroup;

  constructor(private router: Router, public servico: FormularioGestacao) { 

    this.gestacaoForm = servico.getFormAbaDadosGestacao()

  }

  voltar() {
    this.router.navigateByUrl("/inicio")
  }

  salvar() {
    this.router.navigateByUrl("/gestacao/cadastro/dados-planejamento")
  }

  ngOnInit() {
  }

}
