import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormularioGestacao {

  private formDadosGestacao: FormGroup;
  private formDadosPlanejamento: FormGroup;
  private formDadosPreNatal: FormGroup;

  constructor() { }

  getFormAbaDadosGestacao(): FormGroup {
    let builder = new FormBuilder()

    this.formDadosGestacao = builder.group({
      id_tipo_desfecho: new FormControl(''),
      numero_gestacao: new FormControl(''),
      id_tipo_parto_planejado: new FormControl(''),
      dt_dum: new FormControl(''),
      dt_dpp: new FormControl(''),
      dt_dpp_eco: new FormControl(''),
    });

    
    return this.formDadosGestacao
  }

  getFormAbaDadosPlanejamento(): FormGroup {
    let builder = new FormBuilder()

    this.formDadosPlanejamento = builder.group({
      planejada: new FormControl(''),
      planejamento_gestacao: new FormControl(''),
      mac_gestacao: new FormControl(''),
      mac_antes_gestacao: new FormControl(''),
      id_tempo_mac: new FormControl(''),
      mac_antes_gestacao_nome_orientador: new FormControl(''),
      mac_antes_gestacao_obs: new FormControl(''),
    });

    
    return this.formDadosPlanejamento
  }

  getFormAbaDadosPreNatal() {
    let builder = new FormBuilder()

    this.formDadosPreNatal = builder.group({
      exame_prenatal: new FormControl(''),
      exame_prenatal_obs: new FormControl(''),
      ig_inicio_pre_natal: new FormControl(''),
      peso_pre_gestacional: new FormControl(''),
      altura_pre_gestacional: new FormControl(''),
      imc_pre_gestacional: new FormControl(''),
      ig_inicio_projeto: new FormControl(''),
      peso_inicio_projeto: new FormControl(''),
      imc_inicio_projeto: new FormControl(''),
    });

    
    return this.formDadosPreNatal
  }

  listaTipoDesfecho() : Array<any> {
    return [
      {nome: 'Ativo', valor: '1'},
      {nome: 'Inativo', valor: '0'},
    ]
  }

  listaTipoParto() : Array<any> {
    return [
      {nome: 'Vaginal', valor: '1'},
    ]
  }

  listaGestacaoPlanejada() : Array<any> {
    return [
      {nome: 'Sim', valor: '1'},
      {nome: 'Não', valor: '0'},
    ]
  }

  listaTipoPlanejamentoGestacao() : Array<any> {
    return [
      {nome: 'Suspensão do MAC', valor: '1'}
    ]
  }

  listaTipoMAC() : Array<any> {
    return [
      {nome: 'Anticoncepcional oral', valor: '1'}
    ]
  }

  listaTempoMAC() : Array<any> {
    return [
      {nome: '1 ano ou menos', valor: '1'}
    ]
  }

  listaTipoExamePreNatal() : Array<any> {
    return [
      {nome: 'Exame laboratorial no 1º  trimestre', valor: '1'}
    ]
  }

  salvar(): void {
    alert('Salvando dados')
  }
}
