import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BuscaGestacaoService } from 'src/app/services/busca/busca-gestacao.service';
import { BuscaMaeService } from '../../../../services/busca/busca-mae.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-por-mae',
  templateUrl: './por-mae.page.html',
  styleUrls: ['./por-mae.page.scss'],
})
export class PorMaePage implements OnInit {

  public gestacoes: any = []
  private mae: Object = null

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
    this.router.navigateByUrl("/gestacao/cadastro")
  }
  
  abrirEdicaoGestacao(gestacao: { id: number }) {
    this.router.navigateByUrl("/gestacao/cadastro")
  }

  abrirListagemBebes(gestacao: { id_gestacao: number }) {
    this.router.navigateByUrl("/gestacao/" + gestacao.id_gestacao + '/bebe')
  }

}
