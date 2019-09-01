import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend, HttpParams } from '@angular/common/http';
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
        let body = new HttpParams()
        for (var key in data) {
            body = body.append(key, data[key])
        }
        
        let usuario = await this.login.getUser()
        let headers = new HttpHeaders({'Authorization' : usuario.token})

        return this.http.post(this.urlApi + url, body, {
            headers: headers
        }).toPromise();
    }
}
