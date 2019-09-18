import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormularioMae } from '../../../../services/formulario/formulario-mae.service';


@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.page.html',
  styleUrls: ['./dados-pessoais.page.scss'],
})
export class DadosPessoaisPage implements OnInit {

  public maeForm: FormGroup; // Ver nomenclatura com Jefferson

  constructor(private router: Router, private builder: FormBuilder, public servico: FormularioMae) { 

    this.maeForm = servico.getFormAbaDadosPessoais();

  }

  voltar() {
    this.router.navigateByUrl("/mae/cadastro")
  }

  salvar() {
    console.log(this.maeForm)
    this.router.navigateByUrl("/mae/cadastro/dados-residencia")
  }

  ngOnInit() {
  }

}
