import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { API } from '../../util/api';
import { LoginService } from '../../services/login/login.service';
import { User } from 'src/app/services/login/user';
import { ToastService } from 'src/app/services/helpers/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public user: User;
  public retorno:any;
  
  url: any;
  listaUrls: { nome: string; rota: string; metodo: string }[];

  constructor(
    private login: LoginService,
    private router: Router,
    private toast: ToastService,
    private api: API
  ) {

    this.listaUrls = api.getUrls();
  }

  ionViewWillEnter() {
    this.login.getUser().then((user) => { 
      this.user = user 
      console.log(user)
    })
  }

  ngOnInit() {
  }

  sair() {
    this.login.logout().then(() => {
      this.router.navigateByUrl('login')
    })
  }

  fazerRequisicao() {
    this.api.fazerRequisicao(this.url, this.user.token).then((retorno) => {
      this.retorno = retorno
    }).catch((error: HttpErrorResponse) => {
      this.toast.present('Ocorreu um erro: ' + error.statusText);
    })
  }

  escreverRetorno() {
    if(!this.retorno) return ""

    return (typeof this.retorno == 'object') ? JSON.stringify(this.retorno) : this.retorno
  }

}
