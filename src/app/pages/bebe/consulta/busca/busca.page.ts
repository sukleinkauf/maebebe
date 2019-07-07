import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
})
export class BuscaPage implements OnInit {

  constructor(private router: Router) { }

  voltar() {
    this.router.navigateByUrl("")
  }

  ngOnInit() {
  }

}
