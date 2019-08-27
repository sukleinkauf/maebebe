import { Injectable } from '@angular/core';
import { API } from '../http/api';

@Injectable({
  providedIn: 'root'
})
export class BuscaBebeService {

  constructor(private api: API) { }

  async buscarPorGestacao(id: number) {
    let resultado:any = await this.api.chamarGET('gestacao/' + id + '/bebe')

    return resultado.result
  }
}
