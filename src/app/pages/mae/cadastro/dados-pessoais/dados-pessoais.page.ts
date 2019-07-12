import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.page.html',
  styleUrls: ['./dados-pessoais.page.scss'],
})
export class DadosPessoaisPage implements OnInit {

  public maeForm: FormGroup;

  constructor(private router: Router, private builder: FormBuilder) { 

    this.maeForm = builder.group({
      inicioPrograma: new FormControl(''),
      nomeCompleto: new FormControl(''),
      email: new FormControl(''),
      cpf: new FormControl(''),
      rg: new FormControl(''),
      cartaoSUS: new FormControl(''),
      idade: new FormControl(''),
      endereco: new FormControl('')
    });

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
