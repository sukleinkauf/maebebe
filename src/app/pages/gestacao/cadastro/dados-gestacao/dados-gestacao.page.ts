import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormularioGestacao } from '../../../../services/formulario/formulario-gestacao.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dados-gestacao',
  templateUrl: './dados-gestacao.page.html',
  styleUrls: ['./dados-gestacao.page.scss'],
})
export class DadosGestacaoPage implements OnInit {

  public gestacaoForm: FormGroup;

  constructor(
    private router: Router, 
    private location: Location,
    private route: ActivatedRoute,
    public servico: FormularioGestacao) { 
    
    this.gestacaoForm = servico.getFormAbaDadosGestacao()

  }

  voltar() {
    let id = this.route.snapshot.paramMap.get('id')
    this.router.navigateByUrl("mae/:id/gestacao".replace(":id", id))
  }

  salvar() {
    let id:number = Number(this.route.snapshot.paramMap.get('id'))
    this.servico.abrirFormAbaDadosPlanejamento(id);
  }

  ngOnInit() {
  }

}
