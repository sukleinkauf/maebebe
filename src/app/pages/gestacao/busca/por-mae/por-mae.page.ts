import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BuscaMaeService } from '../../../../services/busca/busca-mae.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-por-mae',
  templateUrl: './por-mae.page.html',
  styleUrls: ['./por-mae.page.scss'],
})
export class PorMaePage implements OnInit {

  public gestacoes: any = []
  private mae: any = null

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private maeServico: BuscaMaeService
  ) { }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    let id:number = Number(this.route.snapshot.paramMap.get('id'))

    this.carregarMae(id)
    this.carregarGestacoes(id)
  }

  async carregarMae(id) {
    this.mae = await this.maeServico.buscarPorId(id)
  }

  async carregarGestacoes(id) {
    this.gestacoes = await this.maeServico.buscarGestacaoPorMae(id)
  }

  voltar() {
    this.location.back()
  }

  abrirCadastroGestacao() {
    this.router.navigateByUrl("/mae/:id/gestacao/cadastro".replace(":id", this.mae.id))
  }
  
  abrirEdicaoGestacao(gestacao: { id: number }) {
    this.router.navigateByUrl("/gestacao/cadastro")
  }

  abrirListagemBebes(gestacao: { id_gestacao: number }) {
    console.log(this.mae)
    this.router.navigateByUrl("mae/" + this.mae.id + "/gestacao/" + gestacao.id_gestacao + '/bebe')
  }

}
