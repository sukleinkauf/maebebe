import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import { LoginService } from '../login/login.service';

@Injectable({
    providedIn: 'root'
})
export class API {

    private http: HttpClient;
    private urlApi = "http://ceted.feevale.br/mb/API/index.php/"

    constructor(
        handler : HttpBackend,
        private login: LoginService
    ) { 
        this.http = new HttpClient(handler)
    }

    async chamarGET(url: string) {
        let usuario = await this.login.getUser()
        
        return this.http.get(this.urlApi + url, {
            headers: new HttpHeaders({'Authorization': usuario.token})
        }).toPromise();
    }

    async chamarPOST(url: string, data: any) {
        let usuario = await this.login.getUser()

        return this.http.post(this.urlApi + url, data, {
            headers: new HttpHeaders({'Authorization': usuario.token})
        }).toPromise();
    }
}
