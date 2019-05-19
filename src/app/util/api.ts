import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { HttpService } from '../services/http/http.service';

@Injectable({
    providedIn: 'root'
})
export class API {

    private base = "http://ceted.feevale.br/maebebe/API/index.php/"
    private urls = [
        { nome: 'tipo_choro', rota: 'tipo_choro/list/1', metodo: 'GET' },
        { nome: 'tipo_renda_mensal', rota: 'tipo_renda_mensal/list/1', metodo: 'GET' },
        { nome: 'tipo_comportamento', rota: 'tipo_comportamento/list/1', metodo: 'GET' },
        { nome: 'tipo_exame_prenatal', rota: 'tipo_exame_prenatal/list/1', metodo: 'GET' },
        { nome: 'tipo_higiene_bebe', rota: 'tipo_higiene_bebe/list/1', metodo: 'GET' },
    ]

    constructor(
        private http: HttpService
    ) { }

    getUrls() {
        return this.urls
    }

    async fazerRequisicao(url: { nome: string; rota: string; metodo: string }, token: string) {
        let headers = new HttpHeaders({'Authorization': token})

        if(url.metodo == 'GET')
            return await this.http.get(this.base + url.rota, headers)
        if(url.metodo == 'POST')
            return await this.http.post(this.base + url.rota, {}, headers)
    }
}
