import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  public username = "paulo.kussler@gmail.com";
  public password = "123";

  constructor(
    private router: Router,
    private loginService: LoginService,
    public toast: ToastController
  ) { }

  ionViewWillEnter() {
    if(this.loginService.isAuthenticated()) {
      this.router.navigateByUrl("/home")
    }
  }

  login() {
    this.loginService.login(this.username, this.password).then((user) => {
      
      this.router.navigateByUrl('home')

    }).catch((error) => {
      
      this.toast.create({ message: 'Ocorreu um erro no login.', duration: 2000 })
                .then((toast) => toast.present());
                
    })
  }
}
