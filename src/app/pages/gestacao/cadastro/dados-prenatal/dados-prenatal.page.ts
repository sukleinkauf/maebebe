import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioGestacao } from '../../../../services/formulario/formulario-gestacao.service';

@Component({
  selector: 'app-dados-prenatal',
  templateUrl: './dados-prenatal.page.html',
  styleUrls: ['./dados-prenatal.page.scss'],
})
export class DadosPrenatalPage implements OnInit {

  public gestacaoForm: FormGroup;

  constructor(private router: Router, private servico: FormularioGestacao) { 

    this.gestacaoForm = servico.getFormAbaDadosPreNatal()

  }

  voltar() {
    this.router.navigateByUrl("/gestacao/cadastro/dados-planejamento")
  }

  salvar() {
    this.servico.salvar()
    this.router.navigateByUrl("/inicio")
  }

  ngOnInit() {
  }

}
