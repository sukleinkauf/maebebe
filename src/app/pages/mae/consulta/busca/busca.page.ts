import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
})
export class BuscaPage implements OnInit {

  public busca: String = "";
  public maes: Array<any> = [];

  constructor(private router: Router) { }

  voltar() {
    this.router.navigateByUrl("/inicio")
  }

  buscarMaes() {
    alert('Buscando por ' + this.busca)
  }

  ngOnInit() {
  }

}
