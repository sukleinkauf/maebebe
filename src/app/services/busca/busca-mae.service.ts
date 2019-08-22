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

  async buscarPorId(id: number) {
    let resultado: any = await this.api.chamarGET('mae/' + id)

    if(resultado.errors) {
      throw "Ocorreu um erro ao buscar a mãe"
    }

    return resultado
  }

  async buscarGestacaoPorMae(id: number) {
    let resultado:any = await this.api.chamarGET('mae/' + id + '/gestacao')

    return resultado.result
  }

  async buscarGestacaoPorId(id: number) {
    let resultado:any = await this.api.chamarGET('gestacao/' + id)

    return resultado
  }

  async buscarBebePorGestacao(id: number) {
    
    let gestacao:any = await this.buscarGestacaoPorId(id)

    let url = 'mae/' + gestacao.id_mae + '/gestacao/' + gestacao.id_gestacao + '/bebe'
    let resultado:any = await this.api.chamarGET(url)

    return resultado.result
  }
}
