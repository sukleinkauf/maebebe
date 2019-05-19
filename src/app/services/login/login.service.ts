import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Storage } from '@ionic/storage';
import { LoginError } from './login-error';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private user:User;

  constructor(
    private http: HttpService,
    private db: Storage
  ) { 

  }

  async isAuthenticated() {
    let user = await this.db.get('user')

    return user != null
  }

  async login(username: string, password: string) {
    let result:any = await this.http.postLogin(username, password)

    if(result.errors) {
      throw new LoginError(result.errors)
    }else{
      this.user = new User(
        result.userData.idUser,
        result.authorization,
        result.userData.nome,
        result.userData.tipo,
        result.userData.email
      )

      await this.db.set('user', this.user)
      return this.user
    }
    
  }

  getToken() {
    return this.user;
  }

  getUser() {
    return this.db.get('user');
  }

  async logout() {
    await this.db.remove('user');
    this.user = null;
  }
}
