import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  public username = "paulo.kussler@gmail.com";
  public password = "123";

  constructor(
    private http: HttpClient, 
    private db: Storage, 
    private router: Router,
    public toast: ToastController
  ) { }

  login() {
    let form = new FormData()
    form.append("username", this.username)
    form.append("password", this.password)

    let promise = this.http.post("http://ceted.feevale.br/maebebe/API/index.php/sign/in", form).toPromise()
    
    promise.then((result: any) => {
      if(result.errors) {
      
        this.toast.create({ message: 'Ocorreu um erro no login.', duration: 2000 })
                  .then((toast) => toast.present());
      
      } else {
        this.db.set('token', result.authorization)
        this.db.set('user', result.userData).then(() => { this.router.navigateByUrl('home')})
      }

    })
  }
}
