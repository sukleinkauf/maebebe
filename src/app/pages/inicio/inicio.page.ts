import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private login: LoginService, private router: Router) { }

  ngOnInit() {
  }

  abrirCadastroMae() {
    this.router.navigateByUrl('/mae/cadastro')
  }

  buscarMae() {
    this.router.navigateByUrl('/mae/consulta/busca');
  }

  abrirCadastroBebe() {
    this.router.navigateByUrl('/bebe/cadastro')
  }

  buscarBebe() {
    this.router.navigateByUrl('/bebe/consulta/busca');
  }

  sair() {
    this.login.logout().then(() => {
      this.router.navigateByUrl('login')
    })
  }

}
