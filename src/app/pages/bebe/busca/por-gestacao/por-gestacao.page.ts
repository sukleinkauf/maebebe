import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BuscaBebeService } from '../../../../services/busca/busca-bebe.service';
import { BuscaGestacaoService } from '../../../../services/busca/busca-gestacao.service';
import { BuscaMaeService } from '../../../../services/busca/busca-mae.service';

@Component({
  selector: 'app-por-gestacao',
  templateUrl: './por-gestacao.page.html',
  styleUrls: ['./por-gestacao.page.scss'],
})
export class PorGestacaoPage implements OnInit {

  public bebes: any = []
  public gestacao: Object = null

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private maeServico: BuscaMaeService,
  ) { }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    let id:number = Number(this.route.snapshot.paramMap.get('id'))

    this.carregarGestacao(id)
    this.carregarBebes(id)
  }

  async carregarGestacao(id) {
    this.gestacao = await this.maeServico.buscarGestacaoPorId(id)
  }

  async carregarBebes(id) {
    this.bebes = await this.maeServico.buscarBebePorGestacao(id)
  }

  voltar() {
    this.location.back()
  }

  abrirCadastroBebe() {
    this.router.navigateByUrl("/bebe/cadastro")
  }

  abrirEdicaoBebe() {
    this.router.navigateByUrl("/bebe/cadastro")
  }

}
