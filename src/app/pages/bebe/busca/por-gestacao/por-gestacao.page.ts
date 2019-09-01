import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BuscaBebeService } from '../../../../services/busca/busca-bebe.service';
import { BuscaGestacaoService } from '../../../../services/busca/busca-gestacao.service';
import { BuscaMaeService } from '../../../../services/busca/busca-mae.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-por-gestacao',
  templateUrl: './por-gestacao.page.html',
  styleUrls: ['./por-gestacao.page.scss'],
})
export class PorGestacaoPage implements OnInit {

  public bebes: any = []
  public gestacao: Object = null
  public carregando: boolean = false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private maeServico: BuscaMaeService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    
  }

  private async mostrarMensagem(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  ionViewWillEnter() {
    let id:number = Number(this.route.snapshot.paramMap.get('id'))

    this.carregarGestacao(id)
    this.carregarBebes(id)
  }

  async carregarGestacao(id) {
    this.carregando = true
    this.gestacao = await this.maeServico.buscarGestacaoPorId(id)
    this.carregando = false
  }

  async carregarBebes(id) {
    this.carregando = true
    this.bebes = await this.maeServico.buscarBebePorGestacao(id)
    this.carregando = false
    if(this.bebes.length == 0)
      this.mostrarMensagem("Nenhum bebê cadastrado")
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
