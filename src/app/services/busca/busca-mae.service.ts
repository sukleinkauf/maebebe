import { Injectable } from '@angular/core';
import { API } from '../http/api';

@Injectable({
  providedIn: 'root'
})
export class BuscaMaeService {
  
  constructor(private api: API) {

  }

  async buscar(busca: String, pagina = 1) {
    let filtroGet = (busca) ? '?search=' + busca : ''
    let resultado: any = await this.api.chamarGET('mae/list/' + pagina + filtroGet)

    if(resultado.result.length > 0) {
      pagina++

      return resultado.result
    }
    
    return []
  }
}
