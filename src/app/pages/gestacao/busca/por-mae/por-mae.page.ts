import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BuscaMaeService } from '../../../../services/busca/busca-mae.service';
import { Location } from '@angular/common';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-por-mae',
  templateUrl: './por-mae.page.html',
  styleUrls: ['./por-mae.page.scss'],
})
export class PorMaePage implements OnInit {

  public gestacoes: any = []
  private mae: any = null
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

    this.carregarMae(id)
    this.carregarGestacoes(id)
  }

  async carregarMae(id) {
    this.carregando = true
    this.mae = await this.maeServico.buscarPorId(id)
    this.carregando = false
  }

  async carregarGestacoes(id) {
    this.carregando = true
    this.gestacoes = await this.maeServico.buscarGestacaoPorMae(id)
    this.carregando = false
    if(this.gestacoes.length == 0)
      this.mostrarMensagem("Nenhuma gestação cadastrada")
  }

  voltar() {
    this.location.back()
  }

  abrirCadastroGestacao() {
    this.router.navigateByUrl("/mae/:id_mae/gestacao/cadastro".replace(":id_mae", this.mae.id))
  }
  
  abrirEdicaoGestacao(gestacao: { id: number }) {
    this.router.navigateByUrl("/gestacao/cadastro")
  }

  abrirListagemBebes(gestacao: { id_gestacao: number }) {
    this.router.navigateByUrl("mae/" + this.mae.id + "/gestacao/" + gestacao.id_gestacao + '/bebe')
  }

}
