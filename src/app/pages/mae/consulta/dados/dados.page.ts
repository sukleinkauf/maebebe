import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {

  constructor(private router: Router) { }

  voltar() {
    this.router.navigateByUrl("/inicio")
  }

  ngOnInit() {
  }

}
