import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dados-residencia',
  templateUrl: './dados-residencia.page.html',
  styleUrls: ['./dados-residencia.page.scss'],
})
export class DadosResidenciaPage implements OnInit {

  public maeForm: FormGroup;

  constructor(private router: Router, private builder: FormBuilder) { 

    this.maeForm = builder.group({
      cep: new FormControl(''),
      estado: new FormControl(''),
      cidade: new FormControl(''),
      bairro: new FormControl(''),
      endereco: new FormControl(''),
      numero: new FormControl(''),
      complemento: new FormControl(''),
      pontoReferencia: new FormControl(''),
      moradia: new FormControl(''),

    });

  }

  voltar() {
    this.router.navigateByUrl("/mae/cadastro/dados-pessoais")
  }

  salvar() {
    console.log(this.maeForm)
    this.router.navigateByUrl("/mae/cadastro/outras-informacoes")
  }

  ngOnInit() {
  }

}
