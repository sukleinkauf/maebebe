import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { GerenciadorTiposService } from './gerenciador-tipos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BuscaMaeService } from '../busca/busca-mae.service';
import { API } from '../http/api';
import { LoginService } from '../login/login.service';
import { User } from '../login/user';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class FormularioGestacao {

  private mae:any;

  private formDadosGestacao: FormGroup;
  private formDadosPlanejamento: FormGroup;
  private formDadosPreNatal: FormGroup;

  public listaTipoDesfecho = [
    {descricao: 'Ativo', id: '1'},
    {descricao: 'Inativo', id: '0'},
  ]

  public listaMotivoDesfecho = [

  ]

  public listaTipoParto = []

  public listaGestacaoPlanejada = [
    {descricao: 'Sim', id: '1'},
    {descricao: 'Não', id: '0'},
  ]
  
  public listaTipoPlanejamentoGestacao = []

  public listaTipoMAC = []

  public listaTempoMAC = []

  public listaTipoExamePreNatal = []

  constructor(
    private gerenciadorTipos: GerenciadorTiposService, 
    private maeServico: BuscaMaeService,
    private api: API,
    private router: Router,
    private login: LoginService
  ) {
    this.buscarTipos();
  }

  async buscarTipos() {
    this.listaMotivoDesfecho = await this.gerenciadorTipos.buscarTipo('tipo_motivo_desfecho')
    this.listaTipoParto = await this.gerenciadorTipos.buscarTipo('tipo_parto')
    this.listaTipoPlanejamentoGestacao = await this.gerenciadorTipos.buscarTipo('tipo_planejamento_gestacao')
    this.listaTipoMAC = await this.gerenciadorTipos.buscarTipo('tipo_mac')
    this.listaTempoMAC = await this.gerenciadorTipos.buscarTipo('tempo_mac')
    this.listaTipoExamePreNatal = await this.gerenciadorTipos.buscarTipo('tipo_exame_prenatal')
  }

  getFormAbaDadosGestacao(): FormGroup {
    let builder = new FormBuilder()

    this.formDadosGestacao = builder.group({
      id_tipo_desfecho: new FormControl('1'),
      id_motivo_desfecho: new FormControl(''),
      desfecho_obs: new FormControl(''),
      dt_registro_desfecho: new FormControl(''),
      id_usuario_registro_desfecho: new FormControl(''),
      numero_gestacao: new FormControl('1'),
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
      planejada: new FormControl('0'),
      mac_antes_gestacao: new FormControl(''),
      ref_gestacao_planejamento_gestacao: new FormControl(''),
      id_tempo_mac: new FormControl(''),
      mac_antes_gestacao_nome_orientador: new FormControl(''),
      mac_antes_gestacao_obs: new FormControl(''),
      ref_mac_gestacao: new FormControl(''),
    });

    
    return this.formDadosPlanejamento
  }

  getFormAbaDadosPreNatal() {
    let builder = new FormBuilder()

    this.formDadosPreNatal = builder.group({
      ref_gestacao_exame_prenatal: new FormControl(''),
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

  abrirFormAbaDadosGestacao(id) {
    this.router.navigateByUrl("mae/:id/gestacao/cadastro/dados-gestacao".replace(":id", id))
  }

  abrirFormAbaDadosPlanejamento(id) {
    this.router.navigateByUrl("mae/:id/gestacao/cadastro/dados-planejamento".replace(":id", id))
  }

  abrirFormAbaDadosPreNatal(id) {
    this.router.navigateByUrl("mae/:id/gestacao/cadastro/dados-prenatal".replace(":id", id))
  }

  async mapearCampos(id_mae) {
    let usuario:User = await this.login.getUser()
    
    let camposPadrao = {
      id_mae: id_mae
    }
    let camposFormDadosGestacao = this.formDadosGestacao.getRawValue();

    let dt_dum:moment.Moment = moment(camposFormDadosGestacao.dt_dum)
    if(dt_dum.isValid()) camposFormDadosGestacao.dt_dum = dt_dum.format('DD/MM/YYYY')

    let dt_dpp:moment.Moment = moment(camposFormDadosGestacao.dt_dpp)
    if(dt_dpp.isValid()) camposFormDadosGestacao.dt_dpp = dt_dpp.format('DD/MM/YYYY')

    let dt_dpp_eco:moment.Moment = moment(camposFormDadosGestacao.dt_dpp_eco)
    if(dt_dpp_eco.isValid()) camposFormDadosGestacao.dt_dpp_eco = dt_dpp_eco.format('DD/MM/YYYY')

    let camposFormDadosPlanejamento = this.formDadosPlanejamento.getRawValue();
    let camposFormDadosPreNatal = this.formDadosPreNatal.getRawValue();

    let camposUsuario = {
      dt_registro: '01/09/2019',
      id_usuario_registro: usuario.id
    }

    let campos = { 
      ...camposPadrao, 
      ...camposFormDadosGestacao, 
      ...camposFormDadosPlanejamento, 
      ...camposFormDadosPreNatal,
      ...camposUsuario
    }

    return campos
  }

  async salvar(id) {
    let campos:object = await this.mapearCampos(id)
    this.api.chamarPOST('mae/:id/gestacao/new'.replace(":id", id), campos);

    this.router.navigateByUrl("mae/:id/gestacao".replace(":id", id))
  }
}
