import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outras-informacoes',
  templateUrl: './outras-informacoes.page.html',
  styleUrls: ['./outras-informacoes.page.scss'],
})
export class OutrasInformacoesPage implements OnInit {

  public maeForm: FormGroup;

  constructor(private router: Router, private builder: FormBuilder) { 

    this.maeForm = builder.group({
      exemplo: new FormControl('')
    });

  }

  voltar() {
    this.router.navigateByUrl("/mae/cadastro/dados-residencia")
  }

  salvar() {
    console.log(this.maeForm)
    this.router.navigateByUrl("/inicio")
  }

  ngOnInit() {
  }

}
