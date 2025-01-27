import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormularioMae } from '../../../../services/formulario/formulario-mae.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public maeForm: FormGroup;

  constructor(private router: Router, private builder: FormBuilder, private location: Location, public servico: FormularioMae) { 

    this.maeForm = servico.getFormAbaDadosMae()
    console.log(this.servico.areas)

  }

  voltar() {
    this.location.back()
  }

  salvar() {
    console.log(this.maeForm)
    this.router.navigateByUrl("/mae/cadastro/dados-pessoais")
  }

  ngOnInit() {
  }

}
