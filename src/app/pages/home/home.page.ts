import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { API } from '../../util/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private user;
  private token;
  public retorno:any;
  
  url: any;
  listaUrls: { nome: string; rota: string; metodo: string }[];

  constructor(
    private db: Storage, 
    private http: HttpClient, 
    private router: Router,
    private toast: ToastController,
    private api: API
  ) {

    this.listaUrls = api.getUrls();
  }

  ionViewWillEnter() {
    this.db.get('user').then((user) => { this.user = user })
    this.db.get('token').then((token) => {
      this.token = token 
      this.salvarTipos()
    })
  }

  ngOnInit() {
  }

  salvarTipos() {
    let parametros = { headers: new HttpHeaders({'Authorization': this.token}) }
    
    let urls = this.api.getUrls()

    // urls.forEach(item => {
    //   this.http.get(item.url, parametros).toPromise().then((result: any) => {
    //     this.db.set(item.nome, result.result)
    //   })
    // });
  }

  sair() {
    this.db.remove('user').then(() => {
      this.user = null
      this.router.navigateByUrl('login')
    })
  }

  fazerRequisicao() {
    this.api.fazerRequisicao(this.url, this.token).then((retorno) => {
      this.retorno = retorno
    }).catch((error: HttpErrorResponse) => {
      this.toast.create({ message: 'Ocorreu um erro: ' + error.statusText, duration: 3000 }).then((toast) => toast.present());
    })
  }

  escreverRetorno() {
    if(!this.retorno) return ""

    return (typeof this.retorno == 'object') ? JSON.stringify(this.retorno) : this.retorno
  }

}
