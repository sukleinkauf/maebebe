import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuscaMaeService } from '../../../../services/busca/busca-mae.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
})
export class BuscaPage implements OnInit {

  public busca: String = "";
  public maes: any = [];

  constructor(private router: Router, private servico: BuscaMaeService) { }

  voltar() {
    this.router.navigateByUrl("/inicio")
  }

  async buscarMaes() {
    this.maes = await this.servico.buscar(this.busca)
  }

  ngOnInit() {
  }

}
