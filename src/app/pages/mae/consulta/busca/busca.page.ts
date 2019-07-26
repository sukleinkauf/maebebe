import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuscaMaeService } from '../../../../services/busca/busca-mae.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
})
export class BuscaPage implements OnInit {

  private pagina: number = 1
  public busca: String = ""
  public maes: any = []
  private infiniteScroll = null

  constructor(private router: Router, private servico: BuscaMaeService) { }

  voltar() {
    this.router.navigateByUrl("/inicio")
  }

  async buscarMaes() {
    this.maes = await this.servico.buscar(this.busca)
    this.pagina = 1

    if(this.infiniteScroll) 
      this.infiniteScroll.disabled = false
  }

  async carregarPaginas(event) {
    this.infiniteScroll = event.target

    this.pagina++
    let resultado = await this.servico.buscar(this.busca, this.pagina)
    
    if(resultado.length == 0) {
      this.infiniteScroll.disabled = true;
      return
    }

    this.maes = this.maes.concat(resultado)
    
    this.infiniteScroll.complete();
  }

  ngOnInit() {
  }

}
