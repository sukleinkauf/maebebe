import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

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
    this.router.navigateByUrl("/inicio")
  }

  salvar() {
    console.log(this.maeForm)
    alert('Salvando')
  }

  ngOnInit() {
  }

}
