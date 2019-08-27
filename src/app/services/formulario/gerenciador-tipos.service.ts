import { Injectable } from '@angular/core';import { Storage } from '@ionic/storage';
import { API } from '../http/api';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorTiposService {

  private listaTipos = [
    { nome: 'tipo_parto', rota: 'tipo_parto/list/1' },
    { nome: 'tipo_planejamento_gestacao', rota: 'tipo_planejamento_gestacao/list/1' },
    { nome: 'tipo_mac', rota: 'tipo_mac/list/1' },
    { nome: 'tempo_mac', rota: 'tempo_mac/list/1' },
    { nome: 'tipo_exame_prenatal', rota: 'tipo_exame_prenatal/list/1' },

    { nome: 'tipo_choro', rota: 'tipo_choro/list/1' },
    { nome: 'tipo_renda_mensal', rota: 'tipo_renda_mensal/list/1' },
    { nome: 'tipo_comportamento', rota: 'tipo_comportamento/list/1' },
    { nome: 'tipo_exame_prenatal', rota: 'tipo_exame_prenatal/list/1' },
    { nome: 'tipo_higiene_bebe', rota: 'tipo_higiene_bebe/list/1' },
    { nome: 'area', rota: 'area/list/1' }

  ]

  constructor(private api: API, private storage: Storage) { }

  private async atualizarTipo(tipo: { nome: string, rota: string }) {
    try {
      
      let retorno: any = await this.api.chamarGET(tipo.rota)

      retorno.result.atualizacao = new Date()
      this.storage.set('tipos.' + tipo.nome, retorno.result)

      console.log('Tipo ' + tipo.nome + ' atualizado com sucesso')

    } catch(error) {
      console.log('Erro ao buscar tipo: ' + tipo.nome)
    }
  }

  async sincronizar() {
    
    setInterval(() => {
      this.listaTipos.forEach(async tipo => {
        await this.atualizarTipo(tipo)
      });
    }, 50000);
    
  }

  buscarTipo(nome: string) {
    return this.storage.get('tipos.' + nome)
  }
}
