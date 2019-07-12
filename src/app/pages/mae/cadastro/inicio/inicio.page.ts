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
      exemplo: new FormControl('')
    });

  }

  voltar() {
    this.router.navigateByUrl("/inicio")
  }

  salvar() {
    console.log(this.maeForm)
    this.router.navigateByUrl("/mae/cadastro/dados-pessoais")
  }

  ngOnInit() {
  }

}
