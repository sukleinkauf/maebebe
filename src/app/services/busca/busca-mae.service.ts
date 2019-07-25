import { Injectable } from '@angular/core';
import { API } from '../http/api';

@Injectable({
  providedIn: 'root'
})
export class BuscaMaeService {
  
  constructor(private api: API) {

  }

  async buscar(busca: String) {
    let resultado: any = await this.api.chamarGET('mae/list/1')

    return resultado.result
  }
}
