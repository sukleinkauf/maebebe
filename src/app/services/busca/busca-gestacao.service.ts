import { Injectable } from '@angular/core';
import { API } from '../http/api';

@Injectable({
  providedIn: 'root'
})
export class BuscaGestacaoService {
  buscarPorId(id: any): Object | PromiseLike<Object> {
    throw new Error("Method not implemented.");
  }

  constructor(private api: API) { }

  async buscarPorMae(id: number) {
    let resultado:any = await this.api.chamarGET('mae/' + id + '/gestacao')

    return resultado.result
  }
}
